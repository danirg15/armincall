const io = require('socket.io')();
let sockets = []

module.exports = {

	init: function(url){
		io.of(url).on('connection', function(socket){
			sockets.push(socket)

			socket.on('disconnect', function () {
			    let i = sockets.indexOf(socket);
			    sockets.splice(i, 1);
			});
		});

		io.listen(process.env.SOCKET_IO_PORT || 5000);
	},

	emitNewCall: function(call){
		sockets.forEach(function(socket){
		 	socket.emit('newCall', call)
		})
	}

}

