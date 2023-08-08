
function updateProteinValue(itemProtein) {
    const proteinValueElement = document.getElementById("proteinValue");
   // const caloriesNumber = Number(caloriesValueElement);

   proteinValueElement.textContent = itemProtein;
  }
  
  function increaseProtein(itemProtein) {
  //  var calories = 0;
    //protein += itemProtein;
    //console.log(protein);
    updateProteinValue(itemProtein);
  }
  
