
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path"); 
var app = express();

var PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use('/static', express.static(path.join(__dirname, 'app/public')))







// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

require("./app/routing/api-routes.js")(app);
require("./app/routing/html-routes.js")(app);








// ==============================================================================
// LISTENER
// The below code effectively "starts" our server
// ==============================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});