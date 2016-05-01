//test module. to be removed later.
var selected_list_view;
var current_food_items;
var current_list_view;

function add_food_item(item_name, n_calories) {
    var new_item = new FoodItem({
        name: item_name,
        calories: n_calories
    });

    current_list_view.add_item(new_item);
}

function test_main() {

    current_food_items = new CurrentFoodItemsCollection;

    selected_list_view = new SelectedListOfFoodItems();

    current_list_view = new ListOfFoodItems();
    var n = new NutritonixHandler();

    $("#food-item-search-button").click(function() {
        var user_entered_item = $('#food_item_search_name').val();
        n.get_item_info_post(user_entered_item, 5, add_food_item);
    });
}
