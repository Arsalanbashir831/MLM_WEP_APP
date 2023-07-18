const mongoose = require("mongoose");
const dotenv = require('dotenv').config();
const dbConn = async () =>{
    try{
        await mongoose.connect(process.env.DATABASE_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        mongoose.set('debug',true)
    } catch(err){
        console.error(err);
    }

}

module.exports = dbConn