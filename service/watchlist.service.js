const watchlistRepo = require("../repositories/watchlistRepository");

class WatchlistService {
  async getUserWatchlist(userId) {
    return await watchlistRepo.getByUserId(userId);
  }

  async addMovieToWatchlist(userId, movieId) {
    return await watchlistRepo.addMovie(userId, movieId);
  }

  async removeMovieFromWatchlist(userId, movieId) {
    return await watchlistRepo.removeMovie(userId, movieId);
  }

  async deleteUserWatchlist(userId) {
    return await watchlistRepo.deleteWatchlist(userId);
  }
}

module.exports = new WatchlistService();
