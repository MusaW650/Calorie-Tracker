var totalCalories;
var caloriesNumber;
var userEntries = [];
let count = 0;
var itemCalories = 0;

function getFoodInput(food) {
  var foodInput = document.getElementById("foodInput");
  const submitButton = document.getElementById("submitButton");

  let foodValue = "";

  submitButton.addEventListener("click", function (event) {
    event.preventDefault();

    // Update the foodValue variable with the input's value
    foodValue = foodInput.value;

    // Now you can use the foodValue variable as needed
    console.log("Food value:", foodValue);
    getCalories(foodValue);
  });
  return foodValue;
}

function getCalories(foodInput) {
  var query = foodInput;

  $.ajax({
    method: "GET",
    url: "https://api.calorieninjas.com/v1/nutrition?query=" + query,
    headers: { "X-Api-Key": "DJiuqGRf0DFPdgizxWpwMg==HVtodR5ale4szXrU" },
    contentType: "application/json",
    success: function (nutrition) {
      console.log(nutrition);
      const itemsArray = nutrition.items;

      itemCalories = itemsArray[0].calories;
      itemProtein = itemsArray[0].protein_g;
      itemCarbs = itemsArray[0].carbohydrates_total_g;

      console.log(itemsArray[0].calories);
      console.log(itemsArray[0].protein_g);
      console.log(itemsArray[0].carbohydrates_total_g);

      increaseCalories(itemCalories, 0);
      increaseProtein(itemProtein, 0);
      increaseCarbs(itemCarbs, 0);

      //const data = JSON.stringify(nutrition);
      // const array = data.split(",");
      // for(var i = 0; i < count; i++) {
      // totalCalories += itemsArray[2];

      // }
      //const colonIndex = totalCalories.indexOf(':');
      //  const valueString = totalCalories.substring(colonIndex + 1);

      // caloriesNumber = parseFloat(valueString);
      //  console.log(caloriesNumber);
    },
    error: function ajaxError(jqXHR) {
      console.error("Error: ", jqXHR.responseText);
    },
  });
}

getFoodInput();

// console.log(totalCalories)
//console.log(document.getElementById("Calories"))
