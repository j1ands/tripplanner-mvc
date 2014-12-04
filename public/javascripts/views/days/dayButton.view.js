var DayButtonView = Backbone.View.extend({
	buildHTML : _.template($('#button_template').html()),
	render: function() {
		this.setElement(this.buildHTML(this.model.attributes));
		return this;
	},
	initialize: function() {
		this.render();
	}
});