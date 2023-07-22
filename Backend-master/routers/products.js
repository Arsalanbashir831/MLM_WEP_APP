const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Company = require('../model/Company');
const product = require('../model/Product');
const user = require('../model/User')
const team = require('../model/Team');
// Create a product for a company
const cc_value = 20;
const percentage = {
  "PC" : 5,
  "Supervisor" : 30,
  "AM" : 38,
  "Manager" : 45

}

const ranks = {
  2 : "PC",
  25 : "Supervisor",
  75 : "AM",
  120 : "Manager"
}


router.post('/addProduct', async (req, res) => {
  try {
    const { prodName, cc, p_img, category, CompName, user_id } = req.body;
    const newProduct = new product({
      prodName: prodName,
      cc : cc,
      p_img : p_img,
      category : category
    });
    newProduct.save()
    addProduct(CompName, newProduct)
    res.json(newProduct)
  } catch (error) {
    res.status(500).json({ error: error });
     
  }
});

router.post("/getProducts", async(req,res)=>{
  const {id} = req.body
  // console.log(id)
  data = await Company.findOne({ _id: id}).exec()
  console.log(data)
  if (data){

    return res.status(200).json(data.products)
    
  }
  return res.status(500);
})

// Read all products for a company
router.get('/companies/:companyId/products', async (req, res) => {
  try {
    const { companyId } = req.params;
    const company = await Company.findById(companyId);

    if (!company) {
      return res.status(404).json({ error: 'Company not found' });
    }
    const products = company.products;
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Update a product for a company
router.put('/companies/:companyId/products/:productId', async (req, res) => {
  try {
    const { companyId, productId } = req.params;
    const company = await Company.findById(companyId);

    if (!company) {
      return res.status(404).json({ error: 'Company not found' });
    }
    const { prodName, cc, p_img, category } = req.body;
    const updatedProduct = {
      prodName,
      cc,
      p_img,
      category
    };
    const productIndex = company.products.findIndex(product => product._id.toString() === productId);
    if (productIndex === -1) {
      return res.status(404).json({ error: 'Product not found' });
    }
    company.products[productIndex] = updatedProduct;
    const savedCompany = await company.save();
    res.json(savedCompany);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Delete a product for a company
router.delete('/companies/:companyId/products/:productId', async (req, res) => {
  try {
    const { companyId, productId } = req.params;
    const company = await Company.findById(companyId);
    if (!company) {
      return res.status(404).json({ error: 'Company not found' });
    }
    const productIndex = company.products.findIndex(product => product._id.toString() === productId);
    if (productIndex === -1) {
      return res.status(404).json({ error: 'Product not found' });
    }
    company.products.splice(productIndex, 1);
    const savedCompany = await company.save();

    res.json(savedCompany);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

router.post('/buy', async(req,res)=>{
  const {user_id, product_id} = req.body;
  const prod_obj = await product.findOne({_id : product_id})
  const user_obj = await user.findOne({_id : user_id});
  const cc = prod_obj.cc;
  user_obj.personal_cc += cc;
  let price = cc * cc_value;
  if (user_obj.personal_cc >= 1){
    if (user_obj.pc_cc + user_obj.personal_cc + user_obj.non_material_cc > 4){
      if (user_obj.rank in percentage){
        price = price * (percentage[user_obj.rank]/100);
      }
    }
  }
  
  const team_id = user_obj.team
  const team_obj = await team.findOne({id : team_id});

  const total_cc  = user_obj.personal_cc + user_obj.non_material_cc + user_obj.pc_cc 
  if (total_cc >= 120){
    user_obj.rank = 'Manager'
  }
  else if (total_cc >= 75){
    user_obj.rank = 'AM';
  }
  else if (total_cc >= 25){
    user_obj.rank = 'Supervisor'
  }
  else if (total_cc >= 5){
    user_obj.rank = 'PC';
  }

  const newUser = user(user_obj)
  newUser.save()
  res.status(200).json({"user_cc" : newUser})

  // for (let index = 0; index < team_obj.member.length; index++) {
  //   const element = team_obj.member[index];
  //   const member = user.findOne({_id : element})

  // }
  
  
})
const addProduct = async(companyName, product)=>{
  const data = await Company.findOne({companyName: companyName}).exec()
  console.log(data)
  data.products.push(product)

  // await Company.deleteOne({CompName: companyName})
  const newData = new Company(data)
  newData.save()
  console.log(newData)
}


module.exports = router;
