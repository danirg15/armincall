//--------------------------------------------
//		App Modules
//--------------------------------------------
const http =			require('http')
const https =			require('https')
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
const fs = 				require('fs')


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
// let privkey_path = process.env.SSL_CERT_PATH
// let cert_path = process.env.SSL_KEY_PATH

moment_tz.tz.setDefault(process.env.APP_TIME_ZONE || 'Europe/Madrid');

if(config.util.getEnv('NODE_ENV') !== 'test') {
    app.use(logger('dev'))
 //    privkey_path = 'keys/privkey.pem'
	// cert_path = 'keys/cert.pem'
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
app.use('/api', auth, require('./routes/stats.routes'))
app.use('/api', auth, require('./routes/shared.routes'))



app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '/client/dist/index.html'))
})


// function stringToSec(str) {
// 	let s = str.split(':')
// 	let hou = Number(s[0].slice(0, -1))
// 	let min = Number(s[1].slice(0, -1))
// 	let sec = Number(s[2].slice(0, -1))

// 	return hou*60*60 + min*60 + sec
// }

// const Call = require('./models/call')
// const test = require('./database/calls.json')
// const moment = require('moment')

// test.forEach( (t) => {
// 	let a = new Call({
// 		'callerNumber': t.Origen,
// 		'recieverNumber': t.Destino,
// 		'date': moment(t.Fecha + ' ' + t.Hora, 'DD/MM/YYYY HH:mm:ss').toISOString(),
// 		'durationInSeconds': stringToSec(t.Duracion),
// 		'status': t.Estado,
// 		'isValidated': true
// 	})

// 	a.save(err => {
// 			console.log(a)
// 	})
	
// })


//--------------------------------------------
//		Runnn!
//--------------------------------------------
// const server = https.createServer({
// 	'key': fs.readFileSync(privkey_path, 'utf8'),
// 	'cert': fs.readFileSync(cert_path, 'utf8')
// }, app)

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
