function compute_fib(){			//function generates the fib of the element number entered
	var u_input = document.getElementById("userInput").value;
	var user_input = parseInt(u_input);		//convert str to int
	fib_num = new Array();		//create new array to place fib sequence
	fib_num[0] = 0;				
	fib_num[1] = 1;
	var f0 = 0;
	var f1 = 1;
	for (var start = 2; start < user_input; start++){		//loop dyamically shifts values to the left and adds last 2 values
		var f2 = f0 + f1;
		fib_num[start] = f2;
		f0 = f1;
		f1 = f2;
	}
	if (u_input.trim() == "" || isNaN(u_input)) {				//check for no input and valid input
		document.getElementById("result").innerHTML = "Invalid Input";

	}
	else if(((user_input - Math.floor(user_input)) !== 0)||(user_input < 0)){	//check for decimals and negatives
		document.getElementById("result").innerHTML = "Cannot compute Fib of a negative integer";

	}
	else{			//returns the fib sequence for the entered element number
		document.getElementById("result").innerHTML = "The Fibonacci Sequence for Element #" + user_input + " is " + fib_num[user_input-1];
		compute_tab();
	}
}

function compute_tab(){			//function generates a table from 0 to n(the number entered by user)
	var fib_tab = "<table border='1'><tr><th scope = 'col'>n</th><th scope = 'col'>fib(n)</th></tr>";
	//generate a long string of HTML table tags
	var u_input = document.getElementById("userInput").value;
	var user_input = parseInt(u_input);
	var f0 = 0;
	var f1 = 1;
	if (user_input == 0){		//enter the first value of table if input is 0
		fib_tab = fib_tab + "<tr><td>" + 0 + "</td><td>" + 0;
	}
	else
		fib_tab = fib_tab + "<tr><td>" + 0 + "</td><td>" + 0 + "</td>" + "<tr><td>" + 1 + "</td><td>" + 1 + "</td>"; 
		//entered the first 2 rows of the table 
		for (var start = 0; start <= user_input-2; start++){	//dynamically enter fib sequence as counter goes up 
			var f2 = f0 + f1;
			fib_tab = fib_tab + "<tr><td>" + (start + 2) + "</td><td>" + f2 + "</td>";
			f0 = f1;
			f1 = f2;
		}

	fib_tab = fib_tab + "</table>";
	document.getElementById("table_result").innerHTML = fib_tab; //return the table to the div on the webpage

}