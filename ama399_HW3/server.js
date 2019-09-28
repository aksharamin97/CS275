//Creating an express app
var express = require("express");
var app = express();			
app.use(express.static("."));

//If factorial is selected in the dropdown menu
app.get("/fact", function(req, res){
	var n = req.query.n;		//grab input from JSON created in Ajax 

	if(isInt(n)){			
		if(n < 0){
			res.send("Input must be a positive number");
		}
		else{
			var count = 1;
			for(i=1; i<=n; i++){	//formulate factorial algorithm
			count *= i;
			}
			res.send("The factorial for " + n + " is " + count);	//Output answer to client
		}
	}
	else{
		res.send("Input not an integer")
	}	
});

//If summation is selected in the dropdown menu
app.get("/sum", function(req, res){
	var n = req.query.n;			//grabs input from JSON created in Ajax

	if(isInt(n)){
		if(n < 0){
			res.send("Input must be a positive number");
		}
		else{
			var count = 0;
			for(i=0; i<=n; i++){		//formulate summation algorithm
			count += i;
			}
			res.send("The summation for " + n + " is " + count);		//Output answer to client
		}
	}
	else{
		res.send("Input not an integer")
	}	
});

app.get("*", function(req, res){
	res.redirect("./ama399_HW3.html");		//redirect all ppages to the main page
});

app.listen(8080, function(){
	console.log("Server Started...")		//server listens to port 8080
});

//outputs a boolean based on value
function isInt(value) {
  return !isNaN(value) && parseInt(Number(value)) == value && !isNaN(parseInt(value, 10));
}
