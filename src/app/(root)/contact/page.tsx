"use client";
import { sendContactMessage } from "../../../../lib/actions/contact.action";
import Link from "next/link";
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [emailError, setEmailError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Clear email error when user starts typing
    if (e.target.name === "email") {
      setEmailError("");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("message", formData.message);

      const response = await sendContactMessage(formDataToSend);
      if (response.success) {
        setIsSuccess(true);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="mx-[125px] max-w-[800px] p-6">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="relative">
            {/* Outer circle with pulse animation */}
            <div className="absolute -inset-4">
              <div className="size-full animate-pulse rounded-full bg-blue-500/20"></div>
            </div>
            {/* Inner circle with checkmark */}
            <div className="relative flex size-20 items-center justify-center rounded-full bg-blue-500">
              <svg
                className="size-10 animate-[scale-in_0.3s_ease-out] text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>
          <h2 className="animate-[fade-in_0.5s_ease-out] text-2xl font-semibold text-white">
            Message Sent Successfully!
          </h2>
          <p className="text-light-gray animate-[fade-in_0.5s_ease-out] text-center">
            Thank you for reaching out. I&apos;ll get back to you soon!
          </p>
        </div>
      </div>
    );
  }

  console.log("issubmit", isSubmitting);
  console.log("isSucess", isSuccess);
  console.log("error", emailError);
  console.log(formData);
  return (
    <div className="mx-[125px] max-w-[800px] p-6">
      <h1 className="h1-semibold mb-3 leading-tight">
        Let&apos;s Work Together
      </h1>
      <p className="text-light-gray text-sm">
        Whether you have a project in mind or just want to say hello, feel free
        to reach out at{" "}
        <Link
          href="mailto:ahmedabdelrazik919@gmail.com"
          className="text-white hover:text-[#808080]"
        >
          ahmedabdelrazik@gmail.com
        </Link>
        .
      </p>
      <div className="animate-fadeInUp mt-10">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
            <div className="relative w-full sm:w-[48%]">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="peer w-full rounded-lg border bg-transparent p-4 text-white outline-none transition-all autofill:bg-transparent focus:border-white"
                placeholder=" "
                required
                disabled={isSubmitting}
              />
              <label
                htmlFor="name"
                className="text-light-gray absolute -top-3 left-4 rounded-lg px-2 text-sm transition-all
         peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:bg-white peer-focus:text-sm peer-focus:text-black"
              >
                Name
              </label>
            </div>

            <div className="relative w-full sm:w-[48%]">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`peer w-full rounded-lg border bg-transparent p-4 text-white outline-none transition-all autofill:bg-transparent focus:border-white ${
                  emailError ? "border-red-500" : ""
                }`}
                placeholder=" "
                required
                disabled={isSubmitting}
              />
              <label
                htmlFor="email"
                className="text-light-gray absolute -top-3 left-4 rounded-lg px-2 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:bg-white peer-focus:text-sm peer-focus:text-black"
              >
                Email
              </label>
              {emailError && (
                <p className="mt-1 text-sm text-red-500">{emailError}</p>
              )}
            </div>
          </div>
          <div className="relative">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="peer w-full rounded-lg border bg-transparent p-4 text-white outline-none transition-all focus:border-white"
              placeholder=" "
              required
              disabled={isSubmitting}
            />
            <label
              htmlFor="message"
              className="text-light-gray absolute -top-3 left-4 rounded-lg px-2 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:bg-white peer-focus:text-sm peer-focus:text-black"
            >
              Message
            </label>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full rounded-lg px-6 py-3 transition-colors ${
              isSubmitting
                ? "bg-primary-100/70 cursor-not-allowed text-black/70"
                : "bg-primary-100 hover:bg-primary-500 text-black"
            }`}
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <svg
                  className="mr-2 size-5 animate-spin text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Sending...
              </div>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
