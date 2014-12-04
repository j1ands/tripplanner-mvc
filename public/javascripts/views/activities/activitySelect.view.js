var ActivitySelectView = Backbone.View.extend({
	buildHTML: _.template($('#dropdown_template').html()),
	initialize: function() {
		this.render()
	},
	render: function() {
		this.setElement(this.buildHTML());
		return this;
	}
});
