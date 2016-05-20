//========================================================
//Health tracker
//2016
//Author:  developer2020 
//e-mail:  dev276236@gmail.com
//========================================================

var app = app || {};

(function () {

var InputView = Backbone.View.extend({
    el: 'body',

    events: {
        "click #food-item-search-button": "add_food_items"
    },

    initialize: function () {
            this.$entered_item = this.$("#food_item_search_name");
            this.current_list_view = new ListOfFoodItems();
            //this.nutritonix_handler = new NutritonixHandler();
        },

  

    add_food_item: function(item_name, n_calories, self) {
        var new_item = new FoodItem({
            name: item_name,
            calories: n_calories
        });

        self.current_list_view.add_item(new_item);
    },

    add_food_items:  function() {
        console.log('add_food_items');
        var user_entered_item = this.$entered_item.val();
        app.nutritonix_handler.get_item_info_post(user_entered_item, 5, this.add_food_item, this);
    },
});

    app.input_view = new InputView();
})();