$(document).ready(function(){

	function calculateTime(){
		var launchDate = new Date("Jan 1, 2019 13:00:00").getTime();
		var todaysDate = new Date().getTime();

		var difference = (launchDate - todaysDate)/1000;
		var days = parseInt(difference/86400);
		var left = difference - days * 86400;
		var hours = parseInt((left)/3600);
		left = left - hours*3600;
		var minutes = parseInt(left/60);
		var seconds = parseInt(left-minutes*60);

		$("#days").html(days);
		$("#hours").html(hours);
		$("#minutes").html(minutes);
		$("#seconds").html(seconds);

		if(difference < 0){
			clearInterval(interval);
			$("#days").html(0);
			$("#hours").html(0);
			$("#minutes").html(0);
			$("#seconds").html(0);
			$("#launched").fadeIn(1000);
		}

	}

	var interval = setInterval(calculateTime, 1000);


})