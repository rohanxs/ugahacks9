const { auth } = require('express-openid-connect');

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'nfjrnefourewnfiuernfouerhfoiwerugoraieghi',
  baseURL: 'http://127.0.0.1:5500',
  clientID: 'uWM6Sg9AZHIPIBAMQciRkezixDdp66Qe',
  issuerBaseURL: 'https://dev-12vqsshcaagvhrxk.us.auth0.com'
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

