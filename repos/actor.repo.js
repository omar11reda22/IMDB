const actor = require("../models/actor.model");

const actorrepo = {
addnewactor:async (actordata)=>{
    try {
        return await director.create(actordata);
    } catch (error) {
        throw error;
    }
 }, 
 getallactors:async ()=>{
    try {
        return await director.find({});
    } catch (error) {
        throw error;
    }
 }

}



module.exports = actorrepo; 