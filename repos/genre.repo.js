const genre = require("../models/genre.model");

const genrerepo = {
addnewgenre:async (genredata)=>{
    try {
        return await genre.create(genredata);
    } catch (error) {
        throw error;
    }
 }, 
 getallgenres:async ()=>{
    try {
        return await genre.find({});
    } catch (error) {
        throw error;
    }
 }

}



module.exports = directorrepo;