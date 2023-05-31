const mongoose = require('mongoose');
const Team = require('./Team');
const Product = require('./Product');
const Tutorial = require('./Tutorial');


const companySchema = new mongoose.Schema({
    CompName: String,
    products: [Product],
    tutorial: [Tutorial],
    team : [Team]
});

module.exports = mongoose.model("company", companySchema);
