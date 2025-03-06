const director = require("../models/director.model");

const directorrepo = {
addnewdirector:async (directordata)=>{
    try {
        return await director.create(directordata);
    } catch (error) {
        throw error;
    }
 }, 
 getalldirectors:async ()=>{
    try {
        return await director.find({});
    } catch (error) {
        throw error;
    }
 }

}



module.exports = directorrepo;