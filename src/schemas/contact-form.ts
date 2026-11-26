import z from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name (at least 2 characters)."),
  email: z.email("Please enter a valid email address."),
  subject: z.string().trim().min(3, "Please add a short subject."),
  message: z
    .string()
    .trim()
    .min(10, "Please write a message of at least 10 characters."),
  company: z.string(), // honeypot: hidden from people, often filled by bots
});
