var SelectedListOfFoodItems = Backbone.View.extend({
       
	el: '#selected-list',

    initialize: function () {
    	this.$list=$('#selected-list');
    },

	add_item: function(food_item){
	  var food_item_view = new FoodItemView({ model: food_item });
	  this.$list.append(food_item_view.render().el);
	 }
	});