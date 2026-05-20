import mongoose from "mongoose";

export async function connectDatabase() {
  const uri = process.env.MONGO_URI;

  if (!uri) {
    console.warn("MONGO_URI is not configured. Contact requests will not be stored.");
    return;
  }

  await mongoose.connect(uri);
  console.log("MongoDB connected");
}
