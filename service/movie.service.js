const movierepo = require("../repos/movie.repo");
const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_ENDPOINT_URL,
});

module.exports.addnewmovie = async (req, res) => {
  try {
    const moviedata = req.body;
    const movie = await movierepo.addnewmovie(moviedata);
    res.status(200).json({ message: "Movie Added Successfully", data: movie });
  } catch (error) {
    res.status(500).json({ message: "Error Adding Movie", error: error });
  }
};



