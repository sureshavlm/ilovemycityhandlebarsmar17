var express = require('express'); //importing a lib
var exphbs = require('express-handlebars');
var routes = require('./routes/');

var app = express();

app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));

app.get('/', routes.home);
app.get('/:city', routes.city);

var port = process.env.PORT || 8080;

app.listen(port, function() {
	console.log("Server started on port %s", port);
});