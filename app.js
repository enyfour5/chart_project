var express = require('express');
var app = express();
var http = require('http');
var path = require('path');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.get('/', (req, res) => {
	res.render('index')
});


var server = http.createServer(app);

var port = 8995;
server.listen(port);


module.exports = app;
