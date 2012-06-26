var http = require("http");
var url = require ("url");

function start (port, route) {

	function onRequest (request, response) {
		var pathname = url.parse (request.url).pathname;
		console.log ("Request received for " + pathname);

		route (pathname);

		response.writeHead (200, {"Content-type": "text/plain"});
		response.write ("Hello world!");
		response.end();
	}

	http.createServer (onRequest).listen (port);
	console.log ("Starting server at port " +  port);

}

exports.start = start;
