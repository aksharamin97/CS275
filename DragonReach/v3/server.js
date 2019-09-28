//Using express to simplify handling of different client reqs
var express = require('express');
var app = express();
//Use body parser for easier handling of post reqs
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
//refer to local dir, change if moving this script to another dir
app.use(express.static('.'));

var dir = "/Users/aksharamin/Desktop/CS275/DragonReach/v3/"		//absolute dir

//Create an instance of a mysql connection
var mysql = require('mysql');
var con = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'password',
	database: 'dragonreach'
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

app.post('/create', function (req,res){
	var uname = req.body.uname;
	var pass = req.body.pass;
	con.query("INSERT INTO User(username, password) VALUES('"+uname+"', '"+pass+"');",
		function(err,result) {
		if(err){
			res.send('Error querying MySQL Database');
		}

		});
});

app.get('/login', function (req,res){
	var uname = req.query.uname;
	var pass = req.query.pass;
	con.query("SELECT * FROM User WHERE username='"+uname+"' AND password='"+pass+"';", 
		function(err,rows,fields){
		if (rows.length > 0){
			res.send('0');
		}
		
	});
});

app.get('/results', function (req,res){
	var name = req.query.name;
	var time = req.query.time;
	var tags = req.query.tags;
	var cost = req.query.cost;
	console.log(name);
	con.query('SELECT * FROM Event WHERE name LIKE "%'+name+'%";', function(err,rows,fields){
		if(err){
			res.send('Error querying MySQL Database');
		}
		else{
			var count = 1;
			for (var i=0; i<rows.length; i++){
				html_str = '<div class="event"> <div class="details"> <h3 class="title">'+rows[i].name+'</h3> <div class="location">'+rows[i].location+'</div> <p class="time">'+rows[i].starttime + '-' + rows[i].stoptime+'</p> <p class="price">'+rows[i].price+'</p> </div> <h1>'+ count +'</h1>'
				count += 1;
			}
			res.send(html_str)
		}
	});
	//output formatted html results to div
});

app.post('/post', function (req,res){
	var name = req.body.name;
	var description = req.body.description;
	var location = req.body.location;
	var starttime = req.body.starttime;
	var endtime = req.body.endtime;
	var cost = req.body.cost;
	con.query("INSERT INTO Event(name, location, starttime, stoptime, description, price) VALUES('" + name + "', '"+ location+"', '"+starttime+"', '"+endtime+"', '"+description+"', '"+cost+"');",
		function(err,result) {
		if(err){
			res.send('Error querying MySQL Database');
		}

		});
});

app.get('/events', function (req,res){
	con.query('SELECT Event.name, Event.description, Event.starttime, Event.stoptime, Event.location, Event.price FROM Event;', function(err,rows,fields){
		if(err){
			res.send('Error querying MySQL Database');
		}
		else{
			html_str = '<h2>Events For <span>You</span></h2>'
			for (var i=0; i<rows.length; i++){

				html_str += '<div class="event"> <div class="details"> <h3 class="title">' + rows[i].name + '</h3> <p class="description">' + rows[i].description + '</p><p class="location">' + rows[i].location + '</p> <p class="time">' + rows[i].starttime + " - " + rows[i].stoptime + '</p> <p class="cost">' + rows[i].price + '</p> </div> <button>View</button></div>'
			}
			res.send(html_str)
		}
	});
	
});

app.get('/confirm', function (req,res){
	res.send('events here');
	//query database and output formatted html to div
});

app.get('*',function (req, res) {
	res.sendFile(dir + 'login.html');
});

//Have the server listen to port 8080
app.listen(8080,function(){
	console.log('Server Running');
});