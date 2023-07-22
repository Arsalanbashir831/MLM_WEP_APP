const mongoose = require('mongoose');
const Team = require('./Team');
const Product = require('./Product');
const Tutorial = require('./Tutorial');


const companySchema = new mongoose.Schema({
    companyName: String,
    password: String,
    products: [Product.schema],
    tutorial: [Tutorial.schema],
    team : [Team.schema],
    username:String
});

module.exports = mongoose.model("company", companySchema);
