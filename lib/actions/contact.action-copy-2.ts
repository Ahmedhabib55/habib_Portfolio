// lib/actions/contact.action.ts
"use server";

import { z } from "zod";
import nodemailer from "nodemailer";
// import { render } from "@react-email/render";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});

export async function sendContactMessage(formData: FormData) {
  try {
    // Extract data from FormData
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    // Validate input data
    const validatedData = contactSchema.safeParse({ name, email, message });
    if (!validatedData.success) {
      return {
        success: false,
        message: "Validation failed",
        errors: validatedData.error.flatten().fieldErrors,
      };
    }

    // You can use any email service here (SendGrid, AWS SES, etc.)
    // This is a basic example using nodemailer with a test account
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: process.env.EMAIL_SECURE === "true",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Email content
    const thankYouMail = {
      from: process.env.EMAIL_FROM,
      to: email,
      subject: `Thank you for reaching out! We appreciate your message.`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `
        <div>
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br>")}</p>
        </div>
      `,
    };

    // const contactNotificationMail = {
    //   from: process.env.EMAIL_FROM,
    //   to: email,
    //   subject: `New Contact Message from ${name}`,
    //   text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    //   // html: `
    //   //   <div>
    //   //     <h2>New Contact Form Submission</h2>
    //   //     <p><strong>Name:</strong> ${name}</p>
    //   //     <p><strong>Email:</strong> ${email}</p>
    //   //     <p><strong>Message:</strong></p>
    //   //     <p>${message.replace(/\n/g, "<br>")}</p>
    //   //   </div>
    //   // `,
    //   react: render(ThankYouEmail({ name })),
    // };

    // Send email
    await transporter.sendMail(thankYouMail);
    // await transporter.sendMail(contactNotificationMail);

    transporter.verify((err, success) => {
      if (err) {
        console.error("Error:", err);
      } else {
        console.log("Server is ready to send emails!");
      }
    });
    return {
      success: true,
      message: "Message sent successfully",
    };
  } catch (error) {
    console.error("Error sending contact message:", error);
    return {
      success: false,
      message: "Failed to send message. Please try again later.",
    };
  }
}
