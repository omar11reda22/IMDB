const express = require("express");
const ReviewService = require("../services/review.service");

const router = express.Router();

// Create a new review
router.post("/", async (req, res) => {
  try {
    const review = await ReviewService.createReview(req.body);
    res.status(201).json(review);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all reviews for a specific movie
router.get("/movie/:movieId", async (req, res) => {
  try {
    const reviews = await ReviewService.getReviewsByMovie(req.params.movieId);
    res.status(200).json(reviews);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all reviews by a specific user
router.get("/user/:userId", async (req, res) => {
  try {
    const reviews = await ReviewService.getReviewsByUser(req.params.userId);
    res.status(200).json(reviews);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get a single review by ID
router.get("/:reviewId", async (req, res) => {
  try {
    const review = await ReviewService.getReviewById(req.params.reviewId);
    res.status(200).json(review);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

// Update a review
router.put("/:reviewId", async (req, res) => {
  try {
    const updatedReview = await ReviewService.updateReview(
      req.params.reviewId,
      req.body
    );
    res.status(200).json(updatedReview);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a review
router.delete("/:reviewId", async (req, res) => {
  try {
    await ReviewService.deleteReview(req.params.reviewId);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
