//view of the list of items
var ListOfFoodItems = Backbone.View.extend({
       
	el: '#current-list',

    initialize: function () {
    	this.$list=$('#current-list');
    },

	add_item: function(food_item){
	  var food_item_view = new FoodItemView({ model: food_item });
	  this.$list.append(food_item_view.render().el);
	 }
	});