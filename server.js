var express = require("express");
var expressHandlebars = require("express-handlebars");

var app = express();
var port = process.env.PORT || 3000;

app.engine("handlebars", expressHandlebars({defaultLayout: null}));//should change this eventually
app.set("view engine", "handlebars");

app.use(express.static(__dirname + "/public"));

app.get('/', function (req, res, next) {
    console.log("== Got a request")
    console.log("== Request Parameters:", req.params);
    //uses twitData.json to display information
    res.render('index.html');
});

app.listen(port, function () {
	console.log("Server listening on port", port);
});