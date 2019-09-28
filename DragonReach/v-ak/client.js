
function logout(){
	var URL = 'http://localhost:8080/logout';	

	$.ajax({
		type: 'GET',
		url: URL,
		data: {},
		dataType: 'html',
		success: function(msg){
			$('.webpage').html(msg);
		},
		error: function(xhr, ajaxOptions, thrownError){
			alert('Error contacting server!');
		}
	});
}

function login(){
	var URL = 'http://localhost:8080/login';	
	var uname = $(".uname").val();
	var pass = $(".pass").val();
	console.log(uname);
	$.ajax({
		type: 'GET',
		url: URL,
		data: {"uname": uname, "pass": pass},
		dataType: 'html',
		success: function(msg){
			$('.webpage').html(msg);
		},
		error: function(xhr, ajaxOptions, thrownError){
			alert('Error contacting server!');
		}
	});
}

function dashboard(){
	var URL = 'http://localhost:8080/dashboard';	
	$.ajax({
		type: 'GET',
		url: URL,
		data: {},
		dataType: 'html',
		success: function(msg){
			$('.webpage').html(msg);
		},
		error: function(xhr, ajaxOptions, thrownError){
			alert('Error contacting server!');
		}
	});
}

function create(){
	var URL = 'http://localhost:8080/create';	

	$.ajax({
		type: 'GET',
		url: URL,
		data: {},
		dataType: 'html',
		success: function(msg){
			$('.webpage').html(msg);
		},
		error: function(xhr, ajaxOptions, thrownError){
			alert('Error contacting server!');
		}
	});
}

function post(){
	var URL = 'http://localhost:8080/post';
	
	$.ajax({
		type: 'GET',
		url: URL,
		data: {},
		dataType: 'html',
		success: function(msg){
			$('.webpage').html(msg);
		},
		error: function(xhr, ajaxOptions, thrownError){
			alert('Error contacting server!');
		}
	});
}

function search(){
	var URL = 'http://localhost:8080/search';
	
	$.ajax({
		type: 'GET',
		url: URL,
		data: {},
		dataType: 'html',
		success: function(msg){
			$('.webpage').html(msg);
		},
		error: function(xhr, ajaxOptions, thrownError){
			alert('Error contacting server!');
		}
	});
}

function results(){
	var URL = 'http://localhost:8080/results';
	
	$.ajax({
		type: 'GET',
		url: URL,
		data: {},
		dataType: 'html',
		success: function(msg){
			$('.webpage').html(msg);
		},
		error: function(xhr, ajaxOptions, thrownError){
			alert('Error contacting server!');
		}
	});
}



function confirm(){
	var URL = 'http://localhost:8080/confirm';	

	
$.ajax({
		type: 'GET',
		url: URL,
		data: {},
		dataType: 'html',
		success: function(msg){
			$('.webpage').html(msg);
		},
	});
}