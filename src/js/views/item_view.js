//www.sitepoint.com/backbone-basics-models-views-collections-templates/
var app = app || {};
var FoodItemView = Backbone.View.extend({
    //http://stackoverflow.com/questions/16172671/what-is-use-of-tagname-id-and-classname-properties-in-backbone-view-while-we
    tagName: 'li',

    // Cache the template function for a single item.
    template: _.template($('#food-item-template').html()),

    // The DOM events specific to an item.
    events: {
        'click .remove': 'remove_item',
        'click .select': 'select_item'
    },

    initialize: function(selected_item_collection) {
        //this.selected_item_collection = selected_item_collection; 
        this.listenTo(this.model, 'change', this.render);
        this.listenTo(this.model, 'destroy', this.call_detroy);

    },

    render: function() {

        var htmlOutput = this.template(this.model.toJSON());
        this.$el.html(htmlOutput);
        return this;
    },

    call_detroy: function(){
        this.remove(); 
    },

    remove_item: function() {
        this.model.destroy();
    },

    select_item: function() {
        this.model.select();
        app.selected_items_collection.add(this.model.clone());
        //this.model.destroy();
        //this.remove();
    }
});
