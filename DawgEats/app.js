const signOutButton = document.getElementById("signout");

signOutButton.onclick = () => {
  window.location.href = "signin.html";
}

const browseButton = document.getElementById("browse");

browseButton.onclick = () => {
  window.location.href = "./services/browse.html";
}

const preferencesButton = document.getElementById("preferences");

preferencesButton.onclick = () => {
  window.location.href = "preferences.html";
}