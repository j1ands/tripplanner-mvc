var DaysCollection = Backbone.Collection.extend({
	model: Day,
	url: '/days/'
});

// DaysCollection.on("add", function(day){
// 	console.log(day == false);
// 	if(!day.hotel)
// 	{
// 		Backbone.sync("create", day, function(success){
// 			console.log(success);
// 		});
// 	}
// });