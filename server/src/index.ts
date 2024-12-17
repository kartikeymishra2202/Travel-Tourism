import express, { Application } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import packageRoutes from "./routes/PackageRoutes";
import bookingRoutes from "./routes/BookingRoutes";
import adminRoutes from "./routes/AdminRoutes";
import cors from "cors";

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use(cors({ origin: "http://localhost:5173" }));
app.use("/api/packages", packageRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/admin", adminRoutes);

mongoose
  .connect(process.env.MONGO_URI || "")
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error(`DB Connection Error: ${err}`));
