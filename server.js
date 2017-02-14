var babel = require('babel-core/register');
var bodyParser = require('body-parser');
var express = require('express');
var handlebars = require('express-handlebars');
var getTournament = require('./main.js');

const app = express();
app.use(express.static('public'));
app.set('views', './src/views');
app.engine('.hbs', handlebars({extname: '.hbs'}));

app.set('view engine', '.hbs');
app.use(bodyParser.urlencoded({ extended: true })); 

app.post('/result', function(req, res) {
	const results = getTournament({
		type: req.body.type,
		numberOfEntrants: req.body.number
	});
	res.render('result', {results: results});
});

app.get('/result', function(req, res) {
	res.render('result', {results: getTournament()});
});

app.get('/', function (req, res) {
	res.render('index');
})


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
