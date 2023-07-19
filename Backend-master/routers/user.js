const express = require("express")
const mongoose = require("mongoose")
const userSchema = require('../model/User')
const router = express.Router()
const teamModel = require('../model/Team')

function check4cc(mail) {
    const person = userSchema.findOne({email: mail})

    if (person.personal_cc >= 1){
        if (person.p_cc + person.personal_cc + person.non_material_cc  >  4){
            return true;
        }
    }

    return false;

}
const percentage = {
    "PS" : 5,
    "Supervisor" : 30,
    "AM" : 38,
    "Manager" : 45

}

const ranks = {
    2 : "PC",
    25 : "Supervisor",
    75 : "AM",
    120 : "Manager"
}

const cc1 = 243;

// router.get("/",(req,res)=>{
//     res.sendStatus(200).send({name:"random"})
// })

router.post("/add_user",async (req,res)=>{
    console.log(req.body)
    const {name,password,email,team,rank} = req.body;
    const result = new userSchema({
        name: name,
        email : email,
        password : password,
        team: team,
        rank : rank,

        personal_cc : 0,
        pc_cc : 0,
        non_material_cc: 0

    })

    const prev_team = await teamModel.findOne({id : team}).exec()
    
    prev_team.member.push(team)
    console.log(prev_team.member)

    prev_team.save()
    const saved = await result.save();
    console.log(result)
    res.status(200).json(result)

    
})

router.post("/buy", async(req,res)=>{
    const {email, cc} = req.body;
    const buyer =  await userSchema.findOne(email);
    const newCC = buyer.personal_cc  + cc;
    const newRank = ranks[newCC];
    const updated = await userSchema.findOneAndUpdate(email, {personal_cc : newCC, rank : newRank});
    res.status(200).json(updated);
})


module.exports = router;