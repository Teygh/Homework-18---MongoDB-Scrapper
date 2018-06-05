// This file is used to setup
// 1. Node server 
// 2. Routes

// Requiring Express Package
var express = require("express");
// Requiring body-parser
var bodyParser = require("body-parser");
//Requiring express-handlebars [Using handlebars to render the page]
var exphbs = require("express-handlebars");
//Requiring  Mongoose
var mongoose = require("mongoose");



// Set up the port to be either the host's designated port, or 8080
var PORT = process.env.PORT || 8080;

// Initialize Express
var app = express();

//Set up an express router
var router = express.Router();

//Requiring the routes file 
require("./config/routes")(router);

// The db variables will equal the deployed database URI or it will be accessing the mongo Database: newsHeadlines on local Machine
var db = process.env.MONGODB_URI || "mongodb://localhost/newsHeadlines";

// Connect Mongoose to Databse
mongoose.connect(db, function(err) {
    //log any errors connecting with mongoose
    if (err) {
        console.log(err);
    }else{
        //log You have successfully connected to database
        console.log("Connection ot Mongoose Successfull!!")
    }
});

// Use express.static to serve the public folder as a static directory
app.use(express.static(__dirname + "/public"));

//// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ 
    extended: false
}));
// Use express.static to serve the public folder as a static directory

//Have every request go through our router middleware
app.use(router);

// Set Handlebars.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Start the server
app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
  });