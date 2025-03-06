const ImageKit = require("imagekit");
const movierepo = require("../repos/movie.repo");

// Configure ImageKit
const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_ENDPOINT_URL,
});

// Function to upload movie poster
async function uploadPoster(file) {
  if (!file) {
    throw new Error("Poster image is required");
  }

  const uploadedImage = await imagekit.upload({
    file: file.buffer,
    fileName: `poster_${Date.now()}.jpg`,
    folder: "/movies",
  });

  return uploadedImage.url;
}

const addNewMovie = async (movieData, file) => {
  const posterUrl = await uploadPoster(file);
  movieData.poster = posterUrl;

  const movie = await movierepo.addnewmovie(movieData);
  return movie;
};

module.exports =  addNewMovie; 

