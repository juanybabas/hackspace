var express = require('express')
var swig = require('swig');
var app = express()

app.use(express.static('public'))

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/app/views');
app.get('/', function(req, res){
    res.render('index');
});
app.get('/index2', function(req, res){
    res.render('index2')
})

var port = process.env.PORT || 2000
var server = app.listen(port, function(){
    console.log('Server', process.pid, 'Listening on ', port)
})
