const mongoose  = require('mongoose')
const teamSchema = new mongoose.Schema({
    id : Number,
    username: String,
    password: String,
    member: [Number],
})

module.exports = mongoose.model("team",teamSchema)