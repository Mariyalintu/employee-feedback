import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import employeeRoutes from "./routes/employees.js";
import reviewRoutes from "./routes/reviews.js";
import dotenv from "dotenv"; // Use dotenv to manage environment variables

dotenv.config(); // Load environment variables

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({ message: "API is healthy" });
});

// Routes
app.use("/api/employees", employeeRoutes);
app.use("/api/reviews", reviewRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// Graceful shutdown
process.on("SIGINT", async () => {
  await mongoose.connection.close();
  console.log("MongoDB connection closed.");
  process.exit(0);
});
