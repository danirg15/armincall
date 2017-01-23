//--------------------------------------------
//		App Modules
//--------------------------------------------
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const session = require('express-session')
const env = require('dotenv').config()
const path = require('path')
const SocketIOEventEmitter = require('./events/SocketIOEventEmitter')
const logger = require('morgan')
const config = require('config')
const auth = require('./middleware/jwtAuth')

//--------------------------------------------
//		Middlewares
//--------------------------------------------
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(session({ secret: 'secrets', resave: false, saveUninitialized: false }));


if(config.util.getEnv('NODE_ENV') !== 'test') {
    app.use(logger('dev'))
}

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


// app.get('/socket.io/socket.io.js', (req, res) => {
// 	res.sendFile(path.join(__dirname,'./node_modules/socket.io-client/dist/socket.io.js'))
// })

// app.get('/socket.io/socket.io.js.map', (req, res) => {
// 	res.sendFile(path.join(__dirname,'./node_modules/socket.io-client/dist/socket.io.js.map'))
// })

// app.get('/test', (req, res) => {
// 	res.sendFile(path.join(__dirname, './test.html'))
// })


//Serve client app
app.use(express.static(path.join(__dirname, 'client/dist')));

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '/client/dist/index.html'))
})


SocketIOEventEmitter.bind({
	'event': 'newCall', 
	'uri': '/events/calls/new'
})
SocketIOEventEmitter.bind({
	'event': 'incommingCall', 
	'uri': '/events/calls/incomming'
})

SocketIOEventEmitter.listen()



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
app.listen(process.env.APP_PORT || 3000, function(err) {
	if (err) throw err
	console.log('Server running...')
})

module.exports = app
