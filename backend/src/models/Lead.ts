import mongoose, { Schema } from "mongoose";

const LeadSchema = new Schema(
  {
    propertyType: { type: String, required: true },
    industry: { type: String, required: true },
    systemSize: { type: String, required: true },
    ownership: { type: String, required: true },
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, required: true, trim: true },
    interests: [{ type: String }]
  },
  { timestamps: true }
);

export const Lead = mongoose.model("Lead", LeadSchema);
