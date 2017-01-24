const io = require('socket.io')();
let clients = []

module.exports = {

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
	},

	listen: function(){
		io.listen(process.env.SOCKET_IO_PORT || 5000);
	}

}

