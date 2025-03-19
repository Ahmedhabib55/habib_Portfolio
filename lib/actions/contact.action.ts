"use server";
import { Resend } from "resend";
import ThankYouEmail from "../../components/emails/ThanksYouEmail";
import ContactNotificationEmail from "../../components/emails/ContactNotificationEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactMessage(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;
  try {
    // Send thank-you email to the user
    await resend.emails.send({
      from: "Ahmed Habib <onboarding@resend.dev>",
      to: [email],
      subject: "Thanks for Contacting!",
      react: ThankYouEmail({ name }),
    });

    // Send notification email to my mail
    await resend.emails.send({
      from: "Ahmed Habib <onboarding@resend.dev>",
      to: "ahmedabdelrazik919@gmail.com",
      subject: "New Contact Form Submission",
      react: ContactNotificationEmail({ name, message, email }),
    });

    return { success: true };
  } catch (error) {
    console.log(error);
    return { success: false, error: "Failed to send email" };
  }
}
