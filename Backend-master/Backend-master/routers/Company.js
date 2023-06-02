const express = require("express")
const mongoose = require("mongoose")
const companyModel = require('../model/Company')
const router = express.Router()

router.post('/addCompany',async(req,res)=>{
    const {CompName,password,username} = req.body
    const result = new companyModel({
        CompName,CompPass
    })

    const saved = await result.save();
    console.log(saved)
    res.status(200).json(result)
})



module.exports = router
