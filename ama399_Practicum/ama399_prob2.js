var express = require('express');
var http = require('http');
var app = express();
app.use(express.static('.'));

app.get("/part2", function(req, res){
	var message = req.query.message;
	var count = req.query.count;
	var output = " ";
	for(i=0; i<count; i++){
		output += message
	}
	res.send(output);
	console.log(output);
});

app.listen(8080,function(){
	console.log("Server Started...")
});