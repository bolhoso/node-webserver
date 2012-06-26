function start() {
	console.log ("Request handler 'start' called");
	return "Hello start!";
}

function upload() {
	console.log ("Request handler 'upload' called");
	return "Hello upload!";
}

exports.start = start;
exports.upload = upload;
