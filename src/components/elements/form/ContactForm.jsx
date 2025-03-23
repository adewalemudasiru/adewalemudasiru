import React from "react";
import Input from "../form/Input";
import TextArea from "../form/TextArea";
import Button from "../form/Button";
import { Send } from "lucide-react";

const ContactForm = () => {
  return (
    <form action="post" className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="text-textPrimary">
            Name
          </label>
          <Input
            id="name"
            type="text"
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
          placeholder="Your Message"
          rows={6}
          className="mt-2"
          required
        />
      </div>
      <Button type="submit" endIcon={<Send size={16} />}>
        Send Message
      </Button>
    </form>
  );
};

export default ContactForm;
