function home(){
	$('#page').html("<h2>HOME PAGE</h2>");
}
//Display table options on the dynamic page
function displayTab(){
	var URL = "http://localhost:8080/tablesPage";

	$.ajax({
		type: 'GET',
		url: URL,
		data: {},
		dataType: 'html',
		success: function(msg){
			$('#page').html(msg);
		},
		error: function(xhr, ajaxOptions, thrownError){
		}
	});
}
//Display actual table based on option
function getTable(){
	var URL = "http://localhost:8080/getTable";
	var opt = $("#option").val();

	$.ajax({
		type: 'GET',
		url: URL,
		data: {'opt': opt},
		dataType: 'html',
		success: function(msg){
			$('#output').html(msg);
		},
		error: function(xhr, ajaxOptions, thrownError){
		}	
	})
}
//Display transcript options on the dynamic page
function displayTran(){
	var URL = "http://localhost:8080/transcriptPage";

	$.ajax({
		type: 'GET',
		url: URL,
		data: {},
		dataType: 'html',
		success: function(msg){
			$('#page').html(msg);
		},
		error: function(xhr, ajaxOptions, thrownError){
		}
	});
}
//Display transcript on the page based on previous options
function getTran(){
	var URL = "http://localhost:8080/getTranscript";
	var s_opt = $("#s_opt").val(); 
	var t_opt = $("#t_opt").val();

	$.ajax({
		type: 'GET',
		url: URL,
		data: {'s_opt': s_opt, 't_opt': t_opt},
		dataType: 'html',
		success: function(msg){
			$('#output').html(msg);
		},
		error: function(xhr, ajaxOptions, thrownError){
		}	
	})
}
//Display student options on the dynamic page
function displayStudent(){
	var URL = "http://localhost:8080/studentPage";
	$.ajax({
		type: 'GET',
		url: URL,
		data: {},
		dataType: 'html',
		success: function(msg){
			$('#page').html(msg);
		},
		error: function(xhr, ajaxOptions, thrownError){
		}	
	})
}
//Add student to the MYSQL database based on the options from previous page
function addStudent(){
	var URL = "http://localhost:8080/addStudent";
	var fname = $("#fname").val();
	var lname = $("#lname").val();
	var dob = $("#dob").val();
	var major = $("#major").val();

	$.ajax({
		type: 'POST',
		url: URL,
		data: {'fname': fname, 'lname': lname, 'dob': dob, 'major': major},
		dataType: 'html',
		success: function(msg){
			$('#output').html(msg);
		},
		error: function(xhr, ajaxOptions, thrownError){
		}
	});
}