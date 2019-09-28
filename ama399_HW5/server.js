//Include express and POST body parser
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static("."));

//Include mysql module and credentials for connection to database
var mysql = require("mysql");
var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "password",
	database: "cs275"
 });
con.connect(function(err) {
	if (err) {
		console.log("Error connecting to Database");
	}
	else {
		console.log("Database successfully connected");
	}
});

//Output page that has table options
app.get('/tablesPage', function (req,res){
	var html_str = "<h2>Display a Table</h2><br><br><select id='option'><option value=''>--Select a Table--</option><option value='student'>Students</option><option value='course'>Courses</option><option value='grades'>Grades</option></select><button onclick='getTable()'>Get Table</button><br><div><table id='output' border='2' width='100%'></table></div><br>";
	res.send(html_str);
});

//Output requested table from MySQL database
app.get('/getTable', function (req,res){
	var name = req.query.opt;

	con.query("SELECT * FROM " + name + ";",
		function(err,rows,fields) {
	if (err)
		res.send('Error querying MySQL Database');
	else
		if (name == 'student'){
			var html_tab = "<tr><th>Student ID</th><th>First Name</th><th>Last Name</th><th>Date of Birth</th><th>Major</th></tr>";
			for (var i=0; i<rows.length; i++){
				html_tab += "<tr><td>"+rows[i].studentid+"</td><td>"+rows[i].fname+"</td><td>"+rows[i].lname+"</td><td>"+rows[i].birth+"</td><td>"+rows[i].major+"</td></tr>";
			}
			res.send(html_tab);
		}
		else if (name == 'course'){
			var html_tab = "<tr><th>Course ID</th><th>Course Description</th></tr>";
			for (var i=0; i<rows.length; i++){
				html_tab += "<tr><td>"+rows[i].courseid+"</td><td>"+rows[i].description+"</td></tr>";
			}
			res.send(html_tab);
		}
		else if (name == 'grades'){
			var html_tab = "<tr><th>ID</th><th>Course ID</th><th>Student ID</th><th>Term</th><th>Grade</th></tr>";
			for (var i=0; i<rows.length; i++){
				html_tab += "<tr><td>"+rows[i].id+"</td><td>"+rows[i].courseid+"</td><td>"+rows[i].studentid+"</td><td>"+rows[i].term+"</td><td>"+rows[i].grade+"</td></tr>";
			}
			res.send(html_tab);
		}
	});
});

//Output page that has transcript option
app.get('/transcriptPage', function (req,res){
	var html_opt;
	con.query('SELECT studentid, fname, lname FROM student ORDER BY lname;', function(err,rows,fields){
		if(err){
			res.send('Error querying MySQL Database');
		}
		else{
			html_opt = "<h2>Transcript Search</h2><br><br><select id='s_opt'><option value=''>--Select a Name--</option>"
			for (var i=0; i<rows.length; i++){
				html_opt += "<option value='"+ rows[i].studentid + "'>" + rows[i].lname + ", " + rows[i].fname + "</option>";
			}
		}
	});
	con.query('SELECT DISTINCT(term) FROM grades;', function(err,rows,fields){
		if(err){
			res.send('Error querying MySQL Database');
		}
		else{
			html_opt += "</select><select id='t_opt'><option value=''>--Select a Term--</option><option value ='all'>All</option>"
			for (var i=0; i<rows.length; i++){
				html_opt += "<option value='"+ rows[i].term + "'>" + rows[i].term + "</option>";
			}
			html_opt += "</select><br><button onclick='getTran()'>Get Transcript</button><br><div><table id='output' border='2' width='100%'></table></div><br><br>"
			res.send(html_opt);
		}
	});
	
});

//Output requested transcript tables from MySQL database
app.get('/getTranscript', function (req,res){
	var s_opt = req.query.s_opt;
	var t_opt = req.query.t_opt;
	if (t_opt == 'all'){
		var query = "SELECT student.studentid, fname, lname, term, course.courseid, description, grade FROM course, grades, student WHERE student.studentid = grades.studentid AND course.courseid = grades.courseid AND student.studentid=" + s_opt + ";"
	}
	else{
		var query = "SELECT student.studentid, fname, lname, term, course.courseid, description, grade FROM course, grades, student WHERE student.studentid = grades.studentid AND course.courseid = grades.courseid AND student.studentid=" + s_opt + " AND term=" + "'" + t_opt + "'" + ";"
	}
	con.query(query,
		function(err,rows,fields) {
	if (err){
		res.send('Error querying MySQL Database');
	}
	else{
		var html_tab = "<tr><th>Student ID</th><th>First Name</th><th>Last Name</th><th>Term/Year</th><th>Course ID</th><th>Description</th><th>Grade</th></tr>";
		for (var i=0; i<rows.length; i++){
			html_tab += "<tr><td>"+rows[i].studentid+"</td><td>"+rows[i].fname+"</td><td>"+rows[i].lname+"</td><td>"+rows[i].term+"</td><td>"+rows[i].courseid+"</td><td>"+rows[i].description+"</td><td>"+rows[i].grade+"</td></tr>";
		}
		res.send(html_tab);
	}
	});
});

//Output page that shows add student options
app.get('/studentPage', function (req,res){
	var html_str = "<h2>Add a Student</h2><br><br><input type='text' id='fname' placeholder='Enter First Name'><br><br><input type='text' id='lname' placeholder='Enter Last Name'><br><br><label for='dob'>Enter Date of Birth:</label><input type='date' id='dob'><br><br><input type='text' id='major' placeholder='Enter Major(ECE,CS,etc)'><br><br><button onclick='addStudent()'>Add Student</button><br><br><div id=output></div>";
	res.send(html_str);
});
//POST request from AJAX using the body parser to get values from html
app.post('/addStudent', function (req,res){
	var fname = req.body.fname;
	var lname = req.body.lname;
	var dob = req.body.dob;
	var major = req.body.major;
	//Check if student is already in database
	con.query("SELECT fname, lname, birth FROM student WHERE fname = '" + fname + "' AND lname = '" + lname + "' AND birth = '" + dob + "';",
		function(err, rows, result) {
		if(err){
			res.send('Error querying MySQL Database');
		}
		else if (rows.length>0){
			//Student exists in database 
			res.send('Error: Student exists in MySQL Database');
		}
		else{
			//If not in database, add student to databse
			con.query("INSERT INTO student(fname, lname, birth, major) VALUES('"+fname+"', '"+lname+"', '"+dob+"', '"+major+"');",
			function(err,result) {
			if(err){
				res.send('Error querying MySQL Database');
			}
			else{
				res.send('Added Student to MySQL Database');
			}
			});
		}
	});
});

app.get('*',function (req, res) {
	res.redirect('./index.html');
});

app.listen(8080,function(){
	console.log('Server Running');
});