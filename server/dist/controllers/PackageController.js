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
exports.getPackageById = exports.getPackages = void 0;
const Package_1 = __importDefault(require("../models/Package"));
const getPackages = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const packages = yield Package_1.default.find();
        res.status(200).json(packages);
    }
    catch (err) {
        res.status(500).json({ error: "Failed to fetch packages" });
    }
});
exports.getPackages = getPackages;
const getPackageById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const packageData = yield Package_1.default.findById(id);
        if (!packageData)
            return res.status(404).json({ error: "Package not found" });
        res.status(200).json(packageData);
    }
    catch (err) {
        res.status(500).json({ error: "Failed to fetch package details" });
    }
});
exports.getPackageById = getPackageById;
