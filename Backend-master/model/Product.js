const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    prodName: String,
    cc: Number,
    p_img: String,
    category: String,
    
});
module.exports =  mongoose.model("product",productSchema) ;