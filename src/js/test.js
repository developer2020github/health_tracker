//test module. to be removed later.

function test_main() {
    var food_item1 = new FoodItem({
        name: 'First Food item',
        calories: 5
    });


    var food_item2 = new FoodItem({
        name: 'Second Food item',
        calories: 15
    });



    var food_item3 = new FoodItem({
        name: 'Third Food item',
        calories: 25
    });


     var current_food_items  = new CurrentFoodItemsCollection;
	 current_food_items.add(food_item1);
	 current_food_items.add(food_item2);
	 current_food_items.add(food_item3);

	 var current_list_view = new ListOfFoodItems(); 
     //console.log(ItemView);
     //var item_view7 = new FoodItemView();
     current_list_view.add_item(food_item1);
     current_list_view.add_item(food_item2);
     current_list_view.add_item(food_item3);
}
