//========================================================
//Health tracker (calories calculator)
//2016
//Author:  developer2020 
//e-mail:  dev276236@gmail.com
//========================================================
//view of current list of items: shows items, returned by Nutritionix API and 
//error message (can be triggered by Nutrinionix error for now, but 
//was created as a separte method so that more cases can be added if needed)

var app = app || {};

(function() {
    var CurrentListOfFoodItems = Backbone.View.extend({

        el: "body",

        error_template: _.template($("#error-message-template").html()),
        status_template: _.template($("#status-message-template").html()),

        //main event is user clicking clear button
        events: {

            "click #clear-current-list-button": "clear_current_list"
        },

        initialize: function() {
            this.$list = $("#current-list");
            this.listenTo(this.collection, "add", this.on_model_add);
            this.listenTo(this.collection, "reset", this.on_model_reset);
        },


        //when model is added to collection of the items - append 
        //its view to the end of list
        on_model_add: function() {
            var last_model = this.collection.at(this.collection.length - 1);
            var food_item_view = new FoodItemView({ model: last_model });
            this.$list.append(food_item_view.render().el);
        },

        //this method is called when user clicks clear button 
        clear_current_list: function() {
            this.collection.reset();
            this.clear_status();
            this.clear_error_message();
        },

        on_model_reset: function() {
            this.$list.empty();
        },


        clear_error_message: function() {
            this.$list.find(".error-display").remove();
        },


        show_error_message: function(msg) {
            var error_message = "something went wrong...please retry";
            if (msg !== undefined) {
                error_message = msg;
            }

            var htmlOutput = this.error_template({ "message": error_message });
            this.clear_error_message();
            this.clear_status();
            this.$list.append(htmlOutput);
        },

        show_status: function() {
            var htmlOutput = this.status_template();
            this.$list.append(htmlOutput);
        },

        clear_status: function() {
            this.$list.find(".status-display").remove();
        }

    });

    app.current_list_view = new CurrentListOfFoodItems({ collection: app.current_items_collection });
})();
