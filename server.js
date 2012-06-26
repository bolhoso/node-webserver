var http = require("http");
var url = require ("url");

function start (port, route, handle) {

	function onRequest (request, response) {
		var pathname = url.parse (request.url).pathname;
		console.log ("Request received for " + pathname);


		// Route and write the response data
		var content = route (handle, pathname);

		if (content != null) {
			response.writeHead (200, {"Content-type": "text/plain"});
			response.write (content);
			response.end();
		} else {
			response.writeHead (404, {"Content-type": "text/plain"});
			response.write ("not found"); // TODO: ugly...
			response.end();
		}
	}

	http.createServer (onRequest).listen (port);
	console.log ("Starting server at port " +  port);

}

exports.start = start;
