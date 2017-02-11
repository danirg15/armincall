//--------------------------------------------
//		App Modules
//--------------------------------------------
const http =			require('http')
const express = 		require('express')
const app 	= 			express()
const bodyParser = 		require('body-parser')
const session = 		require('express-session')
const env = 			require('dotenv').config()
const path = 			require('path')
const SocketIOEventEmitter = require('./events/SocketIOEventEmitter')
const logger = 			require('morgan')
const config = 			require('config')
const auth = 			require('./middleware/jwtAuth')
const moment_tz = 		require('moment-timezone')
const helmet = 			require('helmet')


//--------------------------------------------
//		Middlewares
//--------------------------------------------
app.use(helmet())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(session({ secret: 'secrets', resave: false, saveUninitialized: false }));


//--------------------------------------------
//		Configuration
//--------------------------------------------
const port = process.env.PORT || 3000

moment_tz.tz.setDefault(process.env.APP_TIME_ZONE || 'Europe/Madrid');

if(config.util.getEnv('NODE_ENV') !== 'test') {
    app.use(logger('dev'))
}


//Serve client app
app.use(express.static(path.join(__dirname, 'client/dist')));


//--------------------------------------------
//		DB connection
//--------------------------------------------
require('./database').connect(config.DB_URI)



//--------------------------------------------
//		Routing
//--------------------------------------------
app.use('/api', require('./routes/auth.routes'))
app.use('/api', auth, require('./routes/call.routes'))
app.use('/api', auth, require('./routes/ticket.routes'))
app.use('/api', auth, require('./routes/reminder.routes'))
app.use('/api', auth, require('./routes/user.routes'))
app.use('/api', auth, require('./routes/workshop.routes'))
app.use('/api', auth, require('./routes/demo.routes'))
app.use('/api', auth, require('./routes/category.routes'))
app.use('/api', auth, require('./routes/stats.routes'))
app.use('/api', auth, require('./routes/shared.routes'))



app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '/client/dist/index.html'))
})




//--------------------------------------------
//		Runnn!
//--------------------------------------------
const server = http.createServer(app)

SocketIOEventEmitter.init(server)

SocketIOEventEmitter.bind({
	'event': 'newCall', 
	'uri': '/events/calls/new'
})
SocketIOEventEmitter.bind({
	'event': 'incommingCall', 
	'uri': '/events/calls/incomming'
})


server.listen(port, function(err) {
	if (err) throw err
	console.log('Server running on port: ' + port)
})


// module.exports = app
