
var express = require ('express');
var ejs = require('ejs');


var app = express();
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
	res.render('index.ejs');
})

port = process.argv[2] || 3000;
app.listen(port, function(){
	console.log('listening on port ' + port);
});
