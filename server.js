
var express  = require('express');
var app      = express(); 						
	

app.configure(function() {
	app.use(express.static(__dirname)); 		// set the static files location /public/img will be /img for users
	app.use(express.logger('dev')); 						// log every request to the console
	app.use(express.bodyParser()); 							// pull information from html in POST
});

app.listen(8000);
console.log("App listening on port 8080");