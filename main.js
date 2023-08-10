var caloriesNumber;
var userEntries = [];
let calorieWindowCount = 0;
let carbsWindowCount = 0;
let proteinWindowCount = 0;
var itemCalories;
var itemProtein;
var itemCarbs;
var itemsArray;

var calorieTotal = 0;
var carbsTotal = 0;
var proteinTotal = 0;
let userCalsLimit = null;
let userCarbsLimit;
let userProteinGoal;
var userCalsLimitSet = false;
var userCarbsLimitSet = false;
var userProteinGoalSet = false;

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

      if (
        calorieTotal > userCalsLimit &&
        userCalsLimitSet == true &&
        userCalsLimit != null &&
        calorieWindowCount < 1
      ) {
        calorieWindowCount++;
        alert("you have exceeded your calorie limit!");
      }

      if (
        carbsTotal > userCarbsLimit &&
        userCarbsLimitSet == true &&
        userCarbsLimit !== null &&
        carbsWindowCount < 1
      ) {
        carbsWindowCount++;
        alert("you have exceeded your carbs limit!");
      }

      if (
        proteinTotal >= userProteinGoal &&
        userProteinGoalSet == true &&
        userProteinGoal !== null &&
        proteinWindowCount < 1
      ) {
        proteinWindowCount++;
        alert("you have met your protein goal!");
      }
    },
    error: function ajaxError(jqXHR) {
      console.error("Error: ", jqXHR.responseText);
    },
  });
}

getFoodInput();
deleteCheck();
setCaloriesLimit();
setCarbsLimit();
setProteinGoal();

function deleteCheck() {
  const deleteAll = document.getElementById("deleteButton");

  deleteAll.addEventListener("click", function (event) {
    deleteTotals();
    deleteCals();
    deleteCarbs();
    deleteProtein();
  });
}

function setCaloriesLimit() {
  calorieLimit = document.getElementById("caloriesButton");

  calorieLimit.addEventListener("click", function (event) {
    userCalsLimitSet = true;

    const userInput = window.prompt("Set calorie limit", "");
    if (userInput === null) {
      userCalsLimit = null;
    } else {
      userCalsLimit = Number(userInput);
    }
  });
}

function setCarbsLimit() {
  carbsLimit = document.getElementById("carbsButton");

  carbsLimit.addEventListener("click", function (event) {
    userCarbsLimitSet = true;

    const userInput = window.prompt("Set carbs limit", "");
    if (userInput === null) {
      userCarbsLimit = null;
    } else {
      userCarbsLimit = Number(userInput);
    }

    console.log(userCarbsLimit);
  });
}

function setProteinGoal() {
  proteinGoal = document.getElementById("proteinButton");

  proteinGoal.addEventListener("click", function (event) {
    userProteinGoalSet = true;

    const userInput = window.prompt("Set protein goal", "");
    if (userInput === null) {
      userProteinGoalSet = null;
    } else {
      userProteinGoal = Number(userInput);
    }
    console.log(userProteinGoal);
  });
}
