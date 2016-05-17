var FoodItem  = Backbone.Model.extend({
  
  select: function(){
  	this.set({selected: true});
  },

  decelect: function(){
  	this.set({selected: false});
  },

  defaults: {
    name: '',
    selected: false,
    calories: 0
  },

});