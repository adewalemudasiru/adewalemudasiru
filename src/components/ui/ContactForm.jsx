import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Input } from "../ui/Input";
import { TextArea } from "../ui/TextArea";
import { Button } from "../ui/Button";
import { LoaderCircle, Send } from "lucide-react";

import { useForm } from "@tanstack/react-form";
import { z } from "zod";

const serviceId = import.meta.env.VITE_SERVICE_ID;
const templateId = import.meta.env.VITE_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_PUBLIC_KEY;

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Enter a valid email address"),
  subject: z.string().min(3, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [buttonText, setButtonText] = useState("Send Message");

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },

    validators: {
      onBlur: contactSchema,
      onSubmit: contactSchema,
    },

    onSubmit: async ({ value }) => {
      if (!serviceId || !templateId || !publicKey) {
        alert("EmailJS is not configured properly");
        return;
      }

      const templateParams = {
        from_name: value.name,
        from_email: value.email,
        subject: value.subject,
        message: value.message,
        to_name: "Adewale Mudasiru",
      };

      try {
        setLoading(true);
        setButtonText("Sending...");
        console.log({
          serviceId,
          templateId,
          publicKey,
        });
        const response = await emailjs.send(
          serviceId,
          templateId,
          templateParams,
          publicKey,
        );

        console.log("Email sent successfully!", response);

        form.reset();

        setButtonText("Message Sent");

        setTimeout(() => {
          setButtonText("Send Message");
        }, 3000);
      } catch (error) {
        console.error("Email sending failed:", error);
        setButtonText("Send Message");
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();

        form.handleSubmit();
      }}
      className="space-y-6 mt-6"
    >
      <div className="grid md:grid-cols-2 gap-4">
        {/* Name */}
        <form.Field name="name">
          {(field) => (
            <div>
              <label htmlFor={field.name} className="text-textPrimary">
                Name
              </label>

              <Input
                id={field.name}
                name={field.name}
                type="text"
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                placeholder="John Doe"
                className="mt-2"
              />

              {field.state.meta.errors.length > 0 && (
                <p className="text-red-500 text-sm mt-1">
                  {field.state.meta.errors[0]?.message}
                </p>
              )}
            </div>
          )}
        </form.Field>

        {/* Email */}
        <form.Field name="email">
          {(field) => (
            <div>
              <label htmlFor={field.name} className="text-textPrimary">
                Email
              </label>

              <Input
                id={field.name}
                name={field.name}
                type="email"
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                placeholder="johndoe@email.com"
                className="mt-2"
              />

              {field.state.meta.errors.length > 0 && (
                <p className="text-red-500 text-sm mt-1">
                  {field.state.meta.errors[0]?.message}
                </p>
              )}
            </div>
          )}
        </form.Field>
      </div>

      {/* Subject */}
      <form.Field name="subject">
        {(field) => (
          <div>
            <label htmlFor={field.name} className="text-textPrimary">
              Subject
            </label>

            <Input
              id={field.name}
              name={field.name}
              type="text"
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
              placeholder="Web Development"
              className="mt-2"
            />

            {field.state.meta.errors.length > 0 && (
              <p className="text-red-500 text-sm mt-1">
                {field.state.meta.errors[0]?.message}
              </p>
            )}
          </div>
        )}
      </form.Field>

      {/* Message */}
      <form.Field name="message">
        {(field) => (
          <div>
            <label htmlFor={field.name} className="text-textPrimary">
              Message
            </label>

            <TextArea
              id={field.name}
              name={field.name}
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
              placeholder="Your Message"
              rows={6}
              className="mt-2"
            />

            {field.state.meta.errors.length > 0 && (
              <p className="text-red-500 text-sm mt-1">
                {field.state.meta.errors[0]?.message}
              </p>
            )}
          </div>
        )}
      </form.Field>

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
