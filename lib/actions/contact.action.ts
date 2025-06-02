"use server";

import { z } from "zod";
import nodemailer from "nodemailer";
import {
  generateContactNotificationEmail,
  generateThankYouEmail,
} from "../email_templates";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});

// Create reusable transporter object
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT) || 587,
    secure: process.env.EMAIL_SECURE === "true", // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
    // Additional configuration for better reliability
    tls: {
      rejectUnauthorized: false, // Allow self-signed certificates
    },
  });
};

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

    const transporter = createTransporter();

    // Verify transporter configuration
    try {
      await transporter.verify();
    } catch (verifyError) {
      console.error("Email transporter verification failed:", verifyError);
      return {
        success: false,
        message: "Email service configuration error",
      };
    }

    // Generate email templates
    const thankYouTemplate = generateThankYouEmail({ name });
    const notificationTemplate = generateContactNotificationEmail({
      name,
      email,
      message,
    });

    // Email to the website owner (notification)
    const notificationMailOptions = {
      from: `"${name}" <${email}>`, // Use sender's name and email
      to: process.env.EMAIL_TO || "ahmedabdelrazik919@gmail.com",
      replyTo: email, // Allow direct reply to the sender
      subject: `New Contact Message from ${name}`,
      text: notificationTemplate.text,
      html: notificationTemplate.html,
      // Add headers for better email handling
      headers: {
        "X-Priority": "1",
        "X-MSMail-Priority": "High",
        Importance: "high",
      },
    };

    // Thank you email to the sender
    const thankYouMailOptions = {
      from: `habib <${process.env.EMAIL_FROM}>`, // Use a fixed sender email
      to: email,
      subject: "Thank you for reaching out!",
      text: thankYouTemplate.text,
      html: thankYouTemplate.html,
    };

    // Send both emails
    const emailPromises = [
      transporter.sendMail(notificationMailOptions),
      transporter.sendMail(thankYouMailOptions),
    ];

    try {
      const results = await Promise.allSettled(emailPromises);

      // Check if notification email was sent successfully (most important)
      const notificationResult = results[0];
      const thankYouResult = results[1];

      if (notificationResult.status === "rejected") {
        throw new Error("Failed to send notification email");
      }

      // Log if thank you email failed, but don't fail the entire operation
      if (thankYouResult.status === "rejected") {
        console.warn("Thank you email failed to send:", thankYouResult.reason);
      }

      return {
        success: true,
        message: "Message sent successfully",
        details: {
          notificationSent: notificationResult.status === "fulfilled",
          thankYouSent: thankYouResult.status === "fulfilled",
        },
      };
    } catch (emailError) {
      console.error("Error sending emails:", emailError);
      return {
        success: false,
        message: "Failed to send message. Please try again later.",
      };
    }
  } catch (error) {
    console.error("Error in sendContactMessage:", error);
    return {
      success: false,
      message: "An unexpected error occurred. Please try again later.",
    };
  }
}
