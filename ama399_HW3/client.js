function compute(){
	var n = $("#input").val();		//Grabs input from html page
	var opt = $("#option").val();		//Grabs option value from the dropdown menu
	if(opt == "fact"){					//Redirects the server based on the dropdown menu options
		URL = "http://localhost:8080/fact"
	}
	else{
		URL = "http://localhost:8080/sum"
	}
	//Ajax request to server
	$.ajax({
		type: "GET",
		url: URL,
		data: {"n": n},		//basic JSON with input value
		dataType: "html",
		success: function(msg){		//On success, print output to empty div
			$("#output").html(msg);
		},
		error: function(xhr, ajaxOptions, throwError){		//Error shoots a server error with a description
			$("#output").html("Server Error");
		}
	});
}