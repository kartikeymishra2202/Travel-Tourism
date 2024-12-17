"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const PackageRoutes_1 = __importDefault(require("./routes/PackageRoutes"));
const BookingRoutes_1 = __importDefault(require("./routes/BookingRoutes"));
const AdminRoutes_1 = __importDefault(require("./routes/AdminRoutes"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
app.use(express_1.default.json());
app.use((0, cors_1.default)({ origin: "http://localhost:5173" }));
app.use("/api/packages", PackageRoutes_1.default);
app.use("/api/bookings", BookingRoutes_1.default);
app.use("/api/admin", AdminRoutes_1.default);
mongoose_1.default
    .connect(process.env.MONGO_URI || "")
    .then(() => {
    console.log("MongoDB Connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})
    .catch((err) => console.error(`DB Connection Error: ${err}`));
