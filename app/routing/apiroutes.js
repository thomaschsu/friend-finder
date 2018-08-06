// Requires friends js file
var friends = require("../data/friends");


module.exports = function(app) {
  // API GET Requests
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
      // Push the values into the array.
      friends.push(req.body);
      res.json(true);
  });
};
