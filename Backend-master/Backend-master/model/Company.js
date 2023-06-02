const mongoose = require('mongoose');
const Team = require('./Team');
const Product = require('./Product');
const Tutorial = require('./Tutorial');


const companySchema = new mongoose.Schema({
    CompName: String,
    CompPass: String,
    products: [Product.schema],
    tutorial: [Tutorial],
    team : [Number]
});

module.exports = mongoose.model("company", companySchema);
