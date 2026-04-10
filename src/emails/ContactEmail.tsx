import {
    Html,
    Body,
    Container,
    Text,
    Heading,
    Hr,
} from "@react-email/components";
  
interface ContactEmailProps {
    name: string;
    email: string;
    service: string;
    message: string;
}
  
export const ContactEmail = ({
    name,
    email,
    service,
    message,
}: ContactEmailProps) => (
    <Html>
      <Body style={{ fontFamily: "sans-serif", padding: "20px" }}>
        <Container>
          <Heading>New Lead</Heading>
          <Hr />
          <Text><strong>Name:</strong> {name}</Text>
          <Text><strong>Email:</strong> {email}</Text>
          <Text><strong>Service Needed:</strong> {service}</Text>
          <Text><strong>Message:</strong></Text>
          <Text>{message}</Text>
        </Container>
      </Body>
    </Html>
);