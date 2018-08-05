// Required packages
var express = require("express");
var bodyParser = require("body-parser");
var app = express();

// Specifiying port
var PORT = process.env.PORT || 8080;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./app/routing/apiroutes")(app);
require("./app/routing/htmlroutes")(app);

// Console logs port
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
