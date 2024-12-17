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
exports.viewBookings = exports.deletePackage = exports.updatePackage = exports.addPackage = void 0;
const Package_1 = __importDefault(require("../models/Package"));
const BookingModel_1 = __importDefault(require("../models/BookingModel"));
const mongoose_1 = require("mongoose");
const handleError = (res, message, status = 500) => {
    res.status(status).json({ error: message });
};
const addPackage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { title, description, price, availableDates } = req.body;
        //@ts-ignore
        const image = (_a = req.file) === null || _a === void 0 ? void 0 : _a.path;
        if (!title || !description || !price || !availableDates) {
            return handleError(res, "All fields are required", 400);
        }
        const newPackage = new Package_1.default({
            title,
            description,
            price,
            availableDates,
            image,
        });
        yield newPackage.save();
        res.status(201).json(newPackage);
    }
    catch (err) {
        console.error(err);
        handleError(res, "Failed to add package");
    }
});
exports.addPackage = addPackage;
const updatePackage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { id } = req.params;
        const { title, description, price, availableDates } = req.body;
        // @ts-ignore
        const image = (_a = req.file) === null || _a === void 0 ? void 0 : _a.path;
        const updatedData = {
            title,
            description,
            price,
            availableDates,
        };
        if (image) {
            updatedData.image = image;
        }
        const updatedPackage = yield Package_1.default.findByIdAndUpdate(id, updatedData, {
            new: true,
        });
        if (!updatedPackage) {
            return handleError(res, "Package not found", 404);
        }
        res.status(200).json(updatedPackage);
    }
    catch (err) {
        console.error(err);
        handleError(res, "Failed to update package");
    }
});
exports.updatePackage = updatePackage;
const deletePackage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        if (!mongoose_1.Types.ObjectId.isValid(id)) {
            return handleError(res, "Invalid package ID", 400);
        }
        const deletedPackage = yield Package_1.default.findByIdAndDelete(id);
        if (!deletedPackage) {
            return handleError(res, "Package not found", 404);
        }
        res.status(200).json({ message: "Package deleted" });
    }
    catch (err) {
        console.error(err);
        handleError(res, "Failed to delete package");
    }
});
exports.deletePackage = deletePackage;
const viewBookings = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bookings = yield BookingModel_1.default.find().populate("packageId");
        if (!bookings.length) {
            return handleError(res, "No bookings found", 404);
        }
        res.status(200).json(bookings);
    }
    catch (err) {
        console.error(err);
        handleError(res, "Failed to fetch bookings");
    }
});
exports.viewBookings = viewBookings;
