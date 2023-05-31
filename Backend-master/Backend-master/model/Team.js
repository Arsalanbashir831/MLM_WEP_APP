const mongoose  = require('mongoose')
const teamSchema = new mongoose.Schema({
    id : Number,
    member: [Number],
})

module.exports = mongoose.model("team",teamSchema)