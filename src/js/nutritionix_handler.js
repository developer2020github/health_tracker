//========================================================
//Health tracker
//2016
//Author:  developer2020 
//e-mail:  dev276236@gmail.com
//========================================================
//This module will handle an interface with nutritionix
var NutritonixHandler = function() {
    this.app_id = "9fc48220";
    this.API_KEY = "a3e3cafed57db6fa5ab87d37072dec11";

}


NutritonixHandler.prototype.test = function() {
    var search_str = "https://api.nutritionix.com/v1_1/search/cheddar%20cheese?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat&appId=9fc48220&appKey=a3e3cafed57db6fa5ab87d37072dec11";
    var cb_ok = function(r) {
        console.log("callback ok");
        console.log(r);
    }


    var cb_fail = function() {
        console.log("request_failed");
    }


    httpGetAsync(search_str, cb_ok, cb_fail);
};



