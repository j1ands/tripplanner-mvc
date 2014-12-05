var TripView = Backbone.View.extend({
	initialize: function() {
		console.log(all_activities);
		this.model = new Trip();
		this.listenTo(this.model.get('days'), 'add', this.createDayBtn);
		// var hotelsSelectView = new ActivitySelectView();
		// $('.choose.hotels').append(hotelsSelectView.$el);
		Object.keys(all_activities).forEach(function(typeOfActivity)
		{
			var activitySelectView = new ActivitySelectView({type: typeOfActivity});
			$('.choose.'+typeOfActivity).append(activitySelectView.$el);			
		});
	},
	el: '#trip',
	events: {
		'click #add-day': 'addDay',
		'click #day-btn-container > .btn': 'switchDay'
	},
	switchDay: function(event) {
		this.$el.find('#day-btn-container')
			.children()
			.removeClass("btn-primary");
		$(event.target)
			.addClass("btn-primary");
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
		this.$el.find('#day-btn-container')
			.append(view.$el)
			.children()
			.removeClass("btn-primary")
			.last()
			.addClass("btn-primary");
		//<yuck>
		//this.$el.find('#day-btn-container').append('<button class="btn btn-default btn-primary">Day ' + temp_days.length + '</button>');
		//</yuck>
	}
});
