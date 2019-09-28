//Using express to simplify handling of different client reqs
var express = require('express');
var app = express();
//Use body parser for easier handling of post reqs
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
//refer to local dir, change if moving this script to another dir
app.use(express.static('.'));

var dir = "/Users/aksharamin/Desktop/CS275/DragonReach/"		//absolute dir

//Create an instance of a mysql connection
/*var mysql = require('/mysql');
var con = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'password',
	database: 'test'
});
con.connect(function(err){
	if(err){
		console.log('Error connecting to database');
		console.log(err);
	}
	else{
		console.log('Successfully connected to database');
	}
});
*/

app.get('/logout', function (req,res){
	res.sendFile(dir + 'login.html');
});

app.get('/login', function (req,res){
	res.sendFile(dir + 'dashboard.html');
});

app.get('/create', function (req,res){
	res.sendFile(dir + 'create-account.html');
});

app.get('/dashboard', function (req,res){
	res.sendFile(dir + 'dashboard.html');
});

app.get('/post', function (req,res){
	res.sendFile(dir + 'post.html');
});

app.get('/search', function (req,res){
	res.sendFile(dir + 'search-form.html');
});

app.get('/results', function (req,res){
	res.sendFile(dir + 'results.html');
});

app.get('/confirm', function (req,res){
	res.sendFile(dir + 'confirm.html');
});

app.get('*',function (req, res) {
	res.sendFile(dir + 'login.html');
});

//Have the server listen to port 8080
app.listen(8080,function(){
	console.log('Server Running');
});