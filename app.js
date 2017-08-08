var express = require('express')
var app = express()

//Setup View engine ejs:
app.set('view engine', 'ejs');

//Set up static files
app.use(express.static('public'));


//Setup body parser
/*var bodyParser = require('body-paser');
app.use(bodyParser());*/

//Post endpoint for login
app.post('/login', function(req, res){
	console.log(req.body);
})


// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.render('index')
})

app.get('/dashboard', function(req, res){
	res.send('dashboard');
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})