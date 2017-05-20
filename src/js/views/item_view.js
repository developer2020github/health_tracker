//========================================================
//Calories calculator
//2016 - 2017
//Author:  developer2020 
//e-mail:  dev276236@gmail.com
//========================================================
//This is a view for a food item - shows items name and calories and 
//handles model chnage and destroy events.
// Most of the code is self - explanatory.

//www.sitepoint.com/backbone-basics-models-views-collections-templates/
var app = app || {};
var FoodItemView = Backbone.View.extend({
    //http://stackoverflow.com/questions/16172671/what-is-use-of-tagname-id-and-classname-properties-in-backbone-view-while-we
    tagName: "li",

    // Cache the template function for a single item.
    template: _.template($("#food-item-template").html()),

    // The DOM events specific to an item.
    events: {
        "click .remove": "remove_item",
        "click .select": "select_item"
    },


    initialize: function(selected_item_collection) {
        this.listenTo(this.model, "change", this.render);
        this.listenTo(this.model, "destroy", this.remove);
    },


    render: function() {
        var htmlOutput = this.template(this.model.toJSON());
        this.$el.html(htmlOutput);
        return this;
    },


    remove_item: function() {
        this.model.destroy();
    },


    //if  user clicks add - same event should happen 
    //independently of the list view item belongs to: 
    //1) if it is in the current list - a copy of the item should be added to 
    //list of selected items.
    //2) if it is already in the list of selected item - it should copy itself.
    //(the idea is to allow user to create copies of the same item in case she 
    //wants to see more than one unit in the calries calculator list)
    //Additionally, depending on options settings, can clear current list. 
    select_item: function() {
        this.model.select();
        var new_model = this.model.clone();
        //seems that id is added on each "save" automatically.
        //then, if user tries to click add on a model in selected list - 
        //clone returns a copy of the model with exactly same id, 
        //and it does not get added to collection. I actually want a 
        //new copy of the model to be added, so reset id in the clone. 
        new_model.unset("id", "silent");
        app.selected_items_collection.add(new_model);
        if(app.settings.get("clear_current_list_on_selection")){
            app.current_items_collection.reset(); 
        }
    }
});
