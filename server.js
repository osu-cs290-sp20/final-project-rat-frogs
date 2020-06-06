var express = require("express");
var expressHandlebars = require("express-handlebars");

var app = express();
var port = process.env.PORT || 3000;

app.engine("handlebars", expressHandlebars({defaultLayout: null}));//should change this eventually
app.set("view engine", "handlebars");

app.use(express.static("public"));

app.listen(port, function () {
	console.log("Server listening on port", port);
});