import { Request, Response } from "express";

export const getAllUsers = (req: Request, res: Response): void => {
  res.status(200).json({
    message: "All users fetched successfully",
  });
};

export const createUser = (req: Request, res: Response): void => {
  const { name, email } = req.body;

  res.status(201).json({
    message: "User created successfully",
    user: { name, email },
  });
};
