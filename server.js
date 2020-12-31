const express = require('express')
const dotenv =require('dotenv')
const morgan =require('morgan')
const bodyparser = require('body-parser')
const app = express()
const PORT = process.env.PORT||8080
dotenv.config({path:'config.env'})

app.use(morgan('tiny'))

app.get('/',(req,res)=>{
    res.send('crud application')
})

app.listen(PORT,()=>{console.log("server is running")})

