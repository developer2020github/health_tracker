var SelectedListOfFoodItems = Backbone.View.extend({

    el: '#selected-list',

    total_template: _.template($('#total-calories-template').html()),

    initialize: function() {
        this.$list = $('#selected-list');
        this.$total_calories_el = $('#total-calories-selected');
        this.total_calories = 0;
        this.listenTo(this.collection, 'add', this.on_model_add);
        this.listenTo(this.collection, 'remove', this.render);
    },

    render: function() {
        //console.log('render called');
        var htmlOutput = this.total_template({ calories: this.collection.get_total_calories() });
        this.$total_calories_el.html(htmlOutput);
        return this;
    },

    on_model_add: function(){
        var last_model = this.collection.at(this.collection.length - 1);
        var food_item_view = new FoodItemView({ model: last_model });
        this.$list.append(food_item_view.render().el);
        this.render(); 
    }
    /*
    add_item: function(food_item) {
        var food_item_view = new FoodItemView({ model: food_item });
        this.$list.append(food_item_view.render().el);
        this.total_calories = this.total_calories + food_item.get("calories");
        this.render();
    }*/

});
