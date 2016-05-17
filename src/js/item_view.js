//www.sitepoint.com/backbone-basics-models-views-collections-templates/
var FoodItemView =  Backbone.View.extend({
    //http://stackoverflow.com/questions/16172671/what-is-use-of-tagname-id-and-classname-properties-in-backbone-view-while-we
    tagName: 'li',

    // Cache the template function for a single item.
    template: _.template($('#food-item-template').html()),

    // The DOM events specific to an item.
    events: {'click .remove': 'remove_item', 
             'click .select': 'select_item'
     },

    initialize: function() {

    this.listenTo(this.model, 'change', this.render);
	this.listenTo(this.model, 'destroy', this.remove);

    },

    render: function() {
    
     var htmlOutput = this.template(this.model.toJSON());
     this.$el.html(htmlOutput);
     return this;
    },

    remove_item: function(){
     this.model.destroy();
     console.log('model destroyed');
    },
     
   
    select_item: function(){
        //selected_list_view.add_item(this.model);
        this.model.select(); 
        selected_items_collection.add(this.model);
        this.remove();    }



});
