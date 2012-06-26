var server = require ("./server");
var router = require ("./router");

server.start (8080, router.route2);
