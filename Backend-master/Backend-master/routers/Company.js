const express = require("express")
const mongoose = require("mongoose")
const companySchema = require('../model/Company')
const router = express.Router()

router.post('/addCompany',async(req,res)=>{
    const {companyName,username,password} = req.body
    const result = new companySchema({
        companyName , username , password 
    })
    const saved = await result.save();
    console.log(result)
    res.status(200).json(result)
})

