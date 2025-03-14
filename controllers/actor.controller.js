const { getallactors } = require("../repos/actor.repo");
const actorService = require("../service/actor.service");
const ActorService = require("../service/actor.service");
const express = require("express");
const router = express.Router();


createactor = async (req , res) => {
 try {
   const newActor = await actorService.createactor(req.body);
   res.status(201).json(newActor);
 } catch (error) {
   res.status(500).json({ error: error.message });
 }
}

getallactors = async (req, res) => {
    try {
      const actors = await actorService.getAllactors();
      res.json(actors);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  
}


// add routes 

router.post("/", createactor);
router.get("/getdirectors", getallactors);    

module.exports = router;
