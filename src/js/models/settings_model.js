//========================================================
//Health tracker (calories calculator)
//2016-2017
//Author:  developer2020 
//e-mail:  dev276236@gmail.com
//========================================================
//this module defines application configurations settings object. 

var app = app || {};
(function() {
    var Settings = Backbone.Model.extend({

        defaults: {
            max_number_of_items_in_search: 10,
            clear_current_list_on_selection: true,
            auto_save_selected_list: true
        },
    });

    app.settings = new Settings();
})();
