

function updateCaloriesValue(itemCalories) {
  const caloriesValueElement = document.getElementById("caloriesValue");
 // const caloriesNumber = Number(caloriesValueElement);


  caloriesValueElement.textContent = itemCalories;
}

function increaseCalories(itemCalories) {

  updateCaloriesValue(itemCalories);
}


//const caloriesElement = document.getElementById("Calories");
//caloriesValueElement.append(calories);
