function login(email, password) {
  const request = require('request');

  request.get({
    url: 'https://localhost/profile',
    auth: {
      username: email,
      password: password
    }
    // Auth0 API with simple request to hosting URL
  }, function(err, response, body) {
    if (err) return unrecognizedCredentials();
    if (response.statusCode === 401) return unrecognizedCredentials();
    const user = JSON.parse(body);

    userAuthenticated();
  });
};

const signinButton = document.getElementById("signin");
const registerButton = document.getElementById("register");
const usernameField = document.getElementById("username");
const passwordField = document.getElementById("password");

signinButton.onclick = () => {
  let username = usernameField.value.toString();

  // oAuth2 login.
  login(
    username, 
    passwordField.value.toString()
  )
}

function unrecognizedCredentials() {
  window.location.href = "signin.html";
  return false;
}

function userAuthenticated() {
  window.location.href = "app.html";
  return true;
}

signinButton.onclick = () => {
  let username = usernameField.value.toString();
  let password = passwordField.value.toString();
  // oAuth2 login.

  if (localStorage.getItem(username) != password) {
    unrecognizedCredentials();
  } else {
    userAuthenticated();
  } 
}

registerButton.onclick = () => {
  let username = usernameField.value.toString();
  let password = passwordField.value.toString();

  if (localStorage.getItem(username) == null) {
    localStorage.setItem(username, password);
    window.location.href = "app.html";
  } else {
    window.location.href = "signin.html";
  }
}
