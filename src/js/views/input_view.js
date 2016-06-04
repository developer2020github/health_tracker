//========================================================
//Health tracker/calories calculator 
//2016
//Author:  developer2020 
//e-mail:  dev276236@gmail.com
/*========================================================
This is a personal project/portfolio one page-application
utilizing Backbone. Functionality is rather primitive - 
the purpose of building  the application was to implement some 
widely used functionality (like using local storage with Backbone or 
user interaction with several views)
and not to create something very useful form practical point 
of view. 

Application calls Nutritionix API with a user entered food item name, 
and populates current list view with first 5 items returned by Nutritionix.
Then user can add these items into selected list of items, 
delete them, and save selected list of items (this would save it into local storage).

Application consists of 4 views, 2 collections and one model.

Model: 

food item model: stores item name and calories. Has couple 
more fields (selected) but they are not used in current version 
of the application. 

Views:

 1) input view is the main view - handles user input and 
 calls to Nutriotionix API.

 2) current list of food items: displays list of food items 
 returned by Nutritionix. Supports list clear operation.
 Also can display error messages: 
 making a separate view for error messages seemed unnecessarily overcomplicated 
 for such a simple application.

 3) selected list of food items: 
 displays list of food items, selected by user. 
 Shows automatically updated sum of calories, 
 supports clear and save operations. Save would save all 
 items into local storage. 

 4) item view - view for a single food item

 Collections: 

 1) collection of current items - supports view (2)

 2) collection of selected food items  - supports view (3)


========================================================*/
//this is the main view of the application. 

var app = app || {};

(function() {

    var InputView = Backbone.View.extend({
        el: "body",

        //main events are user clicking search and clear buttons 
        events: {
            "click #food-item-search-button": "add_food_items"
        },


        initialize: function() {
            this.$entered_item = this.$("#food_item_search_name");
            //fetch items into selected items view if user saved some 
            //in previous sessions.
            app.selected_items_collection.fetch({ reset: true });
        },


        //this method adds an item returned by Nutritionix API 
        //into collection of currently displayed items. It is 
        //passed as an "ok" callback to Nutritionix API. 
        add_food_item: function(item_name, n_calories) {
            var new_item = new FoodItem({
                name: item_name,
                calories: n_calories
            });
            //if at least one item was returned - we can clear status
            app.current_list_view.clear_status();
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
        add_food_items: function() {
            var user_entered_item = this.$entered_item.val();
            if (user_entered_item === "") {
                return;
            }
            app.current_list_view.clear_error_message();
            app.current_list_view.clear_status();

            app.current_list_view.show_status();
            var number_of_items = app.settings.get("max_number_of_items_in_search");
            app.nutritonix_handler.get_item_info_post(user_entered_item, number_of_items, this.add_food_item, this.show_error_message);
        }
    });

    app.input_view = new InputView();
})();
