const directorService = require("../service/director.service");
const express = require("express");
const router = express.Router();


createdirector = async (req , res) => {
 try {
   const newActor = await directorService.createdirector(req.body);
   res.status(201).json(newActor);
 } catch (error) {
   res.status(500).json({ error: error.message });
 }
}

getalldirectors = async (req, res) => {
    try {
      const actors = await directorService.getAlldirectors();
      res.json(actors);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  
}


// add routes 

router.post("/", createdirector);
router.get("/getdirectors", getalldirectors);    

module.exports = router;
