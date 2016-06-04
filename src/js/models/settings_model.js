//========================================================
//Health tracker
//2016
//Author:  developer2020 
//e-mail:  dev276236@gmail.com
//========================================================
//this module contains application configurations settings object.
//for now values are hard coded, may implement settings page later. 

var app = app || {};
(function () {var Settings = Backbone.Model.extend({

    defaults: {
        max_number_of_items_in_search: 5,
        clear_current_list_on_selection: true,
        auto_save_selected_list: true
    },
});

app.settings = new Settings();
})();