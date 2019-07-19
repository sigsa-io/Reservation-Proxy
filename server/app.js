const express = require('express');
const axios = require('axios');
const cors = require('cors');
const path = require('path');
const httpProxy = require('http-proxy');

const morgan = require('morgan');

const app = express();
app.use(cors());
const apiProxy = httpProxy.createProxyServer();

const menus = 'http://ec2-18-224-190-236.us-east-2.compute.amazonaws.com:8080';
const reservations = 'http://ec2-52-15-204-30.us-east-2.compute.amazonaws.com:3003';
const reviews = 'http://ec2-54-234-229-23.compute-1.amazonaws.com:3004';

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
