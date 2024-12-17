import { Router } from "express";
import {
  addPackage,
  updatePackage,
  deletePackage,
  viewBookings,
} from "../controllers/AdminController";

const router = Router();

router.post("/packages", addPackage);
//@ts-ignore
router.put("/packages/:id", updatePackage);
//@ts-ignore
router.delete("/packages/:id", deletePackage);
router.get("/bookings", viewBookings);

export default router;
