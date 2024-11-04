export interface Review {
  id: number;
  reviewerId: number;    // ID of the employee giving the review
  revieweeId: number;    // ID of the employee receiving the review
  feedback: string;      // Feedback text for the review
  reviewerName?: string;  // Optional: Name of the reviewer
  revieweeName?: string;  // Optional: Name of the reviewee
}
