//========================================================
//Health tracker
//2016
//Author:  developer2020 
//e-mail:  dev276236@gmail.com
//========================================================
//This module handles interface with nutritionix
var app = app || {};

var NutritonixHandler = function() {
    this.app_id = "9fc48220";
    this.API_KEY = "a3e3cafed57db6fa5ab87d37072dec11";
};


//use post request to get item info
NutritonixHandler.prototype.get_item_info_post = function(item_name, number_of_items_to_get, add_item_callback, error_callback) {
    //http://stackoverflow.com/questions/11456771/using-json-post-request
    var name = item_name + "*";

    var data2 = {
        "appId": this.app_id,
        "appKey": this.API_KEY,
        "fields": [
            "item_name",
            "brand_name",
            "nf_calories",
            "item_type"
        ],
        "offset": 0,
        "limit": number_of_items_to_get,
        "sort": {
            "field": "nf_calories",
            "order": "asc"
        },
        "min_score": 0.5,
        "query": name
    };
    
    $.ajax({
        url: "https://api.nutritionix.com/v1_1/search/",
        type: "POST",
        data: data2,
        dataType: "json",
        success: function(result) {
            $.each(result.hits, function(idx, o) {
                add_item_callback(o.fields.item_name, o.fields.nf_calories);
            });
        },
        error: function(xhr, ajaxOptions, thrownError) {
            error_callback();
        }
    });
};

app.nutritonix_handler = new NutritonixHandler();
