var jwt = require('jsonwebtoken');
var secret = process.env.APP_KEY || Date.now();


var auth = function(req, res, next){
    var token = req.headers.authorization

    if(token){
        verifyToken(token, function(err, decoded){
            if(err){
                res.status(401).send('Invalid Token')
            }
            else{
                refreshToken(decoded, function(newToken){
                    if(newToken){
                        res.set('Authorization', newToken)
                        next()
                    }
                    else{
                        res.set('Authorization', token)
                        next()
                    }
                }) 
            }
        });

    }
    else{
        res.status(401).send('No token given')
    }
}


var genToken = function(payload, callback){
    var exp = process.env.USER_TOKEN_LIFETIME || '1m'    
    var options = {
        'issuer': 'ArminCall',
        'expiresIn': exp
    }

    jwt.sign(payload, secret, options, function(err, token){
        if(err) 
            throw err;
        else 
            callback(token)
    })
}


var verifyToken = function(token, callback){
    jwt.verify(token, secret, function(err, decoded) {
        callback(err, decoded)
    })
}

var refreshToken =  function (decoded, callback) {
    var diff = decoded.exp - decoded.iat
    var refresh_time = decoded.iat + (diff / 2)
    var now = Date.now()/1000

    if(now > refresh_time){
        genToken(decoded.data, function(newToken){
            callback(newToken)
        })
    }
    else{
        callback(null)
    }
}


module.exports = {
    'auth':auth,
    'genToken':genToken
}
