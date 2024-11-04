// routes/reviews.js
import express from "express";
import {
  createReview,
  getAllReviews,
  deleteReview, // Ensure this is correctly imported
} from "../controllers/reviewController.js"; // Adjust path if necessary

const router = express.Router();

// Route to create a new review
router.post("/", createReview);

// Route to get all reviews
router.get("/", getAllReviews);

// Route to delete a review
router.delete("/:id", deleteReview);

export default router;
