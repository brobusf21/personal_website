/* Load module dependencies */
var express = require('express');


module.exports = function() {
	var app = express();

	/* Set the application view engine and 'views' folder */
	app.set('views', './app/views');
	app.set('view engine', 'ejs');

	/* Load the routing files */
	require('../app/routes/index.server.routes.js')(app);
	// require('../app/routes/users.server.routes.js')(app);
	
	/* Configure static file serving */
	app.use(express.static('./public'));

	return app;
};
