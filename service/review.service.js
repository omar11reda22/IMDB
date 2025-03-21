const ReviewRepository = require("../repositories/review.repository");

const ReviewService = {
  async createReview(reviewData) {
    if (!reviewData.userId || !reviewData.movieId || !reviewData.content) {
      throw new Error("Missing required fields: userId, movieId, or content");
    }
    return await ReviewRepository.createReview(reviewData);
  },

  async getReviewsByMovie(movieId) {
    if (!movieId) throw new Error("Movie ID is required");
    return await ReviewRepository.getReviewsByMovie(movieId);
  },

  async getReviewsByUser(userId) {
    if (!userId) throw new Error("User ID is required");
    return await ReviewRepository.getReviewsByUser(userId);
  },

  async getReviewById(reviewId) {
    if (!reviewId) throw new Error("Review ID is required");
    const review = await ReviewRepository.getReviewById(reviewId);
    if (!review) throw new Error("Review not found");
    return review;
  },

  async updateReview(reviewId, updateData) {
    if (!reviewId || !updateData)
      throw new Error("Review ID and update data are required");
    const updatedReview = await ReviewRepository.updateReview(
      reviewId,
      updateData
    );
    if (!updatedReview) throw new Error("Failed to update review");
    return updatedReview;
  },

  async deleteReview(reviewId) {
    if (!reviewId) throw new Error("Review ID is required");
    const deletedReview = await ReviewRepository.deleteReview(reviewId);
    if (!deletedReview) throw new Error("Failed to delete review");
    return deletedReview;
  },
};

module.exports = ReviewService;
