// src/models/Package.ts
import mongoose, { Schema, Document } from "mongoose";

interface IPackage extends Document {
  title: string;
  description: string;
  price: number;
  availableDates: string[];
  image: string;
}

const PackageSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  availableDates: { type: [String], required: true },
  image: { type: String, required: false },
});

export default mongoose.model<IPackage>("Package", PackageSchema);
