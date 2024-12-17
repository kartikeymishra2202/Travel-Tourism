import { Router } from "express";
import { createBooking } from "../controllers/BookingController";

const router = Router();

//@ts-ignore
router.post("/", createBooking);

export default router;
