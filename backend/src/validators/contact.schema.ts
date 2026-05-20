import { z } from "zod";

export const contactSchema = z.object({
  propertyType: z.string().min(2).max(80),
  industry: z.string().min(2).max(80),
  systemSize: z.string().min(2).max(80),
  ownership: z.string().min(2).max(100),
  firstName: z.string().min(2, "First name is required.").max(80),
  lastName: z.string().min(2, "Last name is required.").max(80),
  email: z.string().email("A valid email is required."),
  phone: z.string().min(7, "A valid phone number is required.").max(30),
  interests: z.array(z.string().min(2).max(80)).default([])
});

export type ContactInput = z.infer<typeof contactSchema>;
