
const mongoose  = require('mongoose')
const userSchema = require('./User')

const teamSchema = new mongoose.Schema({
    id : Number,
    username: String,
    password: String,
    member: [String],
    company: String
})

module.exports = mongoose.model("team",teamSchema)
