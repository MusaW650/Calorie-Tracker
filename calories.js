

function updateCaloriesValue(itemCalories) {
  const caloriesValueElement = document.getElementById("caloriesValue");
 // const caloriesNumber = Number(caloriesValueElement);


  caloriesValueElement.textContent = itemCalories;
}

function increaseCalories(itemCalories) {

  updateCaloriesValue(itemCalories);
}

function deleteCals() {
  const caloriesValueElement = document.getElementById("caloriesValue");

  caloriesValueElement.textContent = 0;

}


//const caloriesElement = document.getElementById("Calories");
//caloriesValueElement.append(calories);
