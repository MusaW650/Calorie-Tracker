//const headingElement = document.getElementById("Calories");

// const calories = document.createElement("span");
// counterElement.textContent = Calories;

//headingElement.insertAdjacentElement("afterend", totalCalories);

function updateCaloriesValue(itemCalories) {
  const caloriesValueElement = document.getElementById("caloriesValue");
  const caloriesNumber = Number(caloriesValueElement);

  
  caloriesValueElement.textContent = itemCalories;
}

function increaseCalories(itemCalories, calories) {
//  var calories = 0;
  calories += itemCalories;
  console.log(calories);
  updateCaloriesValue(itemCalories);
}

increaseCalories();

//const caloriesElement = document.getElementById("Calories");
//caloriesValueElement.append(calories);
