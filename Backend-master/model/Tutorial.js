const mongoose = require('mongoose');
const tutorialSchema  =new mongoose.Schema({
    thumbnail: String,
    link: String,
});

module.exports =  mongoose.model("tutorial",tutorialSchema);