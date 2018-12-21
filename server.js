var express = require("express");
var path = require("path");

//part of creating the express server
var app = express();

//sets the port
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//points us to the routes for the app
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//starts the server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

