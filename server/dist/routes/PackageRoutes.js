"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PackageController_1 = require("../controllers/PackageController");
const router = (0, express_1.Router)();
router.get("/", PackageController_1.getPackages);
//@ts-ignore
router.get("/:id", PackageController_1.getPackageById);
exports.default = router;
