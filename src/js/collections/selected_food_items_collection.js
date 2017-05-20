//========================================================
//Calories calculator
//2016 - 2017
//Author:  developer2020 
//e-mail:  dev276236@gmail.com
//======================================================== 
//This collection includes items that were selected by user
//It supports saving collection in local storage 

var app = app || {};

(function() {

    var SelectedFoodItemsCollection = Backbone.Collection.extend({
        model: FoodItem,

        //use local storage - in case user wants to save the list
        localStorage: new Backbone.LocalStorage("food_tracker_backbone"),


        //this method return a sum of calories of all items in collection 
        get_total_calories: function() {
            var total_calories = 0.0;
            this.each(function(item) {
                total_calories = total_calories + item.get("calories");
            });
            return total_calories.toFixed(0);
        },


        //this method saves items in collection into local storage
        save: function() {
            this.each(function(item) {
                item.save();
            });
        },


        //this method clears all models from local storage
        clear_all: function() {
            var length = this.length;
            for (var i = 0; i < length; i++) {
                this.at(0).destroy();
            }
        }
    });

    app.selected_items_collection = new SelectedFoodItemsCollection();
})();
