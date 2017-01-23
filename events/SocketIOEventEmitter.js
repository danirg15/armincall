const io = require('socket.io')();
let clients = []

module.exports = {

	bind: function(subscriber){
		io.of(subscriber.uri).on('connection', function(socket){
			let client = {
				'event': subscriber.event,
				'socket': socket
			}

			console.log('Connected: ' + client)

			clients.push(client)

			socket.on('disconnect', function () {
				console.log('Disconnected: ' + client)
			    let i = clients.indexOf(client);
			    clients.splice(i, 1);
			})
		})
	},

	emit: function(event, data){
		console.log('Goin to emit .' + 'n_clients: '+clients.length)

		clients.forEach(function(client){
			
			if(event == client.event){
				console.log('Emiting--> event:'+event+' from: '+client.uri)
			 	client.socket.emit(event, data)
			}
			
		})
	},

	listen: function(){
		io.listen(process.env.SOCKET_IO_PORT || 5000);
	}

}

