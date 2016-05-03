var SelectedListOfFoodItems = Backbone.View.extend({
       
	el: '#selected-list',

	total_template: _.template($('#total-calories-template').html()),
    initialize: function () {
    	this.$list=$('#selected-list');
    	this.$total_calories_el=$('#total-calories-selected');
    },

    total_calories: 0,

    render: function (){
      console.log("render");
      var htmlOutput = this.total_template({calories: this.total_calories});
      console.log(htmlOutput);
      this.$total_calories_el.append(htmlOutput);
      return this;
    },

	add_item: function(food_item){
	  var food_item_view = new FoodItemView({ model: food_item });
	  this.$list.append(food_item_view.render().el);
	  this.total_calories  = this.total_calories + food_item.calories; 
	  this.render(); 
	 }

	});