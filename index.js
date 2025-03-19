//1 require express
const express = require('express')
 //2 instance d'express : 
 const app = express();

 //3 require dotenv : 
 
 require("dotenv").config()
// 6 
const connectDB = require('./config/connectDB')
connectDB()


 //4 
 PORT = process.env.PORT;

 //5 server 
 app.listen(PORT,(err)=>{
    err? console.log(err):console.log(`The server is on : http://localhost:${PORT}`)
 })