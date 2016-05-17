
//new approach: have only one collection - selected items
//keep it linked to selected items view. 

var SelectedFoodItemsCollection = Backbone.Collection.extend({
    model: FoodItem,

    get_total_calories: function() {
        var total_calories = 0.0;
        this.each(function(item) {
                total_calories = total_calories + item.get("calories");
        });
        return total_calories; 

    },
});
