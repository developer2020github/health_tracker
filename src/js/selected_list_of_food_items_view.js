var app = app || {};

(function () {

var SelectedListOfFoodItems = Backbone.View.extend({

    el: 'body',

    total_template: _.template($('#total-calories-template').html()),

    events: {
        "click #save-all-button": "save_list",
        "click #selected-list-clear-all-button": "clear_all"
    },

    initialize: function() {
        this.$list = $('#selected-list');
        this.$total_calories_el = $('#total-calories-selected');
        this.total_calories = 0;
        this.listenTo(this.collection, 'add', this.on_model_add);
        this.listenTo(this.collection, 'remove', this.on_remove);
        this.listenTo(this.collection, 'reset', this.on_model_reset);
        this.render(); 
    },



    save_list: function(){
        //this function should save current list to local storage 

    },

    clear_all: function(){
        //this function cleares list of selected items
        console.log("selected-list-clear-all-button");
        this.collection.reset(); 
    }, 

    on_model_reset: function(){
         this.$list.empty(); 
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