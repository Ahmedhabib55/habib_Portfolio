interface ThankYouEmailProps {
  name: string;
}

interface ContactNotificationProps {
  name: string;
  email: string;
  message: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : process.env.BASE_URL || "http://localhost:3000";

// Styles as CSS strings
const emailStyles = `
  <style>
    .email-main {
      background-color: #ffffff;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    }
    .email-container {
      margin: 0 auto;
      padding: 20px 0 48px;
      max-width: 600px;
    }
    .header-container {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      margin: 20px 0;
    }
    .logo {
      object-fit: cover;
    }
    .paragraph {
      font-size: 16px;
      line-height: 26px;
      color: #333333;
      margin: 16px 0;
    }
    .heading {
      color: #333333;
      font-size: 24px;
      font-weight: 600;
      margin: 0;
    }
    .hr {
      border: none;
      border-top: 1px solid #cccccc;
      margin: 20px 0;
    }
    .social-container {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 16px;
      margin: 20px 0;
    }
    .social-icon {
      width: 24px;
      height: 24px;
    }
    .social-link {
      text-decoration: none;
    }
    .contact-info {
      background-color: #f8f9fa;
      padding: 16px;
      border-radius: 8px;
      margin: 16px 0;
    }
    .contact-label {
      font-weight: 600;
      color: #333333;
      margin-bottom: 4px;
    }
    .contact-value {
      color: #666666;
      margin-bottom: 12px;
      word-wrap: break-word;
    }
  </style>
`;

export const generateThankYouEmail = ({
  name,
}: ThankYouEmailProps): { html: string; text: string } => {
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        ${emailStyles}
      </head>
      <body class="email-main">
        <div class="email-container">
          <div class="header-container">
            <img
              src="${baseUrl}/assets/images/habib_logo_black.jpg"
              width="70"
              height="70"
              alt="Habib"
              class="logo"
            />
            <h2 class="heading">Habib</h2>
          </div>

          <p class="paragraph">Hi ${name} 👋 ,</p>
          <p class="paragraph">
            Thank you for contacting us! We have received your message and will
            get back to you shortly.
          </p>
          <p class="paragraph">
            Best regards,<br />
            Habib
          </p>
          
          <hr class="hr" />

          <div class="social-container">
            <a href="https://www.linkedin.com/in/ahmed-habib-65a781274" class="social-link">
              <img
                src="${baseUrl}/assets/images/linkedin_emailThx.svg"
                width="24"
                height="24"
                alt="LinkedIn"
                class="social-icon"
              />
            </a>
            <a href="https://x.com/ahmed_H_habib" class="social-link">
              <img
                src="${baseUrl}/assets/images/x_emailThx.svg"
                width="24"
                height="24"
                alt="X (Twitter)"
                class="social-icon"
              />
            </a>
            <a href="https://github.com/Ahmedhabib55" class="social-link">
              <img
                src="${baseUrl}/assets/images/github_emailThx.svg"
                width="24"
                height="24"
                alt="GitHub"
                class="social-icon"
              />
            </a>
          </div>
        </div>
      </body>
    </html>
  `;

  const text = `
Hi ${name},

Thank you for contacting us! We have received your message and will get back to you shortly.

Best regards,
Habib

Connect with us:
LinkedIn: https://www.linkedin.com/in/ahmed-habib-65a781274
X (Twitter): https://x.com/ahmed_H_habib
GitHub: https://github.com/Ahmedhabib55
  `;

  return { html, text };
};

export const generateContactNotificationEmail = ({
  name,
  email,
  message,
}: ContactNotificationProps): { html: string; text: string } => {
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission</title>
        ${emailStyles}
      </head>
      <body class="email-main">
        <div class="email-container">
          <div class="header-container">
            <img
              src="${baseUrl}/assets/images/habib_logo_black.jpg"
              width="70"
              height="70"
              alt="Habib"
              class="logo"
            />
            <h2 class="heading">New Contact Message</h2>
          </div>

          <p class="paragraph">You have received a new message from your contact form:</p>
          
          <div class="contact-info">
            <div class="contact-label">Name:</div>
            <div class="contact-value">${name}</div>
            
            <div class="contact-label">Email:</div>
            <div class="contact-value">${email}</div>
            
            <div class="contact-label">Message:</div>
            <div class="contact-value">${message.replace(/\n/g, "<br>")}</div>
          </div>

          <p class="paragraph">
            <strong>Reply to:</strong> 
            <a href="mailto:${email}">${email}</a>
          </p>
          
          <hr class="hr" />
          
          <p class="paragraph" style="font-size: 14px; color: #666666;">
            This email was sent from your website contact form.
          </p>
        </div>
      </body>
    </html>
  `;

  const text = `
New Contact Form Submission

Name: ${name}
Email: ${email}
Message: ${message}

Reply to: ${email}

---
This email was sent from your website contact form.
  `;

  return { html, text };
};
