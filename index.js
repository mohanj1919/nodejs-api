
//dependencies
var express = require("express");
var bodyParser = require("body-parser");

var app = express();

//configure middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// configure our connection to MongoDB
var mongoose = require('mongoose');

// establish our MongoDB connection for the models
mongoose.connect('mongodb://mongo:27017');
	// .then(()=> console.log('mongo db connection succesful'))
	// .catch((err) => console.error(err));

//routes
var bookRoutes = require('./app/controllers/bookStore');
app.get('/', function(req, res){
	res.json({message: "API is working!"});
})
app.use('/books', bookRoutes);

//configure port
var port = process.env.port || 8080;

//start server
app.listen(port);

console.log("server is listening on port: ", port);
