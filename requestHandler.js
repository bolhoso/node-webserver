var exec = require ("child_process").exec;

function start (request, response) {
	exec ("find /", 
		{ timeout: 10000, maxBuffer: 20000*1024 },
		function (error, stdout, stderr) {
			response.writeHead (200, "text/plain");
			response.write (stdout)
			response.end();
	});
}

function upload(request, response) {
	console.log ("Request handler 'start' called");

	response.writeHead (200, {"Content-type": "text/plain"});
	response.write ("Upload called!");
	response.end();
}

exports.start = start;
exports.upload = upload;
