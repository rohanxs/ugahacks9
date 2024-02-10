function unrecognizedCredentials() {
  window.location.href = "failedsignin.html";
  console.log("hello");
  return false;
}

function userAuthenticated() {
  window.location.href = "app.html";
  return true;
}

const signinButton = document.getElementById("signin");
const usernameField = document.getElementById("username");
const passwordField = document.getElementById("password");

signinButton.onclick = () => {
  let username = usernameField.value.toString();
  let password = passwordField.value.toString();
  // oAuth2 login.
  
  userAuthenticated();
}

/*
function login(email, password) {
  const request = require('request');

  request.get({
    url: 'https://localhost/profile',
    auth: {
      username: email,
      password: password
    }
    //for more options check:
    //https://github.com/mikeal/request#requestoptions-callback
  }, function(err, response, body) {
    if (err) return unrecognizedCredentials();
    if (response.statusCode === 401) return unrecognizedCredentials();
    const user = JSON.parse(body);

    userAuthenticated();
  });
};

// get details from input fields
const signinButton = document.getElementById("signin");
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
*/