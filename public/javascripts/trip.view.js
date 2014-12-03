var TripView = Backbone.View.extend({
	initialize: function() {
		this.listenTo(temp_days, 'add', this.createDayBtn);
	},
	el: '#trip',
	events: {
		'click #add-day': 'addDay'
	},
	addDay: function() { 
		temp_days.add({})
	},
	createDayBtn: function(dayModel) {
		
		var view = new DayButtonView({ model: dayModel }).render();
		console.log(view);
		this.$el.find('#day-btn-container').append(view.$el);
		//<yuck>
		//this.$el.find('#day-btn-container').append('<button class="btn btn-default btn-primary">Day ' + temp_days.length + '</button>');
		//</yuck>
	}
});
