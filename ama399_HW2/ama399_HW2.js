function getWeather(){
	var id = $("#client_id").val();
	var key = $("#secret_key").val();
	//var id = "V3F9TIeyltLWECwilMwv";
	//var key = "N8NApDxq2FFbKbhxAcbgYVz0xIy7qxm5YMc8rS3A";
	if(navigator.geolocation){												//geolocation to grab lat and lon from chrome
		navigator.geolocation.getCurrentPosition(function(position){
			var lat = position.coords.latitude;
			var lon = position.coords.longitude;
			var URL = "https://api.aerisapi.com/forecasts/"+lat+","+lon+"?client_id="+id+"&client_secret="+key;		//URL to API
		$.ajax({
			type: "GET",
			url: URL,
			dataType: "jsonp",
			success : function(msg){
				var jsonObj = msg.response[0].periods;			//Get API from inside this bigger API
				//Create a string with the table titles
				var strHTML = "<tr><th>Date</th><th>Max Temp(F)</th><th>Min Temp(F)</th><th>Weather</th></tr>";
				//Iterate to add rows into the table
				for (i = 0; i < 7; i++){
					strHTML += "<tr><td>" + jsonObj[i].validTime + "</td><td>" + jsonObj[i].maxTempF + "</td><td>" + jsonObj[i].minTempF + "</td><td>" + jsonObj[i].weather + "</td>";
				}
				//Output table to HTML 
				$('#tblDynamic').html(strHTML);
				}

		})
		})
	}
}

