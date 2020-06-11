var express = require("express");
var expressHandlebars = require("express-handlebars");

var app = express();
var port = process.env.PORT || 3000;
var data = require('./db/frogData.json');

app.engine("handlebars", expressHandlebars({defaultLayout: "pageTemplate"}));//should change this eventually
app.set("view engine", "handlebars");

app.use(express.static(__dirname + "/public"));

app.get('/', function (req, res, next) {
	res.status(200).render("homePage", {pageTitle: "Homepage", photos: [{
		url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/The_Green_and_Golden_Bell_Frog.jpg/1280px-The_Green_and_Golden_Bell_Frog.jpg",
		frogFacts: "Here is a frog to Deep Fry"
	}]});
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

app.get("/frogs", function(req, res, next){
	res.status(200).render("frogPage");
})


app.get("*", function (req, res, next) {
	res.status(404).render("404", { pageTitle: "404 - page not found" });
})

app.listen(port, function () {
	console.log("Server listening on port", port);
});

/*

50 points – Your app satisfies these requirements:

The app uses HTML and CSS to implement a well-designed client interface.
The app uses client-side JS to enable relevant user interactions.
[x]The app is served using a Node.js-based (or other approved) serving stack.
[x]The app dynamically generates pages based on data stored permanently on the back end.
[x]The app’s client interface communicates with the app’s server to create, read, update, and/or delete content in the back end data store.
25 points – Your app has a high-quality design and implementation.
For example, your app is free of bugs and has an effective user interface.
25 points – Your app is creative and original.

*/