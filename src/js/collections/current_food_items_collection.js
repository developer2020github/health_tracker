//========================================================
//Health tracker (calories calculator)
//2016 - 2017
//Author:  developer2020 
//e-mail:  dev276236@gmail.com
//========================================================
//collection of items in the input list (current  items)
var app = app || {};

(function () {

var CurrentFoodItemsCollection = Backbone.Collection.extend({
    model: FoodItem,


    //this method checks if item is already in the collection
    //(and, therefore, is displayed in the current list:
    //if it is - no need to add it second time 
    item_exists: function(item_to_check) { 
        var item_calories = item_to_check.get("calories");
        var item_name = item_to_check.get("name");
        var exists = false;
        this.each(function(item) {
                if(((item.get("name")) === item_name)&&((item.get("calories")) === item_calories)){
                    exists = true; 
                }
        });
        return exists; 
    },


    //this method adds item into collection if it is not it yet
    add_if_does_not_exist: function (item){
        if (!(this.item_exists(item))){
            this.add(item);
        }
    }
});

    app.current_items_collection = new CurrentFoodItemsCollection();
})();