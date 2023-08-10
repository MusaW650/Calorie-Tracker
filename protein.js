
function updateProteinValue(itemProtein) {
    const proteinValueElement = document.getElementById("proteinValue");
   // const caloriesNumber = Number(caloriesValueElement);

   proteinValueElement.textContent = itemProtein;
  }
  
  function increaseProtein(itemProtein) {
    //protein += itemProtein;
    //console.log(protein);
    updateProteinValue(itemProtein);
  } //delete function?


  function deleteProtein() {
  const proteinValueElement = document.getElementById("proteinValue");
   // const caloriesNumber = Number(caloriesValueElement);

   proteinValueElement.textContent = 0;

}