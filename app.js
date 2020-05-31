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

//The Poems
app.get('/poems', function(req, res){
	console.log(res.sendFile)
  res.sendFile('/HTML/thePoems.html', {root: './public'})
});

//The Poet
app.get('/poet', function(req, res){
	console.log(res.sendFile)
  res.sendFile('/HTML/thePoet.html', {root: './public'})
});

//The Manuscript
app.get('/manuscript', function(req, res){
	console.log(res.sendFile)
  res.sendFile('/HTML/theManuscript.html', {root: './public'})
});

//About Page
app.get('/about', function(req, res){
	console.log(res.sendFile)
  res.sendFile('/HTML/about.html', {root: './public'})
});

//Poems
app.get('/On-the-Termination-of-the-Sabbath', function(req, res){
	console.log(res.sendFile)
  res.sendFile('/HTML/poems/OnTheTerminationOfTheSabbath.html', {root: './public'})
});

app.get('/Put-a-Curse-On-My-Enemy', function(req, res){
	console.log(res.sendFile)
  res.sendFile('/HTML/poems/PutACurseOnMyEnemy.html', {root: './public'})
});

app.get('/Who-Is-Like-You', function(req, res){
	console.log(res.sendFile)
  res.sendFile('/HTML/poems/WhoIsLikeYou.html', {root: './public'})
});

app.get('/Sixteen-Short-Poems', function(req, res){
	console.log(res.sendFile)
  res.sendFile('/HTML/poems/16ShortPoems.html', {root: './public'})
});

var port = 80
app.listen(port, function(){
  console.log('Server running on port ' + port);
})