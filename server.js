const express = require('express')
const dotenv =require('dotenv')
const morgan =require('morgan');
require('./utils/db.config')
const bodyparser = require('body-parser')
const app = express()
const PORT = process.env.PORT||8080
dotenv.config({path:'config.env'})
app.set('view engine', 'ejs');  


app.use(morgan('tiny'))

app.get('/',(req,res)=>{
    return  res.render('index')
})

app.listen(PORT,()=>{console.log("server is running")})

module.exports=app