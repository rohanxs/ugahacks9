let vegetarian = document.getElementById("c1");
let vegan = document.getElementById("c2");
let noEggs = document.getElementById("c3");
let noWheat = document.getElementById("c4");
let noGluten = document.getElementById("c5");
let protein = document.getElementById("c6");
let noLactose = document.getElementById("c7");
let loseWeight = document.getElementById("c8");
let noCholestrol = document.getElementById("c9");
let noCalories = document.getElementById("c10");
let noSodium = document.getElementById("c11");

function setAllFalse() {
  localStorage.setItem("noLactose", "false");
  localStorage.setItem("vegetarian", "false");
  localStorage.setItem("vegan", "false");
  localStorage.setItem("noEggs", "false");
  localStorage.setItem("noWheat", "false");
  localStorage.setItem("noGluten", "false");
  localStorage.setItem("protein", "false");
  localStorage.setItem("loseWeight", "false");
  localStorage.setItem("noCholestrol", "false");
  localStorage.setItem("noCalories", "false");
  localStorage.setItem("noSodium", "false");
}

if (localStorage.getItem("noLactose") == null) {
  setAllFalse();
}

if (typeof(Storage) !== "undefined") {
  console.log("hello");
} else {
  console.log("hi!");
}

// fetch userdta from Auth0 login
fetch('./Auth0Login/loadedUser.json').then(response => {
  return response.json();
}).then(data => {
  if (localStorage.getItem('noLactose')=='true') noLactose.checked = true;
  if (localStorage.getItem('vegan')=='true') vegan.checked = true;
  if (localStorage.getItem('noCalories')=='true') noCalories.checked = true;
  if (localStorage.getItem('noEggs')=='true') noEggs.checked = true;
  if (localStorage.getItem('noGluten')=='true') noGluten.checked = true;
  if (localStorage.getItem('protein')=='true') protein.checked = true;
  if (localStorage.getItem('noCholestrol')=='true') noCholestrol.checked = true;
  if (localStorage.getItem('vegetarian')=='true') vegetarian.checked = true;
  if (localStorage.getItem('loseWeight')=='true') loseWeight.checked = true;
  if (localStorage.getItem('noSodium')=='true') noSodium.checked = true;
  if (localStorage.getItem('noWheat')=='true') noWheat.checked = true;
}).catch(err => {
  return console.log(err);
});

const signoutButton = document.getElementById("signout");
signoutButton.onclick = () => {
  window.location.href = "signin.html"
}

const nosaveButton = document.getElementById("nosave");
nosaveButton.onclick = () => {
  window.location.href = "app.html";
}

const saveButton = document.getElementById("save");
saveButton.onclick = () => {
  setAllFalse();
  if (noLactose.checked) localStorage.setItem("noLactose", true);
  if (vegan.checked) localStorage.setItem("vegan", true);
  if (noCalories.checked) localStorage.setItem("noCalories", true);
  if (noEggs.checked) localStorage.setItem("noEggs", true);
  if (noGluten.checked) localStorage.setItem("noGluten", true);
  if (protein.checked) localStorage.setItem("protein", true);
  if (noCholestrol.checked) localStorage.setItem("noCholestrol", true);
  if (vegetarian.checked) localStorage.setItem("vegetarian", true);
  if (loseWeight.checked) localStorage.setItem("loseWeight", true);
  if (noSodium.checked) localStorage.setItem("noSodium", true);
  if (noWheat.checked) localStorage.setItem("noWheat", true);

  window.location.href = "app.html";
}