function updateTotalCals(totalCals) {
  const totalsCalorieValue = document.getElementById("totalCalsValue");
  //const total = Number(totalsCalorieValue);

  totalsCalorieValue.textContent = totalCals;
}

function increaseTotalCals(totalCals) {
  updateTotalCals(totalCals);


}


function updateTotalCarbs(totalCarbs) {
  const totalsCarbsValue = document.getElementById("totalCarbsValue");
  totalsCarbsValue.textContent = totalCarbs;
}

function increaseTotalCarbs(totalCarbs) {
  updateTotalCarbs(totalCarbs);


}




function updateTotalProtein(totalProtein) {
  const totalsProteinValue = document.getElementById("totalProteinValue");
  //const total = Number(totalsCalorieValue);

  totalsProteinValue.textContent = totalProtein;
}

function increaseTotalProtein(totalProtein) {
  updateTotalProtein(totalProtein);
}


function deleteTotals() {
  const totalsCalorieValue = document.getElementById("totalCalsValue");
  //const total = Number(totalsCalorieValue);

  totalsCalorieValue.textContent = 0;

  const totalsCarbsValue = document.getElementById("totalCarbsValue");
  totalsCarbsValue.textContent = 0;

  const totalsProteinValue = document.getElementById("totalProteinValue");
  //const total = Number(totalsCalorieValue);

  totalsProteinValue.textContent = 0;
}