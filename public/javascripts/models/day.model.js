var Day = Backbone.Model.extend({
	default: function() {
		this.set('hotel', null);
		this.set('thingsToDo', []);
		this.set('restaurants', []);
	}
})