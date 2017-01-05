let crypto = require('crypto');
let hash = crypto.createHash('md5').update('my-token').digest('hex');

module.exports = (req, res, next) => {
	if (req.method === 'POST' && 
		req.body.token && 
		req.body.token === hash) {
		next()
	}
	else if (req.method !== 'POST') {
		res.json({'error': 'Solo esta permitido usar HTTP POST'})
	}
	else if(req.body.token && req.body.token !== hash) {
		res.json({'error': 'Token invalido'})		
	}
	else if(!req.body.token) {
		res.json({'error': 'Token inexistente'})
	}
	else {
		res.json({'error': 'Error desconocido de autenticacion'})
	}
}