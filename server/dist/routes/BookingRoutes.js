"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const BookingController_1 = require("../controllers/BookingController");
const router = (0, express_1.Router)();
//@ts-ignore
router.post("/", BookingController_1.createBooking);
exports.default = router;
