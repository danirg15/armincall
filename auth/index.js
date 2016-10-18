const jwt = require('jsonwebtoken')
let secret = process.env.APP_KEY || Date.now()


module.exports = {

    getNewToken: (payload, callback) => {
        let exp = process.env.USER_TOKEN_LIFETIME || '1m'    
        let options = {
            'issuer': 'ArminCall',
            'expiresIn': exp
        }

        jwt.sign(payload, secret, options, callback)
    },

    verifyToken: (token, callback) => {
        jwt.verify(token, secret, callback)
    }

    // ,

    // refreshToken: (payload, callback) => {
    //     var diff = payload.exp - payload.iat
    //     var refresh_time = decoded.iat + (diff / 2)
    //     var now = Date.now()/1000

    //     if(now > refresh_time){
    //         genToken(decoded.data, function(newToken){
    //             callback(newToken)
    //         })
    //     }
    //     else{
    //         callback(null)
    //     }
    // }

}
