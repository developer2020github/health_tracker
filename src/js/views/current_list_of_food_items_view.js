//========================================================
//Health tracker
//2016
//Author:  developer2020 
//e-mail:  dev276236@gmail.com
//========================================================
//view of the list of items
var app = app || {};

(function() {
    var CurrentListOfFoodItems = Backbone.View.extend({

        el: '#current-list',

        error_template: _.template($('#error-message-template').html()),

        initialize: function() {
            this.$list = $('#current-list');
            this.listenTo(this.collection, 'add', this.on_model_add);
            this.listenTo(this.collection, 'reset', this.on_model_reset);
        },

        on_model_add: function() {
            console.log('on model_add');
            var last_model = this.collection.at(this.collection.length - 1);
            var food_item_view = new FoodItemView({ model: last_model });
            this.$list.append(food_item_view.render().el);
        },

        on_model_reset: function() {
            this.$list.empty();
        },

        clear_error_message: function() {
            this.$list.find(".error-display").remove();
        },

        show_error_message: function() {
            var htmlOutput = this.error_template({ "message": "something went wrong...please retry" });
            this.clear_error_message();
            this.$list.append(htmlOutput);
        },

    });
    
    app.current_list_view = new CurrentListOfFoodItems({ collection: app.current_items_collection });
})();
