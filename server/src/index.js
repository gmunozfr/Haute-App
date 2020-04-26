'use strict'; //this is going to force it into a strict mode

require('dotenv').config() //is going to load a dotenv file
var express = require('express')
var app = express()//calling the function required from express
var port = process.env.PORT || 3000 //defining the port that is going to be used
var bodyParser = require ('body-parser')// is going to be used by the express server to parse the incoming body of the request
var mongoose = require('mongoose')//being able to handle the relationship between the models and mongodb server
var cors = require("cors")
var http = require("http")

var routes = require('./routes')
var cors =  require('./cors')//it handles the security for cross site scripting

mongoose.Promise = global.Promise //this is the global namespace
mongoose.connect(process.env.MONGODB_URL);//connecting to Mongodb Atlas without exposing here the user and password against any attacker 
mongoose.set('useFindAndModify', false)//to get rid of the warning while compiling
mongoose.connection.on('error', (err) => { 
    console.log('Mongodb Error: ', err); 
    process.exit();
});
mongoose.connection.on('connected', () => { 
    console.log('MongoDB is successfully connected');//establishing connection to MongoDB Atlas
});



app.use(bodyParser.urlencoded({ extended : true}))
app.use(bodyParser.json())//here Json is going to be used

cors(app)// here the app will be called. Is the cors call where we pass the app to the cors file
routes(app) //passing the app to the routes


app.listen(port, function(err){
    console.log("The Fabulous Timepieces App is Listening on Port: " + port)
});

