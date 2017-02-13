var babel = require('babel-core/register');

var express = require('express');
var handlebars = require('express-handlebars');
var getTournement = require('./main.js');

const app = express();
app.use(express.static('public'));
app.set('views', './src/views');
app.engine('.hbs', handlebars({extname: '.hbs'}));

app.set('view engine', '.hbs');

app.get('/result', function(req, res) {
});

app.get('/', function (req, res) {
	res.render('index', {results: getTournement()});
})


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
