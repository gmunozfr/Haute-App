'use strict'; //this is going to force it into a strict mode

require('dotenv').config() //is going to load a dotenv file
const express = require('express')
const app = express()//calling the function required from express
const port = process.env.PORT || 3001//defining the port that is going to be used
const bodyParser = require ('body-parser')// is going to be used by the express server to parse the incoming body of the request
const mongoose = require('mongoose')//being able to handle the relationship between the models and mongodb server


const routes = require('./routes')
const cors =  require('./cors')//it handles the security for cross site scripting

mongoose.Promise = global.Promise //this is the global namespace
mongoose.connect('mongodb://localhost/timepieces' , { useNewUrlParser: true})//to avoid warnings I am going to use the "useNewUrlParser"
mongoose.set('useFindAndModify', false)//to get rid of the warning while compiling

app.use(bodyParser.urlencoded({ extended : true}))
app.use(bodyParser.json())//here Json is going to be used

//cors(app) here the app will be called
//routes(app) passing the app to the routes

app.listen(port)
console.log('The fabulous Timepieces app is running on port ${port}')//checking if there is a connection to the server


