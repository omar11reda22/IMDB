const express = require("express");
const ReviewService = require("../services/review.service");

const ReviewController = {
  async createReview(req, res) {
    try {
      const review = await ReviewService.createReview(req.body);
      res.status(201).json(review);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async getReviewsByMovie(req, res) {
    try {
      const reviews = await ReviewService.getReviewsByMovie(req.params.movieId);
      res.status(200).json(reviews);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async getReviewsByUser(req, res) {
    try {
      const reviews = await ReviewService.getReviewsByUser(req.params.userId);
      res.status(200).json(reviews);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async getReviewById(req, res) {
    try {
      const review = await ReviewService.getReviewById(req.params.reviewId);
      res.status(200).json(review);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  },

  async updateReview(req, res) {
    try {
      const updatedReview = await ReviewService.updateReview(
        req.params.reviewId,
        req.body
      );
      res.status(200).json(updatedReview);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async deleteReview(req, res) {
    try {
      await ReviewService.deleteReview(req.params.reviewId);
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};

module.exports = ReviewController;
