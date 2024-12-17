import { Request, Response } from "express";
import Booking from "../models/BookingModel";
import Package from "../models/Package";

export const createBooking = async (req: Request, res: Response) => {
  try {
    const {
      customerName,
      email,
      phone,
      travelers,
      specialRequests,
      packageId,
    } = req.body;
    const selectedPackage = await Package.findById(packageId);
    if (!selectedPackage)
      return res.status(404).json({ error: "Package not found" });

    const totalPrice = selectedPackage.price * travelers;
    const booking = new Booking({
      customerName,
      email,
      phone,
      travelers,
      specialRequests,
      packageId,
      totalPrice,
    });

    await booking.save();
    res.status(201).json(booking);
  } catch (err) {
    res.status(500).json({ error: "Failed to create booking" });
  }
};
