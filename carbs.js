
function updateCarbsValue(itemCarbs) {
    const carbsValueElement = document.getElementById("carbsValue");
   // const caloriesNumber = Number(caloriesValueElement);

   carbsValueElement.textContent = itemCarbs;
  }
  
  function increaseCarbs(itemCarbs, carbs) {
  //  var calories = 0;
    carbs += itemCarbs;
    console.log(carbs);
    updateCarbsValue(itemCarbs);
  }
  
  increaseCarbs();