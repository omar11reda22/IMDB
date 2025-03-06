const movieService = require("../service/movie.service");
const multer = require("multer");
const express = require("express"); 
const router = express.Router();


// Configure Multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage }).single("poster");

// API to add a new movie
 const addNewMovie = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ message: "File Upload Error", error: err });
    }

    try {
      const movie = await movieService.addNewMovie(req.body, req.file);
      res
        .status(200)
        .json({ message: "Movie Added Successfully", data: movie });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error Adding Movie", error: error.message });
    }
  });
};




router.post("/addmovie", addNewMovie); 