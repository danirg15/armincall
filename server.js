//--------------------------------------------
//		App Modules
//--------------------------------------------
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const env = require('dotenv').config();
const jwt = require('jsonwebtoken');
const auth = require('./middleware/auth');
const path = require('path')
const EventEmitter = require('./events/EventEmitter')
const logger = require('morgan');
const config = require('config');


//--------------------------------------------
//		Middlewares
//--------------------------------------------
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
//app.use(cookieParser());
app.use(session({ secret: 'secrets', resave: false, saveUninitialized: false }));


if(config.util.getEnv('NODE_ENV') !== 'test') {
    app.use(logger('dev'))
}

//--------------------------------------------
//		DB connection
//--------------------------------------------
require('./database').connect(config.DB_URI)




//Serve client app
app.use(express.static(path.join(__dirname, 'client')));


//--------------------------------------------
//		Routing
//--------------------------------------------
app.use('/api', require('./routes/call.routes'))
app.use('/api', require('./routes/ticket.routes'))
app.use('/api', require('./routes/reminder.routes'))
app.use('/api', require('./routes/user.routes'))
app.use('/api', require('./routes/workshop.routes'))
app.use('/api', require('./routes/demo.routes'))
app.use('/api', require('./routes/chart.routes'))
app.use('/api', require('./routes/shared.routes'))


EventEmitter.bind({
	'event': 'newCall', 
	'uri': '/events/calls/new'
})
EventEmitter.bind({
	'event': 'incommingCall', 
	'uri': '/events/calls/incomming'
})

EventEmitter.listen()



//--------------------------------------------
//		Runnn!
//--------------------------------------------
app.listen(process.env.APP_PORT || 3000, function(err) {
	if (err) throw err;
	console.log('Server running...');
});


module.exports = app


