//collection of food items currently in the non-selected view
//createcollection.create(attributes, [options]) 
//http://backbonejs.org/#Collection-create
/*
var CurrentFoodItemsCollection = Backbone.Collection.extend({
    model: FoodItem,
    selected: function() {
        return this.where({ selected: true });
    },
    total_calories_selected: function() {
        var total_calories 0.0;
        this.each(function(item) {
            if (item.get('selected')) {
                total_calories = total_calories + item.get("calories");
            }
        });
        return total_calories; 

    },
});*/
