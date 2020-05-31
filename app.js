var express = require('express')
var bodyParser = require('body-parser')

// Create Express App Object \\
var app = express();

// Application Configuration \\
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Routes \\

// Home Page
app.get('/', function(req, res){
	console.log(res.sendFile)
  res.sendFile('/HTML/meirMain.html', {root: './public'})
});

app.get('/poems', function(req, res){
	console.log(res.sendFile)
  res.sendFile('/HTML/thePoems.html', {root: './public'})
});

app.get('/poet', function(req, res){
	console.log(res.sendFile)
  res.sendFile('/HTML/thePoet.html', {root: './public'})
});

app.get('/manuscript', function(req, res){
	console.log(res.sendFile)
  res.sendFile('/HTML/theManuscript.html', {root: './public'})
});

app.get('/about', function(req, res){
	console.log(res.sendFile)
  res.sendFile('/HTML/about.html', {root: './public'})
});

var port = 80
app.listen(port, function(){
  console.log('Server running on port ' + port);
})