
//dependencies
var express = require("express");
var router = express.Router();

var books = require('../models/book');

var getBooks = function(req, res){
	books.find(function (err, books) {
    if (err) return next(err);
    res.json(books);
  });
};

var testGet = function(req, res){
	res.json({ message: "bookstore API working!"});
};


//routes
router.get('/', testGet);
router.get('/get-books', getBooks);

module.exports = router;
