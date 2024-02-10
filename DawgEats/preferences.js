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

// fetch userdta from Auth0 login
fetch('./Auth0Login/loadedUser.json').then(response => {
  return response.json();
}).then(data => {
  if (data["noLactose"]) noLactose.checked = true;
  if (data["vegan"]) vegan.checked = true;
  if (data["noCalories"]) noCalories.checked = true;
  if (data["noEggs"]) noEggs.checked = true;
  if (data["noGluten"]) noGluten.checked = true;
  if (data["protein"]) protein.checked = true;
  if (data["noCholestrol"]) noCholestrol.checked = true;
  if (data["vegetarian"]) vegetarian.checked = true;
  if (data["loseWeight"]) loseWeight.checked = true;
  if (data["noSodium"]) noSodium.checked = true;
  if (data["noWheat"]) noWheat.checked = true;
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
  window.location.href = "app.html";
}