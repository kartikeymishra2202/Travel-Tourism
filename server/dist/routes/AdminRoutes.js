"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AdminController_1 = require("../controllers/AdminController");
const router = (0, express_1.Router)();
router.post("/packages", AdminController_1.addPackage);
//@ts-ignore
router.put("/packages/:id", AdminController_1.updatePackage);
//@ts-ignore
router.delete("/packages/:id", AdminController_1.deletePackage);
router.get("/bookings", AdminController_1.viewBookings);
exports.default = router;
