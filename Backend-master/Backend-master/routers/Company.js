const express = require("express")
const mongoose = require("mongoose")
const companyModel = require('../model/Company')
const router = express.Router()

router.post('/addCompany',async(req,res)=>{
    const {companyName,password,username} = req.body.data
    console.log(req.body);
    const result = new companyModel({
        companyName,password,username
    })

    const saved = await result.save();
    console.log(saved)
    res.status(200).json(result)
})

router.get('/getAllCompany', async (req, res) => {
    try {
      const companies = await companyModel.find();
      res.status(200).json(companies);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching companies' });
    }
  });
  



module.exports = router
