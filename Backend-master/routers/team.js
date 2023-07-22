const express = require("express")
const mongoose = require("mongoose")
const teamModel = require('../model/Team')
const teamSchema = teamModel.schema
const  companyModel = require('../model/Company')
const router = express.Router()
let id = 1
let conn = mongoose.connection;
router.post("/newTeam", async (req, res) => {
    const { username, password, company_id } = req.body.data
    console.log(req.body)
    id = id + 1;
    // Find the last added record
    const lastAddedTeam = await teamModel.findOne().sort({ _id: -1 });
    if (lastAddedTeam == null || lastAddedTeam == {}) {
        id = 0
    }
    else {
        id = lastAddedTeam.id + 1;
    }
    
    const comp = await companyModel.findOne({_id : company_id});
    
    
    const newTeam = new teamModel({
        id : id,
        username: username,
        password : password,
        company: company_id
    })

    comp.team.push(newTeam);
    comp.save();
    console.log(typeof newTeam.company);
    newTeam.save()


    res.status(200).json({username :newTeam._id});
    // res.status(200).json(result);
})

module.exports = router;