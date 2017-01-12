const perms = require('../config/permissions')

function validatePermsOfRoute(route_name, p) {
	let perm_level = p.split("")
	let bit = ( perms[route_name] ) ? perms[route_name].bit : null

	if (bit != null && perm_level[bit] === '1') {
		return true
	}

	return false
}


module.exports = (route_name) => {
	return function(req, res, next) {
		let payload = req.token_payload

		if (!payload) {
			res.status(401).json({ 'error': 'No token found for permissions' })
		}
		else if(!payload.body.perms){
			res.status(401).json({ 'error': 'No permissions found in token' })
		}
		else if (!validatePermsOfRoute(route_name, payload.body.perms)) {
			res.status(401).json({ 'error': 'Inssuficient permissions for the requested action' })
		}
		else {
			next()
		}
	}

}