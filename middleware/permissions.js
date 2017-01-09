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
	var s = path.replace('/', '_') + '_' + method

	if(s.charAt(0) == '_') {
		s = removeAt(s, 0, 1)
	}

	return s.toUpperCase()
}


const perm = require('../config/permissions')


module.exports = (req, res, next) => {
	var p = dec2bin(3)
	
	var i = request_to_perm(req.path, req.method)

	//console.log(  perm[i].bit)
	console.log(perm[i] && p[perm[i].bit] === '1')
	next()
}