const express = require('express');
const path = require('path');
const app = express();
const httpProxy = require('http-proxy');
const apiProxy = httpProxy.createProxyServer();
const menus = 'http://localhost:3002',
    reservations = 'http://localhost:3003',
    reviews = 'http://localhost:3004';

app.use('/:restaurantId', express.static(path.resolve('dist')));
console.log(path.resolve('dist'))

app.all("/menuData/:restaurant_id", function(req, res) {
  console.log('redirecting to Menu');
  apiProxy.web(req, res, {target: menus});
});

app.all("/bookingCount/:restaurantId", function(req, res) {
  console.log('redirecting to Reservations');
  apiProxy.web(req, res, {target: reservations});
});

app.all("/restaurantName/:restaurantId", function(req, res) {
  console.log('redirecting to Reservations');
  apiProxy.web(req, res, {target: reservations});
});

app.all("/seatingSize/:restaurantId", function(req, res) {
  console.log('redirecting to Reservations');
  apiProxy.web(req, res, {target: reservations});
});

app.all("/targettimeslots/:restaurantId", function(req, res) {
  console.log('redirecting to Reservations');
  apiProxy.web(req, res, {target: reservations});
});

app.all("/reservations/:restaurantId", function(req, res) {
  console.log('redirecting to Reservations');
  apiProxy.web(req, res, {target: reservations});
});

app.all("/restaurants/:restaurant_id/reviews", function(req, res) {
  console.log('redirecting to Reviews');
  apiProxy.web(req, res, {target: reviews});
});

app.listen(3000);
console.log('listing to port 3000');