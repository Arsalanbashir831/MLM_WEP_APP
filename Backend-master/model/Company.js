const mongoose = require('mongoose');
const Team = require('./Team');
const Product = require('./Product');
const Tutorial = require('./Tutorial');


const companySchema = new mongoose.Schema({
    companyName: String,
    password: String,
    products: [String],
    tutorial: [String],
    team : [String],
    username:String
});

module.exports = mongoose.model("company", companySchema);
