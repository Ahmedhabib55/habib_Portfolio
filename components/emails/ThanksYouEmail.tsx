import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  // Img,
  Preview,
  Text,
} from "@react-email/components";

interface ThankYouEmailProps {
  name: string;
}

// const baseUrl = process.env.VERCEL_URL
//   ? `https://${process.env.VERCEL_URL}`
//   : "";

// Styles
const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

// const logo = {
//   margin: "0 auto",
// };

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

export const ThankYouEmail = ({ name }: ThankYouEmailProps) => (
  <Html>
    <Head />
    <Preview>Thank you for reaching out! We appreciate your message.</Preview>
    <Body style={main}>
      <Container style={container}>
        {/* <Img
          src={`${baseUrl}/static/your-logo.png`} // Update with your logo URL
          width="170"
          height="50"
          alt="Your Company"
          style={logo}
        /> */}
        <Text style={paragraph}>Hi {name},</Text>
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
      </Container>
    </Body>
  </Html>
);

ThankYouEmail.PreviewProps = {
  name: "habib", // Default preview props for testing
} as ThankYouEmailProps;

export default ThankYouEmail;
