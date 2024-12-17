// src/controllers/adminController.ts
import { Request, Response } from "express";
import Package from "../models/Package";
import Booking from "../models/BookingModel";
import { Types } from "mongoose";

const handleError = (res: Response, message: string, status = 500) => {
  res.status(status).json({ error: message });
};

export const addPackage = async (req: Request, res: Response) => {
  try {
    const { title, description, price, availableDates } = req.body;
    //@ts-ignore
    const image = req.file?.path;

    if (!title || !description || !price || !availableDates) {
      return handleError(res, "All fields are required", 400);
    }

    const newPackage = new Package({
      title,
      description,
      price,
      availableDates,
      image,
    });

    await newPackage.save();
    res.status(201).json(newPackage);
  } catch (err) {
    console.error(err);
    handleError(res, "Failed to add package");
  }
};

export const updatePackage = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, description, price, availableDates } = req.body;
    // @ts-ignore
    const image = req.file?.path;

    const updatedData: Partial<typeof Package.prototype> = {
      title,
      description,
      price,
      availableDates,
    };

    if (image) {
      updatedData.image = image;
    }

    const updatedPackage = await Package.findByIdAndUpdate(id, updatedData, {
      new: true,
    });

    if (!updatedPackage) {
      return handleError(res, "Package not found", 404);
    }

    res.status(200).json(updatedPackage);
  } catch (err) {
    console.error(err);
    handleError(res, "Failed to update package");
  }
};

export const deletePackage = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!Types.ObjectId.isValid(id)) {
      return handleError(res, "Invalid package ID", 400);
    }

    const deletedPackage = await Package.findByIdAndDelete(id);

    if (!deletedPackage) {
      return handleError(res, "Package not found", 404);
    }

    res.status(200).json({ message: "Package deleted" });
  } catch (err) {
    console.error(err);
    handleError(res, "Failed to delete package");
  }
};

export const viewBookings = async (_req: Request, res: Response) => {
  try {
    const bookings = await Booking.find().populate("packageId");

    if (!bookings.length) {
      return handleError(res, "No bookings found", 404);
    }

    res.status(200).json(bookings);
  } catch (err) {
    console.error(err);
    handleError(res, "Failed to fetch bookings");
  }
};
