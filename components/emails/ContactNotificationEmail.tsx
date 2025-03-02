// emails/ContactNotificationEmail.tsx
import { Html } from "@react-email/html";
import { Text } from "@react-email/text";

const headerStyle = {
  fontSize: "20px",
  fontWeight: "bold",
  color: "#4A90E2",
  marginBottom: "16px",
};

const textStyle = {
  fontSize: "16px",
  color: "#333",
  margin: "4px 0",
};

export default function ContactNotificationEmail({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) {
  return (
    <Html>
      <Text style={headerStyle}>New Contact Message Received:</Text>
      <Text style={textStyle}>Name: {name}</Text>
      <Text style={textStyle}>Email: {email}</Text>
      <Text style={textStyle}>Message:</Text>
      <Text style={textStyle}>{message}</Text>
    </Html>
  );
}
