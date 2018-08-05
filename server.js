// Required packages
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Tells node we are creating an express server
var app = express();

// Specifies port
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Points server to route files
require("./app/routing/apiroutes")(app);
require("./app/routing/htmlroutes")(app);

// Console logs port and starts server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});