//========================================================
//Health tracker
//2016
//Author:  developer2020 
//e-mail:  dev276236@gmail.com
//========================================================
//collection of items in the input list
var app = app || {};

(function () {

var CurrentFoodItemsCollection = Backbone.Collection.extend({
    model: FoodItem,

    item_exists: function(item_name) { 
        var exists = false;
        this.each(function(item) {
                if((item.get("name")) === item_name){
                    exists = true; 
                }
        });
        return exists; 
    },

    add_if_does_not_exist: function (item){
        if (!(this.item_exists(item.get("name")))){
            this.add(item)
        }
    }
});

    app.current_items_collection = new CurrentFoodItemsCollection();
})();