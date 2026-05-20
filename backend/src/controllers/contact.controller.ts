import type { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import { Lead } from "../models/Lead.js";
import { sendLeadNotification } from "../utils/mailer.js";
import { contactSchema } from "../validators/contact.schema.js";

export async function createContactRequest(req: Request, res: Response, next: NextFunction) {
  try {
    const payload = contactSchema.parse(req.body);

    if (mongoose.connection.readyState === 1) {
      await Lead.create(payload);
    }

    await sendLeadNotification(payload);

    res.status(201).json({
      message: "Request submitted successfully."
    });
  } catch (error) {
    next(error);
  }
}
