// We're going to use Express Framework
// Use Port 3000
var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;

// Setting default port number
// Setting views directory (even though we're only gonna use index.jade)
// Setting jade as default templating engine
app.set('port', port);
app.set('views', __dirname + '/');
app.set('view engine', 'jade');

// Setting up middleware for our public img/js/css files
app.use(express.static(__dirname + '/public'));

// Rendering out our index page
app.get('/', function(req, res) {
    res.render('index');
});

// Listens to server at given port
app.listen(port);
console.log("Simple static server listening at http://localhost:" + port);