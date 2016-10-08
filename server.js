
//////////////////////////////////////
////////	MODULES
/////////////////////////////////////
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var flash = require('connect-flash');
var ejs = require('ejs');
var async = require('async');
var moment = require('moment');
var env = require('dotenv').config();
var jwt = require('jsonwebtoken');
var auth = require('./middleware/auth');

var path = require('path')

// DEV MODULES
var logger = require('morgan');



//mocha https://www.codementor.io/nodejs/tutorial/unit-testing-nodejs-tdd-mocha-sinon
//https://medium.com/defmethod-works/building-an-express-node-js-app-with-angular-2-and-the-twitter-api-4eebd06fecff#.uceqazhg7
//https://getmdl.io/templates/index.html

require('./events/CallEventEmitter').init('/events/calls')


//////////////////////////////////////
////////	MIDDLEWARES 	
/////////////////////////////////////
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cookieParser());
app.use(session({ secret: 'secrets', resave: false, saveUninitialized: false }));
//app.use(flash());

//Dev logger
app.use(logger('dev'));

//static files
app.use(express.static(path.join(__dirname, 'client')));
// app.get('*', function(req, res){
// 	res.sendfile(__dirname + '/client/index.html');
// })




//////////////////////////////////////
////////	Template Engine
/////////////////////////////////////
// app.set('views', __dirname + '/views');
// app.set('view engine', 'ejs');

//////////////////////////////////////
////////	DB connection 	
/////////////////////////////////////
require('./database').connect()


//////////////////////////////////////
////////	Routing
/////////////////////////////////////
app.use('/api', require('./routes/call.routes'))
app.use('/api', require('./routes/ticket.routes'))
app.use('/api', require('./routes/reminder.routes'))
app.use('/api', require('./routes/user.routes'))
app.use('/api', require('./routes/workshop.routes'))
app.use('/api', require('./routes/demo.routes'))
app.use('/api', require('./routes/chart.routes'))

app.use('/api', require('./routes/shared.routes'))



//////////////////////////////////////
////////	Runnn!
/////////////////////////////////////
app.listen(process.env.APP_PORT || 3000, function(err) {
	if (err) throw err;
	console.log('Server running...');
});



