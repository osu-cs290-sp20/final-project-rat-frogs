var express = require("express");
var expressHandlebars = require("express-handlebars");

var app = express();
var port = process.env.PORT || 3000;
var data = require('./db/frogData.json');

app.engine("handlebars", expressHandlebars({defaultLayout: "pageTemplate"}));//should change this eventually
app.set("view engine", "handlebars");

app.use(express.static(__dirname + "/public"));

app.get('/', function (req, res, next) {
	var test = {
		url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/The_Green_and_Golden_Bell_Frog.jpg/1280px-The_Green_and_Golden_Bell_Frog.jpg",
		frogFacts: "Here are some frogs to Deep Fry"
	};
	res.status(200).render("homePage", {pageTitle: "Homepage", photos: [test, test, test]});
});

app.get('/frog-facts', function (req, res, next) {
	if (data) {
		var inputs = {
			frog: data,
			pageTitle: "Frog Facts"
		}
		res.status(200).render("frogFactsPage", inputs);
	}
	else {
		next();
    }
});


app.get("*", function (req, res, next) {
	res.status(404).render("404", { pageTitle: "404 - page not found" });
})

app.listen(port, function () {
	console.log("Server listening on port", port);
});