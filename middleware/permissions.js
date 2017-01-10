const perm = require('../config/permissions')


function dec2bin(dec){
    return (dec >>> 0).toString(2).split('');
}
function bin2dec(bin){
	return parseInt(bin.join(''), 2);
}
function removeAt(str, at, charcount){
	return str.substr(0, at) + str.substr(at + charcount);
}

function request_to_perm(path, method) {
	var s = path.replace(/\//g, '_') 

	if(s.charAt(0) == '_') {
		s = removeAt(s, 0, 1)
	}
	
	if(s.charAt(s.length-1) == '_') {
		s = removeAt(s, s.length-1, 1)
	}

	s += '_' + method

	return s.toUpperCase()
}


function validatePermsOfRequest(req, p) {
	var perm_level = p.split("")
	var i = request_to_perm(req.path, req.method)

	console.log(i)
	console.log(perm[i])
	console.log(perm_level)

	if (perm[i] && perm_level[perm[i].bit] === '1') {
		return true
	}

	return false
}



module.exports = (req, res, next) => {
	var payload = req.token_payload

	if (!payload) {
		res.status(401).json({ 'error': 'No token found for permissions' })
	}
	else if(!payload.body.perms){
		res.status(401).json({ 'error': 'No permissions found in token' })
	}
	else if (!validatePermsOfRequest(req, payload.body.perms)) {
		res.status(401).json({ 'error': 'Inssuficient permissions for the requested action' })
	}
	else {
		next()
	}
}