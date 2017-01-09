const jwt = require('jsonwebtoken')
let secret = process.env.APP_KEY || Date.now()


let self = module.exports = {

    getNewToken: (options, payload, callback) => {
        jwt.sign({ 'body': payload }, secret, options, callback)
    },

    verifyToken: (token, callback) => {
        jwt.verify(token, secret, callback)
    },

    refreshToken: (payload, callback) => {
        let diff = payload.exp - payload.iat
        let refresh_time = payload.exp - (diff * 0.05)//Time to refresh when it's under 5% to expire
        let now = Date.now()/1000

        if (now > refresh_time)
            self.getNewToken(payload.body, callback)
        else 
            callback(null)
    }

}
