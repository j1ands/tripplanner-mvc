var DayButtonView = Backbone.View.extend({
	render: function() {
		this.$el.html('<button class"btn btn-default btn-primary">Day ' + temp_days.length + '</button>');
		return this;
	}
});