import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  reviewerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Employee",
    required: true,
  },
  revieweeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Employee",
    required: true,
  },
  feedback: { type: String, required: true },
});

const Review = mongoose.model("Review", reviewSchema);
export default Review;
