//const headingElement = document.getElementById("Calories");

let calories = 0;

// const calories = document.createElement("span");
// counterElement.textContent = Calories;

//headingElement.insertAdjacentElement("afterend", totalCalories);

function updateCaloriesValue() {
  const caloriesValueElement = document.getElementById("caloriesValue");
  caloriesValueElement.textContent = calories;
}

updateCaloriesValue();

function increaseCalories() {
  calories += caloriesNumber;
  updateCaloriesValue();
}

increaseCalories();

//const caloriesElement = document.getElementById("Calories");
//caloriesValueElement.append(calories);
