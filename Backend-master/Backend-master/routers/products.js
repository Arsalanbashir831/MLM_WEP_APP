const express = require('express');
const router = express.Router();
const Company = require('../model/Company');
const product = require('../model/Product')
// Create a product for a company
router.post('/addProduct', async (req, res) => {
  try {
    const { prodName, cc, p_img, category, CompName } = req.body;
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

const addProduct = async(companyName, product)=>{
  const data = await Company.findOne({CompName: companyName}).exec()
  console.log(data)
  data.products.push(product)

  // await Company.deleteOne({CompName: companyName})
  const newData = new Company(data)
  newData.save()
  console.log(newData)
}


module.exports = router;
