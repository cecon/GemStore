var express = require('express');
var app = express();

app.configure(function() {
	app.use(express.static(__dirname));
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
});

app.listen(8000);
console.log("App listening on port 8000");