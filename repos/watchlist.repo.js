const Watchlist = require("../models/Watchlist");

class WatchlistRepository {
  // Get watchlist by user ID
  async getByUserId(userId) {
    return await Watchlist.findOne({ userId }).populate("movies");
  }

  // Add movie to watchlist
  async addMovie(userId, movieId) {
    let watchlist = await Watchlist.findOne({ userId });
    if (!watchlist) {
      watchlist = new Watchlist({ userId, movies: [movieId] });
    } else {
      if (!watchlist.movies.includes(movieId)) {
        watchlist.movies.push(movieId);
      }
    }
    return await watchlist.save();
  }

  // Remove movie from watchlist
  async removeMovie(userId, movieId) {
    return await Watchlist.findOneAndUpdate(
      { userId },
      { $pull: { movies: movieId } },
      { new: true }
    );
  }

  // Delete watchlist by user ID
  async deleteWatchlist(userId) {
    return await Watchlist.findOneAndDelete({ userId });
  }
}

module.exports = new WatchlistRepository();
