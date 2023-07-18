const mongoose  = require('mongoose')
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    team: Number,
    rank : String,
    personal_cc: {
        type: Number,
        default: 0
    },
    pc_cc : {
        type: Number,
        default: 0
    },
    non_material_cc : {
        type: Number,
        default: 0
    },

})

module.exports = mongoose.model("user",userSchema)