const express = require("express");
const watchlistService = require("../services/watchlistService");

const router = express.Router();

// Get a user's watchlist
router.get("/:userId", async (req, res) => {
  try {
    const watchlist = await watchlistService.getUserWatchlist(
      req.params.userId
    );
    res.json(watchlist);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add a movie to the watchlist
router.post("/", async (req, res) => {
  try {
    const { userId, movieId } = req.body;
    const watchlist = await watchlistService.addMovieToWatchlist(
      userId,
      movieId
    );
    res.json(watchlist);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Remove a movie from the watchlist
router.delete("/", async (req, res) => {
  try {
    const { userId, movieId } = req.body;
    const watchlist = await watchlistService.removeMovieFromWatchlist(
      userId,
      movieId
    );
    res.json(watchlist);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete an entire watchlist
router.delete("/:userId", async (req, res) => {
  try {
    await watchlistService.deleteUserWatchlist(req.params.userId);
    res.json({ message: "Watchlist deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
