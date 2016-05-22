//view of the list of items
var ListOfFoodItems = Backbone.View.extend({
       
	el: '#current-list',

    initialize: function () {
    	this.$list=$('#current-list');
    	this.listenTo(this.collection, 'add', this.on_model_add);
    },

	on_model_add: function(){
	    var last_model = this.collection.at(this.collection.length - 1);
        var food_item_view = new FoodItemView({ model: last_model });
        this.$list.append(food_item_view.render().el);
	 },

	});