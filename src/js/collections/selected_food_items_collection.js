
//========================================================
//Health tracker
//2016
//Author:  developer2020 
//e-mail:  dev276236@gmail.com
//========================================================
//new approach: have only one collection - selected items
//keep it linked to selected items view. 
var app = app || {};

(function () {

var SelectedFoodItemsCollection = Backbone.Collection.extend({
    model: FoodItem,

    localStorage: new Backbone.LocalStorage('food-tracker-backbone'),



    get_total_calories: function() {
        var total_calories = 0.0;
        this.each(function(item) {
                total_calories = total_calories + item.get("calories");
        });
        return total_calories; 

    },

    save: function(){
        this.sync("create", this);
    }
});

    app.selected_items_collection = new SelectedFoodItemsCollection();
})();