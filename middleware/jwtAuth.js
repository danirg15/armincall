const jwtAuth = require('../auth')

module.exports = (req, res, next) => {
    let token = req.headers.authorization || req.body.token || req.query.token
    
    if (!token) {
        res.status(401).json({ 'error': 'No token provided' })
    }
    else{
        jwtAuth.verifyToken(token, (err, payload) => {
            if (err) {
                res.status(401).json({ 'error': 'Unauthorized token' })
            }
            else{
                jwtAuth.refreshToken(payload, (err, newToken) => {
                    if (err) 
                        next(err)
                    else if (newToken) 
                        res.set('Authorization', newToken)
                    else
                        res.set('Authorization', token)
                    
                    delete req.query.token 
                    req.token_payload = payload
                    next()
                })
            }
        })
    }
}

