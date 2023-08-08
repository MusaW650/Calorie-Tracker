function updateCarbsValue(itemCarbs) {
  const carbsValueElement = document.getElementById("carbsValue");
  // const caloriesNumber = Number(caloriesValueElement);

  carbsValueElement.textContent = itemCarbs;
}

function increaseCarbs(itemCarbs) {
  updateCarbsValue(itemCarbs);
}
