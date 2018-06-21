const dotenv = require('dotenv').config();
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const crypto = require('crypto');
const cookie = require('cookie');
const nonce = require('nonce')();
const querystring = require('querystring');
const request = require('request-promise');
const reactShopify = require('react-shopify')


const apiKey = process.env.SHOPIFY_API_KEY;
const apiSecret = process.env.SHOPIFY_API_SECRET;
const scopes = 'read_products';
const forwardingAddress = `{http://af142395.ngrok.io}`

const app = express();

var axios = require("axios");
var mongoose = require("mongoose");



const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// MongoDb Connections
var db = require("./models");

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/Meatstick";
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);
// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.get('/', (req, res) => {
  res.send("hello world")
})

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
