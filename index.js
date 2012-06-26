var server = require ("./server");
var router = require ("./router");
var requestHandler = require ("./requestHandler");

// Maps an URL into a request handler's function
var handle = {};
handle ["/"] = requestHandler.start;
handle ["/start"] = requestHandler.start;
handle ["/upload"] = requestHandler.upload;

server.start (8080, router.routeRequest, handle);
