const mongoose = require('mongoose');
const Team = require('./Team');
const Product = require('./Product');
const Tutorial = require('./Tutorial');


const companySchema = new mongoose.Schema({
    CompName: String,
    password: String,
    products: [Product.schema],
    tutorial: [Tutorial],
    team : [Number],
    username:String
});

module.exports = mongoose.model("company", companySchema);
