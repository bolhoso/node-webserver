function route (handle, pathname) {
	console.log ("Routing a request for " + pathname);

	if (typeof handle[pathname] === 'function') {
		return handle[pathname]();
	} 

	console.log ("No request handler found for " + pathname);
	return null;
}

exports.routeRequest = route;
