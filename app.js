// The application is built ontop of the express framework
// Docs: http://expressjs.com/api.html
var express = require('express');
app = express();

// Use Jade Template engine
app.set('views', __dirname + '/app/views');
app.set('view engine', 'jade');

// Setup common middleware
app.use(express.logger());
app.use(express.compress());
app.use(express.methodOverride());
app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(express.static(__dirname + '/public'));
app.use(app.router);

// Setup some application level variables
app.set('appName', 'Picture Board');
app.set('emails', {
    support: 'support@conect.ac'
});

// Setup application routes
require('./routes');

// Start listening for incoming requests
app.listen(process.env.PORT || 5000);
