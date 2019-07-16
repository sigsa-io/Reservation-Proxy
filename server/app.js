const express = require('express');
const path = require('path');
const httpProxy = require('http-proxy');
const morgan = require('morgan');

const app = express();
const apiProxy = httpProxy.createProxyServer();

const menus = 'http://localhost:3002';
const reservations = 'http://localhost:3003';
const reviews = 'http://localhost:3004';

app.set('port', 3000);

app.use(morgan('dev'));
app.use('/:restaurantId', express.static(path.resolve('dist')));

app.all('/menuData/:restaurant_id', (req, res) => {
  apiProxy.web(req, res, {target: menus});
});

app.all('/bookingCount/:restaurantId', (req, res) => {
  apiProxy.web(req, res, {target: reservations});
});

app.all('/restaurantName/:restaurantId', (req, res) => {
  apiProxy.web(req, res, {target: reservations});
});

app.all('/seatingSize/:restaurantId', (req, res) => {
  apiProxy.web(req, res, {target: reservations});
});

app.all('/targettimeslots/:restaurantId', (req, res) => {
  apiProxy.web(req, res, {target: reservations});
});

app.all('/reservations/:restaurantId', (req, res) => {
  apiProxy.web(req, res, {target: reservations});
});

app.all('/restaurants/:restaurant_id/reviews', (req, res) => {
  apiProxy.web(req, res, {target: reviews});
});

app.listen(app.get('port'));
console.log('Now listening to ', app.get('port'));
