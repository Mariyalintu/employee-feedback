// controllers/reviewController.js
import Review from "../models/review.model.js";

// Create a new review
export const createReview = async (req, res) => {
  const { reviewerId, revieweeId, feedback } = req.body;

  try {
    const newReview = new Review({ reviewerId, revieweeId, feedback });
    await newReview.save();
    res.status(201).json(newReview);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

// Get all reviews
export const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find()
      .populate("reviewerId", "username") // Populate reviewer username
      .populate("revieweeId", "username"); // Populate reviewee username
    res.status(200).json(reviews);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Get a review by ID
export const getReviewById = async (req, res) => {
  const { id } = req.params;

  try {
    const review = await Review.findById(id)
      .populate("reviewerId", "username") // Populate reviewer username
      .populate("revieweeId", "username"); // Populate reviewee username

    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }
    res.status(200).json(review);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Delete a review
export const deleteReview = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedReview = await Review.findByIdAndDelete(id);
    if (!deletedReview) {
      return res.status(404).json({ message: "Review not found" });
    }
    res.status(200).json({ message: "Review deleted successfully" });
  } catch (err) {
    res.status(500).send(err.message);
  }
};
