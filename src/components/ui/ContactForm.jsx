import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "@tanstack/react-form";
import { z } from "zod";
import { LoaderCircle } from "lucide-react";
import { Input } from "./Input";
import { TextArea } from "./TextArea";
import { Button } from "./Button";
import { profile } from "../data/allData";

// EmailJS public key is designed to be exposed client-side; abuse limits live in the EmailJS dashboard.
const serviceId = import.meta.env.VITE_SERVICE_ID;
const templateId = import.meta.env.VITE_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_PUBLIC_KEY;

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name (at least 2 characters)."),
  email: z.string().trim().email("Please enter a valid email address."),
  subject: z.string().trim().min(3, "Please add a short subject."),
  message: z.string().trim().min(10, "Please write a message of at least 10 characters."),
  company: z.string(), // honeypot: hidden from people, often filled by bots
});

const fields = [
  { name: "name", label: "Name", autoComplete: "name" },
  { name: "email", label: "Email", type: "email", autoComplete: "email" },
  { name: "subject", label: "Subject", wide: true },
  { name: "message", label: "Message", wide: true, multiline: true },
];

export const ContactForm = () => {
  // idle | sending | sent | error
  const [status, setStatus] = useState("idle");

  const form = useForm({
    defaultValues: { name: "", email: "", subject: "", message: "", company: "" },
    validators: { onBlur: contactSchema, onSubmit: contactSchema },
    onSubmit: async ({ value }) => {
      if (value.company) {
        setStatus("sent"); // silently drop bot submissions
        return;
      }
      setStatus("sending");
      try {
        if (!serviceId || !templateId || !publicKey) throw new Error("EmailJS env vars missing");
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: value.name.trim(),
            from_email: value.email.trim(),
            subject: value.subject.trim(),
            message: value.message.trim(),
            to_name: profile.name,
          },
          { publicKey },
        );
        form.reset();
        setStatus("sent");
      } catch (error) {
        console.error("Contact form failed to send:", error);
        setStatus("error");
      }
    },
  });

  return (
    <form
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        if (status !== "sending") form.handleSubmit();
      }}
      className="grid gap-6 sm:grid-cols-2"
    >
      {fields.map(({ name, label, type = "text", autoComplete, wide, multiline }) => (
        <form.Field key={name} name={name}>
          {(field) => {
            const error = field.state.meta.errors[0]?.message;
            const Control = multiline ? TextArea : Input;
            return (
              <div className={wide ? "sm:col-span-2" : ""}>
                <label htmlFor={name} className="mb-2 block text-sm font-medium">
                  {label}
                </label>
                <Control
                  id={name}
                  name={name}
                  type={multiline ? undefined : type}
                  autoComplete={autoComplete}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => {
                    field.handleChange(e.target.value);
                    if (status !== "sending") setStatus("idle");
                  }}
                  aria-invalid={error ? true : undefined}
                  aria-describedby={error ? `${name}-error` : undefined}
                  rows={multiline ? 6 : undefined}
                />
                {error && (
                  <p id={`${name}-error`} className="mt-2 text-sm text-red-700 dark:text-red-400">
                    {error}
                  </p>
                )}
              </div>
            );
          }}
        </form.Field>
      ))}

      {/* Honeypot */}
      <form.Field name="company">
        {(field) => (
          <div aria-hidden="true" className="absolute -left-[9999px] size-px overflow-hidden">
            <label htmlFor="company">Company</label>
            <input
              id="company"
              tabIndex={-1}
              autoComplete="off"
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
            />
          </div>
        )}
      </form.Field>

      <div className="flex flex-wrap items-center gap-x-6 gap-y-3 sm:col-span-2">
        <Button type="submit" disabled={status === "sending"}>
          {status === "sending" && <LoaderCircle size={16} className="animate-spin" aria-hidden="true" />}
          {status === "sending" ? "Sending…" : "Send message"}
        </Button>
        <p role="status" aria-live="polite" className="text-sm">
          {status === "sent" && (
            <span className="animate-fade">Thanks — your message was sent. I&apos;ll reply by email.</span>
          )}
          {status === "error" && (
            <span className="animate-fade text-red-700 dark:text-red-400">
              Your message couldn&apos;t be sent. Please try again or email{" "}
              <a href={`mailto:${profile.email}`} className="link-underline">
                {profile.email}
              </a>
              .
            </span>
          )}
        </p>
      </div>
    </form>
  );
};
