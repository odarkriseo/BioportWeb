
console.log("Visit me @ localhost:1337");

// express.js
var express = require('express');
var app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/bioportDB');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
   
    console.log('Connection ok');

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


	var user = mongoose.model('users', usersSchema);

	// Affiche la liste des bières
	app.get('/login/m=:mail&p=:mdp', function (req, res)
	{		console.log("req.params.mail : '"+req.params.mail+"'");
		
		//res.send('Liste des bières');

		user.findOne({$and:[{mail:req.params.mail},{password:req.params.mdp}]},{mail:1,password:1},function (err, b) {
		if (err) return console.error("ERREUR : app.get('/users'..) -> "+err);
		console.log(b);
		res.send(b);
		});

	});

	app.get('/getIdUsers/i=:id', function (req, res)
	{		//console.log(req);
		var idd;
		user.findOne({$and:[{mail:"bioport@bioport.com"},{password:"bioport"}]},{mail:1,password:1},function (err, b) {
		if (err) return console.error("ERREUR : app.get('/users'..) -> "+err);
			console.log(b._id);
			var idd = b._id; // me retourne un id valable que j'insère ensuite dans la requète par id
			user.findOne({_id:idd},function (err, c) {
			if (err) return console.error("ERREUR : app.get('/users'..) -> "+err);
			console.log(c);// qui me retourne un null :/
			res.send(c);
		});
		});

		

	});


	// Affiche une bière
	app.get('/beers/:aBeer', function (req, res)
	{
		console.log('Test' + req.params.aBeer);
		beer.findOne({ id: req.params.aBeer }, function (err, b) {
		if (err){
			console.log(err);
			return console.error("ERREUR : app.get('/beers/:aBeer'..) -> "+err);
		} 
		console.log("recu : '"+b+"'");
		res.send(b);
		});

	});





});

	

/*var BeersList = mgdb.model('Beers', yourSchema);


	app.get('/beers', function (req, res)
	{
		res.send('Liste des bières');
	});

	app.get('/beers/:aBeer', function (req, res)
	{
		res.send('Bière : ' + req.params.aBeer);
	});*/



	app.listen(1337);
	// console.log ('1337 is the magic port')


