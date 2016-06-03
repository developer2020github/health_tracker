//========================================================
//Health tracker (calories calculator)
//2016
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
    select_item: function() {
        this.model.select();
        app.selected_items_collection.add(this.model.clone());
    }
});
