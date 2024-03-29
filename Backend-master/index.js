const dbConn  = require('./config/dbConn');
const mongoose = require('mongoose')
const auth = require('./routers/auth')
const cors = require('cors')
dbConn();


const express = require('express')
const app = express()
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine",'ejs')


const userRouter = require('./routers/user')
app.use("/users",userRouter)

app.get("/",(req,res)=>{
    console.log("Index")
    res.render('index',{text : "Hello"})
})

const teamRouter = require('./routers/team')
app.use("/team",teamRouter)


const companyRouter = require('./routers/company')
app.use('/company',companyRouter)

app.use('/auth',auth)


const productRouter = require('./routers/products')
app.use("/product",productRouter)

const tutorialRouter = require('./routers/tutorials');
app.use("/tutorial",tutorialRouter)

mongoose.connection.once('open', ()=>{
    console.log("Connected to MongoDB");
    app.listen(3000)
})




