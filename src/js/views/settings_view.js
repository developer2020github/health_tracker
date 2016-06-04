//========================================================
//Health tracker (calories calculator)
//2016
//Author:  developer2020 
//e-mail:  dev276236@gmail.com
//========================================================
//This is settings view - provides GUI for user-configurable settings

var app = app || {};
(function() {
    var SettingsView = Backbone.View.extend({
        el: "body",

        // The DOM events
        events: {
            "click #clear-current-list-on-selection": "set_clear_current_list_on_selection",
            "click #auto-save-selected-list": "set_auto_save_selected_list"
        },

        initialize: function() {
            this.$clear_current_list_on_selection_checkbox = $("#clear-current-list-on-selection");
            this.$auto_save_selected_list_checkbox = $("#auto-save-selected-list");
            this.render();
        },


        //This method updates settings as per current model values
        //No need to listen to model change events as this functionality works 
        //only one way in current version: user selects options, view sets values in the model,
        //rest of the application only reads them.
        render: function() {
            this.$clear_current_list_on_selection_checkbox.prop('checked', this.model.get("clear_current_list_on_selection"));
            this.$auto_save_selected_list_checkbox.prop('checked', this.model.get("auto_save_selected_list"));
            return this;
        },


        set_clear_current_list_on_selection: function() {
            var selected = this.$clear_current_list_on_selection_checkbox.is(":checked");
            this.model.set({ clear_current_list_on_selection: selected });
        },


        set_auto_save_selected_list: function() {
            var selected = this.$auto_save_selected_list_checkbox.is(":checked");
            this.model.set({ auto_save_selected_list: selected });
        }

    });

    app.settings_view = new SettingsView({ model: app.settings });
})();
