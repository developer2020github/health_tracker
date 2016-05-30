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
        "click #food-item-search-button": "add_food_items",
        "click #clear-current-list-button": "clear_current_list"
    },

  

    initialize: function() {
      this.$entered_item = this.$("#food_item_search_name");
      this.current_list_view = new ListOfFoodItems({ collection: app.current_items_collection });
  },

    add_food_item: function(item_name, n_calories, self) {
        var new_item = new FoodItem({
            name: item_name,
            calories: n_calories
        });
        app.current_items_collection.add_if_does_not_exist(new_item);
    },

    show_error_message: function(self) {
       self.current_list_view.show_error_message(); 
    }, 

    add_food_items:  function() {
        console.log('add_food_items');
        this.current_list_view.clear_error_message(); 
        var user_entered_item = this.$entered_item.val();
        app.nutritonix_handler.get_item_info_post(user_entered_item, 5, this.add_food_item, this.show_error_message, this);
    },

    clear_current_list: function(){
       app.current_items_collection.reset(); 
    },

    //this function is used to simplify layout testing - add soem items right away 
    test: function(){
      app.nutritonix_handler.get_item_info_post("pizza", 5, this.add_food_item, this);

      //app.selected_items_collection.add(new FoodItem({name: "pizza first", calories: 540}));
      //app.selected_items_collection.add(new FoodItem({name: "pizza second long", calories: 450}));
    } 
});

    app.input_view = new InputView();
})();


//app.input_view.test(); 
///console.log(app.selected_items_collection.pluck('id'));
app.selected_items_collection.fetch({reset: true});
//app.input_view.show_error_message(); 
