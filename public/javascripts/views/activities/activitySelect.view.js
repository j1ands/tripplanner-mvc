var ActivitySelectView = Backbone.View.extend({
	buildHTML: _.template($('#select_template').html()),
	initialize: function(options) {
		//var activities = {}
		this.options = options;
		this.render(all_activities[this.options.type]);
	},
	render: function(activities) {

		this.setElement(this.buildHTML({activities: activities}));
		//this.$el.html(this.buildHTML({activities: activities}));
		return this;
	}
});
