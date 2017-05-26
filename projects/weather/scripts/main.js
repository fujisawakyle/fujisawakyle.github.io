$(document).ready(function(){
	$("#sun, #moon, #cloud, #rain, #lightning, #daySky, #nightSky").hide();
  var tog = false;
  var data, lat, lon, city, region, time, temp, tempMin, tempMax, condition, description, wind, sunrise, sunset, icon, iconURL, temp1, temp2, temp3, temp4, temp5, temp6, bgURL, night = null, futureArray = [[],[],[],[],[],[]];
 function showSun() {
	 night = 0;
	 $("#sun").show();
	 $("#daySky").show();
	 $("#sun").css({"width":"140px",
		"position":"absolute",
		"left":"36%",
		"top":"25px"});
	 $("#weatherBG h1").css({"top":"25px"})
 }
function showMoon() {
	night = 1;
	 $("#moon").show();
	$("#nightSky").show();
	 $("#moon").css({"width":"100px",
		"position":"absolute",
		"left":"36%",
		"top":"49px"})
 }
function showCloud() {
	 $("#cloud").show();
	 $("#cloud").css({"width":"140px",
		"position":"absolute",
		"left":"40%",
		"top":"60px"})
 }
function showRain() {
	$("#rain").show();
	$("#rain").css({"width":"140px",
		"position":"absolute",
		"left":"40%",
		"top":"61px"})
 }
function showLightning() {
	 $("#lightning").show();
	 $("#lightning").css({"width":"140px",
		"position":"absolute",
		"left":"40%",
		"top":"61px"})
 }
function showSnow() {
	 $("#snow").show();
	 $("#snow").css({"width":"140px",
		"position":"absolute",
		"left":"40%",
		"top":"61px"})
 }	
  //decides on background
  function switchBG(val){
		
    var weather = "";
    switch (val){
      case '01d':
				//clear sky - day
        showSun();
        break;
      case '01n':
        //clear sky - night
        showMoon();
				break;
      case '02d':
        // few clouds - day
				showSun();
				showCloud();
        break;
      case '02n':
        // few clouds - night
				showMoon();
				showCloud();
        break;
        
      case '03d':
        // scattered clouds - day
				showSun();
				showCloud();
        break;  
      case '03n':
         // scattered clouds - night
				showMoon();
				showCloud();
        break;    
        
      case '04d':
        // broken clouds - day
				showSun();
				showCloud();
        break;  
      case '04n':
        // broken clouds - night
				showMoon();
				showCloud();
        break; 
        
      case '09d':
        // shower rain - day
				showSun();
				showRain();
        break;  
      case '09n':
        // shower rain - night
				showMoon();
				showRain();
        break;  
        
      case '10d':
        // rain - day
				showSun();
				showRain();
        break;  
      case '10n':
        // rain - night
				showMoon();
				showRain();
        break;  
        
      case '11d':
        // thunderstorm - day
				showSun();
				showLightning();
        break;
      case '11n':
        // thunderstorm - night
				showMoon();
				showLightning();
        break;
        
      case '13d':
        showSun();
				showSnow();
				// snow - day
        break;
      case '13n':
        // snow - night
				showMoon();
				showSnow();
        break;  
        
      case '50d':
        showSun();
				//mist - day
        break;
      case '50n':
        //mist - night
				showMoon();
        break;  
    }
    return weather;
  }
  
  //converts unit
  function displayTemp(Ftemp, tog){
    if (tog) return Math.round((Ftemp - 32) * (5/9)) + "&#176;" + "C";//C 
    return Math.round(Ftemp) + "&#176;" + "F";//F
  }
  
  function displaySpeed(mph, tog){
    if (tog) return Math.round((mph * 1.60934)) + " km/h";
    return Math.round(mph) + " mph";
  }
  //renders the unit change
  function renderDay (data, tog) {
		
    temp = displayTemp(data.main.temp, tog);
    tempMin = displayTemp(data.main.temp_min, tog);
    tempMax = displayTemp(data.main.temp_max, tog);
    description = data.weather[0].description;
    description = description[0].toUpperCase() + description.substring(1);
    wind = displaySpeed(data.wind.speed, tog);
    sunrise = data.sys.sunrise;
    sunset = data.sys.sunset;
    icon = data.weather[0].icon;
		icon = "13n";
    bgURL = switchBG(icon);
   $("#todayTemp").html(" " + description + "<br />" + 'Temp: ' + temp + "<br />" + 'High/Low: ' + tempMax + "/" + tempMin + "<br />" + 'Wind: ' + wind);
    if (night == 1) {
			$("#todayTemp").css({"color":"white", "background":"rgba(255, 255, 255, 0.07)"})
		}
  }
  
	function renderWeek (data, tog) {
		
		for(i=0;i<6;i++){
			futureArray[i][0] = data.list[i+1].temp.day;
			futureArray[i][1] = data.list[i+1].weather[0].icon;
		}
		
		futureArray[0][1]
		temp1 = displayTemp(futureArray[0][0], tog);
		$("#day1").html('<h1>' + temp1 + '</h1>');
		
		temp2 = displayTemp(futureArray[1][0], tog);
			$("#day2").html('<h1>' + temp2 + '</h1>');
		temp3 = displayTemp(futureArray[2][0], tog);
		
			$("#day3").html('<h1>' + temp3 + '</h1>');
		temp4 = displayTemp(futureArray[3][0], tog);
		
			$("#day4").html('<h1>' + temp4 + '</h1>');
		temp5 = displayTemp(futureArray[4][0], tog);
			
			$("#day5").html('<h1>' + temp5 + '</h1>');
		temp6 = displayTemp(futureArray[5][0], tog);
		
			$("#day6").html('<h1>' + temp6 + '</h1>');
		/*
    
    icon = data.weather[0].icon;
		icon = "13n";
    bgURL = switchBG(icon);
   */
		}
	
  //fetches the location
  var fetchLocation = "http://ip-api.com/json"; 
  $.getJSON(fetchLocation, function(data){
  lat = data.lat;
  lon = data.lon;
  city = data.city;
  region = data.region;
  
  //fetches the time
  var fetchTime = "http://api.timezonedb.com/v2/get-time-zone?key=N6JVQ7FFA9S1&format=json&by=position&lat=" + lat + "&lng=" + lon;
  $.getJSON(fetchTime, function(data){
    time = data.timestamp;
    if (sunrise < time && sunset > time) {
      $("#sunOrMoon").html('Enjoy the sun while it\'s up!'); 
    } else if (time > sunset) {
      $("#sunOrMoon").html('What phase is the moon in?');     
    }
  });
    
  //fetches API weather data for day  
  var url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat +'&lon=' + lon + '&units=imperial&APPID=bdab7e9459aff910128a08e2c5dd37e6';

  $.getJSON(url, function(apiData){
    data = apiData;
    renderDay(apiData, tog);
		if (night == 0){
    $("#weatherBG").prepend('<h1> Today in ' + city + ", " + region + '</h1>');
		}
		else {
		$("#weatherBG").prepend('<h2> Tonight in ' + city + ", " + region + '</h2>');
			
		}
  //fetches API weather data for week
		var weekAPI = 'http://api.openweathermap.org/data/2.5/forecast/daily?&units=imperial&APPID=bdab7e9459aff910128a08e2c5dd37e6&lat=' + lat + '&lon=' + lon + '&cnt=7';

  $.getJSON(weekAPI, function(weekData){
    data = weekData;
		renderWeek(weekData, tog);
	});
    //if there's a click on toggle, switch cel and re-render;
     $("#toggle").on("click", function() {
    tog = !tog;
    render(data, tog);
  });
    
  });
});
  
}); 


  
