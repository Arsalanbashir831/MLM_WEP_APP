const express = require("express")
const mongoose = require("mongoose")
const router = express.Router()

router.post('/teamAuth',async(req,res)=>{
    console.log(req.body)
    res.status(200)
})

router.post('/companyAuth',async(req,res)=>{
    res.send('company authentication route');
})

module.exports = router