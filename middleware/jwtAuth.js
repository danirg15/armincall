const jwtAuth = require('../auth')

module.exports = (req, res, next) => {
    let header = req.headers.authorization

    if (!header) {
        res.status(401).json({ 'error': 'No token provided' })
    }
    else{
        let token = header.split(' ')[1]
        jwtAuth.verifyToken(token, (err, payload) => {
            if (err) {
                res.status(401).json({ 'error': 'Unauthorized token' })
            }
            else{
                jwtAuth.refreshToken(payload, (err, newToken) => {
                    if (err) 
                        next(err)
                    else if (newToken) 
                        res.set('Authorization', 'Bearer ' + newToken)
                    else
                        res.set('Authorization', 'Bearer ' + token)
                    
                    next()
                })
            }
        })
    }
}

