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


NutritonixHandler.prototype.get_item_info = function(food_name) {
    food_name = encodeURIComponent(food_name.trim())
    var search_str = "https://api.nutritionix.com/v1_1/search/" +
        food_name +
        "?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat&appId=9fc48220&appKey=a3e3cafed57db6fa5ab87d37072dec11"
    console.log(search_str);
    var decoded_string = decodeURIComponent(search_str);
}


NutritonixHandler.prototype.get_item_info_post = function(item_name, number_of_items_to_get, add_item_callback, error_callback) {
    //http://stackoverflow.com/questions/11456771/using-json-post-request
    var name = item_name + "*";

    var data2 = {
        "appId": "9fc48220",
        "appKey": "a3e3cafed57db6fa5ab87d37072dec11",
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
    }
    $.ajax({
        url: "https://api.nutritionix.com/v1_1/search/",
        type: "POST",
        data: data2,
        dataType: "json",
        success: function(result) {
            $.each(result.hits, function(idx, o) {
                add_item_callback(o.fields.item_name, o.fields.nf_calories);
            })
        },
        error: function(xhr, ajaxOptions, thrownError) {
            error_callback();
        }
    });
}

app.nutritonix_handler = new NutritonixHandler();
