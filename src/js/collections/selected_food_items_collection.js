//========================================================
//Health tracker
//2016
//Author:  developer2020 
//e-mail:  dev276236@gmail.com
//======================================================== 
var app = app || {};

(function() {

    var SelectedFoodItemsCollection = Backbone.Collection.extend({
        model: FoodItem,

        localStorage: new Backbone.LocalStorage('food_tracker_backbone'),


        get_total_calories: function() {
            var total_calories = 0.0;
            this.each(function(item) {
                total_calories = total_calories + item.get("calories");
            });
            return total_calories;

        },


        save: function() {
            this.each(function(item) {
                item.save();
            });

        },

        clear_all: function() {
        //this method clears all models from local storage
            var length = this.length;
            for (var i = 0; i < length; i++) {
                this.at(0).destroy();
            }
        }
    });

    app.selected_items_collection = new SelectedFoodItemsCollection();


})();
