//var numDays = 0;

function getDays(dayCollection)
{
	$.get('/days/', function(data){
		if(data.length)
		{
			for(var day in data)
			{
				//numDays = day.day_number - 1;
				//addDayButton();
				console.log(data[day]);
				dayCollection.add({hotel: "cheese", 
								   thingsToDo: ["cheese", "cheese2"], 
								   restaurants: ["cheese", "cheese2"],
									dayNum: Number(data[day].day_number)});
			}
		}
		else
		{
			//addDayButton();
			dayCollection.add({dayNum: 1});
		}
	});
}

function populateDropdowns(tripView) {



}


$(document).ready(function(){

	// window.temp_days = new DaysCollection();
	window.tripViewInstance = new TripView();

	tripViewInstance.model.get('days').on("add", function(day){
		// console.log(day.get("hotel"));
		if(!day.get("hotel"))
		{
			Backbone.sync("create", day, function(success){
				// console.log(success);
				return success;
			});
		}
	});

	getDays(tripViewInstance.model.get('days'));
	//console.log(all_hotels, all_restaurants, all_things_to_do);

})

//console.log(tripViewInstance);