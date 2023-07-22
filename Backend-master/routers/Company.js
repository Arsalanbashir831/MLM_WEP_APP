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
      console.log(companies);
      res.status(200).json(companies);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching companies' });
    }
  });
  
  router.get('/:companyId', async (req, res) => {
    const companyId = req.params.companyId;
    
    try {
      const company = await companyModel.findById(companyId);
      
      if (!company) {
        return res.status(404).json({ error: 'Company not found' });
      }
      
      res.status(200).json(company);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching the company' });
    }
  });
  



module.exports = router
