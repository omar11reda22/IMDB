const Review = require("../models/review.model");

const ReviewRepository = {
  async createReview(reviewData) {
    return await Review.create(reviewData);
  },

  async getReviewsByMovie(movieId) {
    return await Review.find({ movieId }).populate("userId", "username");
  },

  async getReviewsByUser(userId) {
    return await Review.find({ userId }).populate("movieId", "title");
  },

  async getReviewById(reviewId) {
    return await Review.findById(reviewId).populate("movieId userId");
  },

  async updateReview(reviewId, updateData) {
    return await Review.findByIdAndUpdate(reviewId, updateData, { new: true });
  },

  async deleteReview(reviewId) {
    return await Review.findByIdAndDelete(reviewId);
  },
};

module.exports = ReviewRepository;
