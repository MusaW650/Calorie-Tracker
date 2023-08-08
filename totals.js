function updateTotal(totalCals) {
  const totalsCalorieValue = document.getElementById("totalCalsValue");
  //const total = Number(totalsCalorieValue);

  totalsCalorieValue.textContent = totalCals;
}

function increaseTotalCals(totalCals) {
  updateTotal(totalCals);
}
