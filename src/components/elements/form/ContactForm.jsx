import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Input from "../form/Input";
import TextArea from "../form/TextArea";
import Button from "../form/Button";
import { LoaderCircle, Send } from "lucide-react";

/**
 * A contact form component that allows users to send an email to the website
 * owner using EmailJS. The component renders a form with fields for name,
 * email, subject, and message. When the form is submitted, the component sends
 * an email using EmailJS and displays a success message or an error message
 * depending on whether the email was sent successfully or not.
 *
 * @returns {React.ReactElement} The contact form component.
 */
const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [buttonText, setButtonText] = useState("Send Message");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS serviceID, templateID, and publicKey
    const serviceId = "service_3cznyeq";
    const templateId = "template_44hdq4c";
    const publicKey = "dIN02ZP4qS_kIlO2c";

    // Send email using EmailJS
    const templateParams = {
      from_name: name,
      from_email: email,
      subject: subject,
      message: message,
      to_name: "Adewale Mudasiru",
    };

    // Set loading to true before sending the email
    setLoading(true);
    setButtonText("Sending...");

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");

        setButtonText("Message Sent");
        setTimeout(() => setButtonText("Send Message"), 3000); // Reset button text after 3 seconds
        setLoading(false);
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
        setButtonText("Send Message");
        setLoading(false);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 mt-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="text-textPrimary">
            Name
          </label>
          <Input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Doe"
            className="mt-2"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="text-textPrimary">
            Email
          </label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="johndoe@email.com"
            className="mt-2"
            required
          />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="text-textPrimary">
          Subject
        </label>
        <Input
          id="subject"
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Web Development"
          className="mt-2"
          required
        />
      </div>
      <div>
        <label htmlFor="message" className="text-textPrimary">
          Message
        </label>
        <TextArea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your Message"
          rows={6}
          className="mt-2"
          required
        />
      </div>
      <Button
        type="submit"
        disabled={loading}
        className={loading ? "cursor-not-allowed" : ""}
        endIcon={
          loading ? (
            <LoaderCircle color="#fff" className="animate-spin" size={16} />
          ) : (
            <Send size={16} />
          )
        }
      >
        {buttonText}
      </Button>
    </form>
  );
};

export default ContactForm;
