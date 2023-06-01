const express = require("express")
const mongoose = require("mongoose")
const router = express.Router()

const teamRouter= require('../model/Team')
const companyRouter= require('../model/Company')
router.post('/teamAuth',async(req,res)=>{
    const {username, password} = req.body;
    const result = await teamRouter.find({username: username, password: password})
    if (result != null || result != {}){
        return res.status(200).json({url : "/team/"+ username})
    }
})

// router.post('/companyAuth',async(req,res)=>{
//     const {CompName} = req.body;
//     const result = await companyRouter.find({CompName: CompName})
//     if (result != null || result != {}){
//         return res.status(200).json({url : "/company/"+ username})
//     }
// })

module.exports = router