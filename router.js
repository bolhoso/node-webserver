function route (handle, pathname) {
	console.log ("Routing a request for " + pathname);

	if (typeof handle[pathname] === 'function') {
		handle[pathname]();
	} else {
		console.log ("No request handler found for " + pathname);
	}
}

exports.routeRequest = route;
