"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBooking = void 0;
const BookingModel_1 = __importDefault(require("../models/BookingModel"));
const Package_1 = __importDefault(require("../models/Package"));
const createBooking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { customerName, email, phone, travelers, specialRequests, packageId, } = req.body;
        const selectedPackage = yield Package_1.default.findById(packageId);
        if (!selectedPackage)
            return res.status(404).json({ error: "Package not found" });
        const totalPrice = selectedPackage.price * travelers;
        const booking = new BookingModel_1.default({
            customerName,
            email,
            phone,
            travelers,
            specialRequests,
            packageId,
            totalPrice,
        });
        yield booking.save();
        res.status(201).json(booking);
    }
    catch (err) {
        res.status(500).json({ error: "Failed to create booking" });
    }
});
exports.createBooking = createBooking;
