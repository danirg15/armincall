const jwt = require('jsonwebtoken')
let secret = process.env.APP_KEY || Date.now()


let self = module.exports = {

    getNewToken: (payload, callback) => {
        let exp = process.env.USER_TOKEN_LIFETIME || '1m'    
        let options = {
            'issuer': 'ArminCall',
            'expiresIn': exp
        }

        jwt.sign({ 'body': payload }, secret, options, callback)
    },

    verifyToken: (token, callback) => {
        jwt.verify(token, secret, callback)
    },

    refreshToken: (payload, callback) => {
        let diff = payload.exp - payload.iat
        let refresh_time = payload.iat + (diff / 2) //refresh token in the middle of his life
        let now = Date.now()/1000

        if (now > refresh_time)
            self.getNewToken(payload.body, callback)
        else 
            callback(null)
    }

}
