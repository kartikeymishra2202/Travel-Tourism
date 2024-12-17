import { Request, Response } from "express";
import Package from "../models/Package";

export const getPackages = async (_req: Request, res: Response) => {
  try {
    const packages = await Package.find();
    res.status(200).json(packages);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch packages" });
  }
};

export const getPackageById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const packageData = await Package.findById(id);
    if (!packageData)
      return res.status(404).json({ error: "Package not found" });
    res.status(200).json(packageData);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch package details" });
  }
};
