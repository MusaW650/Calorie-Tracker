var caloriesNumber;
var userEntries = [];
let count = 0;
var itemCalories;
var itemProtein;
var itemCarbs;
var itemsArray;

var calorieTotal = 0;
var carbsTotal = 0;
var proteinTotal = 0;

function getFoodInput(food) {
  var foodInput = document.getElementById("foodInput");
  const submitButton = document.getElementById("submitButton");

  let foodValue = "";

  submitButton.addEventListener("click", function (event) {
    event.preventDefault();

    foodValue = foodInput.value;

    getCalories(foodValue);
  });
}

function getCalories(foodInput) {
  var query = foodInput;

  $.ajax({
    method: "GET",
    url: "https://api.calorieninjas.com/v1/nutrition?query=" + query,
    headers: { "X-Api-Key": "DJiuqGRf0DFPdgizxWpwMg==HVtodR5ale4szXrU" },
    contentType: "application/json",
    success: function (nutrition) {
      count++;
      //    console.log(nutrition);
      itemsArray = nutrition.items; // creates new array for each entry

      itemCalories = itemsArray[0].calories;
      itemCarbs = itemsArray[0].carbohydrates_total_g;
      itemProtein = itemsArray[0].protein_g;

      increaseCalories(itemCalories);
      increaseCarbs(itemCarbs);
      increaseProtein(itemProtein);

      calorieTotal += itemCalories;
      carbsTotal += itemCarbs;
      proteinTotal += itemProtein;

      increaseTotalCals(calorieTotal.toFixed(2));
      increaseTotalCarbs(carbsTotal.toFixed(2));
      increaseTotalProtein(proteinTotal.toFixed(2));

      const deleteButton = document.getElementById("deleteButton");

      deleteButton.addEventListener("click", function (event) {
        deleteTotals();
        deleteCals();
        deleteCarbs();
        deleteProtein();
      });

      //      console.log(calorieTotal);

      //const newH2 = document.createElement('h2');

      // Set the content of the h2 element
      //newH2.textContent = 'New H2 Element';
    },
    error: function ajaxError(jqXHR) {
      console.error("Error: ", jqXHR.responseText);
    },
  });
}

getFoodInput();

// function deleteEntries() {
//   const deleteButton = document.getElementById("deleteButton");

// deleteButton.addEventListener("click", function (event) {

// });

// }
