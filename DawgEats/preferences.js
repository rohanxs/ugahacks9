let vegetarian = document.getElementById("c1").checked;
let vegan = document.getElementById("c2").checked;
let noEggs = document.getElementById("c3").checked;
let noWheat = document.getElementById("c4").checked;
let noGluten = document.getElementById("c5").checked;
let protein = document.getElementById("c6").checked;
let noLactose = document.getElementById("c7").checked;
let loseWeight = document.getElementById("c8").checked;
let noCholestrol = document.getElementById("c9").checked;
let noCalories = document.getElementById("c10").checked;
let noSodium = document.getElementById("c11").checked;

const nosaveButton = document.getElementById("nosave");
nosaveButton.onclick = () => {
  window.location.href = "app.html";
}

const saveButton = document.getElementById("save");
saveButton.onclick = () => {
  window.location.href = "app.html";
}