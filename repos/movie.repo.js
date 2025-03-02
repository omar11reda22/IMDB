const movie = require("../models/users.model");

const movierepo = {
addnewmovie:async (moviedata)=>{
    try {
        return await movie.create(moviedata);
    } catch (error) {
        throw error;
    }

}


};
module.exports = movierepo; 