//========================================================
//Health tracker/calories calculator 
//2016
//Author:  developer2020 
//e-mail:  dev276236@gmail.com
//========================================================
//this is the main view of the application. 

var app = app || {};

(function () {

var InputView = Backbone.View.extend({
    el: 'body',

    //main events are user clicking search and clear buttons 
    events: {
        "click #food-item-search-button": "add_food_items",
        "click #clear-current-list-button": "clear_current_list"
    },

  
    initialize: function() {
      this.$entered_item = this.$("#food_item_search_name");
    },


    //this method adds an item returned by Nutritionix API 
    //into collection of currently displayed items. It is 
    //passed as an "ok" callback to Nutritionix API. 
    add_food_item: function(item_name, n_calories) {
        var new_item = new FoodItem({
            name: item_name,
            calories: n_calories
        });
        app.current_items_collection.add_if_does_not_exist(new_item);
    },


    //this is callback to be passed to Nutritionix API 
    //to be called in case of error. 
    show_error_message: function() {
       app.current_list_view.show_error_message(); 
    }, 


    //this method is called when user clicks search button. 
    //it clears error message (in case it is displayed) and calls
    //Nutritonix API to get list of food items. 
    add_food_items:  function() {
        app.current_list_view.clear_error_message(); 
        var user_entered_item = this.$entered_item.val();
        app.nutritonix_handler.get_item_info_post(user_entered_item, 5, this.add_food_item, this.show_error_message);
    },


    //this method is called when user clicks clear button (for the list of current items)
    clear_current_list: function(){
       app.current_items_collection.reset(); 
    },

    //this function is used to simplify layout testing - add some items right away 
    //normally should not be called.
    test: function(){
      app.nutritonix_handler.get_item_info_post("pizza", 5, this.add_food_item);

      //app.selected_items_collection.add(new FoodItem({name: "pizza first", calories: 540}));
      //app.selected_items_collection.add(new FoodItem({name: "pizza second long", calories: 450}));
    } 
});

    app.input_view = new InputView();
})();

//fetch items into selected items view if user saved some 
//in previous sessions.
app.selected_items_collection.fetch({reset: true});

