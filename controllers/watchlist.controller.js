const watchlistService = require("../services/watchlistService");

class WatchlistController {
  async getWatchlist(req, res) {
    try {
      const watchlist = await watchlistService.getUserWatchlist(
        req.params.userId
      );
      res.json(watchlist);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async addMovie(req, res) {
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
  }

  async removeMovie(req, res) {
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
  }

  async deleteWatchlist(req, res) {
    try {
      const { userId } = req.params;
      await watchlistService.deleteUserWatchlist(userId);
      res.json({ message: "Watchlist deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new WatchlistController();
