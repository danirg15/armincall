let io = null
let clients = []

module.exports = {
	init: function(server){
		io = require('socket.io')(server);
	},

	bind: function(subscriber){
		io.of(subscriber.uri).on('connection', function(socket){
			let client = {
				'event': subscriber.event,
				'socket': socket
			}

			clients.push(client)

			socket.on('disconnect', function () {
			    let i = clients.indexOf(client);
			    clients.splice(i, 1);
			})
		})
	},

	emit: function(event, data){
		clients.forEach(function(client){
			if(event == client.event){
			 	client.socket.emit(event, data)
			}			
		})
	}

}

