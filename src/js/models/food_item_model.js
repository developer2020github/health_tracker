//========================================================
//Calories calculator
//2016 - 2017
//Author:  developer2020 
//e-mail:  dev276236@gmail.com
//======================================================== 
//This is a model for food item. Methods and properties are self-explanatory
//select/deselect methods are not really used in current version, 
//but keep them in - may decide to further enhance the application
var FoodItem = Backbone.Model.extend({


    select: function() {
        this.set({ selected: true });
    },


    decelect: function() {
        this.set({ selected: false });
    },


    defaults: {
        name: '',
        selected: false,
        calories: 0
    },

});
