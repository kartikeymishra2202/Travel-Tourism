import mongoose, { Schema, Document } from "mongoose";

interface IBooking extends Document {
  customerName: string;
  email: string;
  phone: string;
  travelers: number;
  specialRequests?: string;
  packageId: string;
  totalPrice: number;
}

const BookingSchema: Schema = new Schema({
  customerName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  travelers: { type: Number, required: true },
  specialRequests: { type: String },
  packageId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Package",
    required: true,
  },
  totalPrice: { type: Number, required: true },
});

export default mongoose.model<IBooking>("Booking", BookingSchema);
