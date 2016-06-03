//========================================================
//Health tracker (calories calculator)
//2016
//Author:  developer2020 
//e-mail:  dev276236@gmail.com
//========================================================
//thsi view shows list of user-selected food items and 
//sum of calories.

var app = app || {};

(function() {

    var SelectedListOfFoodItems = Backbone.View.extend({

        el: 'body',

        total_template: _.template($('#total-calories-template').html()),

        events: {
            "click #selected-list-save-all-button": "save_list",
            "click #selected-list-clear-all-button": "clear_all"
        },

        initialize: function() {
            this.$list = $('#selected-list');
            this.$total_calories_el = $('#total-calories-selected');
            this.$selected_list_buttons = $('#selected-list-buttons-id');
            this.total_calories = 0;
            this.listenTo(this.collection, 'add', this.on_model_add);
            this.listenTo(this.collection, 'remove', this.on_remove);
            this.listenTo(this.collection, 'reset', this.on_collection_reset, this);
            this.render();
        },
        

        //this method saves current list to local storage
        save_list: function() { 
            this.collection.save();
        },


        //this methods cleares list of selected items
        clear_all: function() {
            
            this.collection.clear_all();
            this.on_collection_reset();
        },


        //called on reset event of the collection: 
        //empties list and re-builds it depending on 
        //content of collection
        on_collection_reset: function() {
            this.$list.empty();
            var self = this;
            self.$list.find(".total-calories").remove();

            app.selected_items_collection.each(function(item) {
                var food_item_view = new FoodItemView({ model: item });
                self.$list.append(food_item_view.render().el);

            });
            self.render();
        },


        on_remove: function() {
            this.$list.find(".total-calories").remove();
            this.render();
        },


        //commont portion of view updates
        render: function() {
            console.log(this.collection.length);
            if (this.collection.length >0){
                this.$selected_list_buttons.toggle(true);
            }else{
                this.$selected_list_buttons.toggle(false);
            }


            var htmlOutput = this.total_template({ calories: this.collection.get_total_calories() });
            this.$list.append(htmlOutput);


            return this;
        },


        //adds item that was added to the collection
        on_model_add: function() {
            var last_model = this.collection.at(this.collection.length - 1);
            var food_item_view = new FoodItemView({ model: last_model });
            this.$list.find(".total-calories").remove();
            this.$list.append(food_item_view.render().el);
            this.render();
        }

    });

    app.selected_list_view = new SelectedListOfFoodItems({ collection: app.selected_items_collection });
})();
