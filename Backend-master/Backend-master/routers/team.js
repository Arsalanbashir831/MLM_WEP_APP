const express = require("express")
const mongoose = require("mongoose")
const teamSchema = require('../model/Team')
const router = express.Router()
let id = 1
router.post("/newTeam",async(req,res)=>{
    const {team} = req.body 
    const result = new teamSchema({
        id,team
    })
    id =  id+1;
     // Find the last added record
  const lastAddedTeam = await teamSchema.findOne().sort({ _id: -1 });
  res.status(200).json(lastAddedTeam+1);
    // res.status(200).json(result);
})

module.exports = router;