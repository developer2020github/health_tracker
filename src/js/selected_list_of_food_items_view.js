var app = app || {};

(function () {

var SelectedListOfFoodItems = Backbone.View.extend({

    el: '#selected-list',

    total_template: _.template($('#total-calories-template').html()),

    initialize: function() {
        this.$list = $('#selected-list');
        this.$total_calories_el = $('#total-calories-selected');
        this.total_calories = 0;
        this.listenTo(this.collection, 'add', this.on_model_add);
        this.listenTo(this.collection, 'remove', this.on_remove);
        this.render(); 
    },


    on_remove: function(){
        this.$list.find(".total-calories").remove();
        this.render(); 
    },

    render: function() {
        var htmlOutput = this.total_template({ calories: this.collection.get_total_calories() });
        this.$list.append(htmlOutput);
        return this;
    },

    on_model_add: function(){
        var last_model = this.collection.at(this.collection.length - 1);
        var food_item_view = new FoodItemView({ model: last_model });
        this.$list.find(".total-calories").remove();
        this.$list.append(food_item_view.render().el);
        this.render(); 
    }

});

    app.selected_list_view = new SelectedListOfFoodItems({collection: app.selected_items_collection});
})();