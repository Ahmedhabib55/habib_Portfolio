import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Text,
} from "@react-email/components";

interface ThankYouEmailProps {
  name: string;
}

// Styles
const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const headerContainer = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  margin: "20px 0",
};

const logo = {
  objectFit: "cover" as const,
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const socialContainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "16px",
  margin: "20px 0",
};

const socialIcon = {
  width: "24px",
  height: "24px",
};

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const ThankYouEmail = ({ name }: ThankYouEmailProps) => (
  <Html>
    <Head />
    <Body style={main}>
      <Container style={container}>
        <div style={headerContainer}>
          <Img
            src={`${baseUrl}/assets/images/habib_logo.jpg`}
            width="70"
            height="70"
            alt="Habib"
            style={logo}
          />
          <Heading as="h2">Habib</Heading>
        </div>

        <Preview>
          Thank you for reaching out! We appreciate your message.
        </Preview>

        <Text style={paragraph}>Hi {name}👋,</Text>
        <Text style={paragraph}>
          Thank you for contacting us! We have received your message and will
          get back to you shortly.
        </Text>
        <Text style={paragraph}>
          Best regards,
          <br />
          Habib
        </Text>
        <Hr style={hr} />

        <div style={socialContainer}>
          <Link href="https://www.linkedin.com/in/ahmed-habib-65a781274">
            <Img
              src={`${baseUrl}/assets/images/linkedin_emailThx.svg`}
              width="24"
              height="24"
              alt="LinkedIn"
              style={socialIcon}
            />
          </Link>
          <Link href="https://x.com/ahmed_H_habib">
            <Img
              src={`${baseUrl}/assets/images/x_emailThx.svg`}
              width="24"
              height="24"
              alt="X (Twitter)"
              style={socialIcon}
            />
          </Link>
          <Link href="https://github.com/Ahmedhabib55">
            <Img
              src={`${baseUrl}/assets/images/github_emailThx.svg`}
              width="24"
              height="24"
              alt="GitHub"
              style={socialIcon}
            />
          </Link>
        </div>
      </Container>
    </Body>
  </Html>
);

ThankYouEmail.PreviewProps = {
  name: "Habib", // Default preview props for testing
} as ThankYouEmailProps;

export default ThankYouEmail;
