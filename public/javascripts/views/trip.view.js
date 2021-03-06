var TripView = Backbone.View.extend({
	initialize: function() {
		this.model = new Trip();
		this.listenTo(this.model.get('days'), 'add', this.createDayBtn);
		var hotelsSelectView = new ActivitySelectView();
		$('.choose.hotels').append(hotelsSelectView.$el);
	},
	el: '#trip',
	events: {
		'click #add-day': 'addDay'
	},
	addDay: function() { 
		var dayCollection = this.model.get('days');
		dayCollection.add({dayNum: dayCollection.length + 1});
		// temp_days.add({});
		//temp_days.save or temp_days.sync
		//model.Day.create
		//$.post(/days/)
	},
	createDayBtn: function(dayModel) {
		//console.log(dayModel);
		var view = new DayButtonView({ model: dayModel });
		this.$el.find('#day-btn-container').append(view.$el);
		//<yuck>
		//this.$el.find('#day-btn-container').append('<button class="btn btn-default btn-primary">Day ' + temp_days.length + '</button>');
		//</yuck>
	}
});
