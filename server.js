var express = require("express");
var expressHandlebars = require("express-handlebars");

var app = express();
var port = process.env.PORT || 3000;

app.engine("handlebars", expressHandlebars({defaultLayout: "pageTemplate"}));//should change this eventually
app.set("view engine", "handlebars");

app.use(express.static(__dirname + "/public"));

app.get('/', function (req, res, next) {
	res.status(200).render("homePage", {pageTitle: "Homepage"});
});

app.get("*", function (req, res, next){
	res.status(404).render("404", {pageTitle: "404 - page not found"});
})

app.listen(port, function () {
	console.log("Server listening on port", port);
});