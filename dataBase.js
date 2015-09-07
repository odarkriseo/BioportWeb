
console.log("Visit me @ localhost:1337");

// express.js
var express = require('express');
var app = express();


app.use(function(req, res, next) {  
<<<<<<< HEAD
  res.header("Access-Control-Allow-Origin", req.headers.origin);
=======
  res.header('Access-Control-Allow-Origin', req.headers.origin);
 console.log(req.headers.origin);
>>>>>>> adf25ef269863578defca78febb5917d32cae0a3
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header(
    'Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With, X-Api-Key'
  );
  res.header('Access-Control-Allow-Credentials', 'true');
  if ('OPTIONS' === req.method) {
    res.sendStatus(200);
  }
  else {
    next();
  }
});

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/bioportDB');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
   
    console.log('Connection ok');


/*///////////////////////////////////////////////////USERS////////////////////////////////////////////////////////////*/
	var usersSchema = new mongoose.Schema({
	    lastName: String,
	    firstName: String,
	    mail: String,
	    addresses: [{
	    	street:String,
	        city: String, 
	        country:String,
	        cp :Number
	                }],  
	    company:String,
	    birthdate:Date,
	    currency: String,
	    password:String,
	    cart:Array,
	    accountType:String,  
	    registrationDate:Date,
	    subscriptionDate:Date,
	    suppressionDate:Date
	});


	var users = mongoose.model('users', usersSchema);

	// recupere un compte avec grace aux id en param de l'url
	app.get('/login/m=:mail&p=:mdp', function (req, res)
	{		//console.log("req.params.mail : '"+req.params.mail+"'");
		
		//res.send('Liste des bières');

		users.findOne({$and:[{mail:req.params.mail},{password:req.params.mdp}]},{mail:1,password:1},function (err, b) {
		if (err) return console.error("ERREUR : app.get('/users'..) -> "+err);
		//console.log(b);
		res.send(b);
		});

	});

/*///////////////////////////////////////////////////COLLECTION///////////////////////////////////////*/

var collectionsSchema = new mongoose.Schema({
	    lastName: String,
	    firstName: String,
	    mail: String,
	    addresses: [{
	    	street:String,
	        city: String, 
	        country:String,
	        cp :Number
	                }],  
	    company:String,
	    birthdate:Date,
	    currency: String,
	    password:String,
	    cart:Array,
	    accountType:String,  
	    registrationDate:Date,
	    subscriptionDate:Date,
	    suppressionDate:Date
	});

var collections = mongoose.model('collections', collectionsSchema);

	app.get('/collection/limit=:limit', function (req, res)
	{		//console.log(req);
		
		var q = user.find().limit(10);
		q.execFind(function (err, b) {
			res.send(b);
		});

		

	});







});

	



	app.listen(1337);
	// console.log ('1337 is the magic port')


