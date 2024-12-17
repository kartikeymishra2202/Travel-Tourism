import { Router } from "express";
import { getPackages, getPackageById } from "../controllers/PackageController";

const router = Router();

router.get("/", getPackages);
//@ts-ignore
router.get("/:id", getPackageById);

export default router;
