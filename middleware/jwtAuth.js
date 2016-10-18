const jwtAuth = require('../auth')

module.exports = (req, res, next) => {
    let header = req.headers.authorization

    if (!header) {
        res.status(401).json({ 'error': 'No token provided' })
    }
    else{
        let token = header.split(' ')[1]
        jwtAuth.verifyToken(token, (err) => {
            if (err) {
                res.status(401).json({ 'error': 'Unauthorized token' })
            }
            else{
                res.set('Authorization', 'Bearer '+token)
                next()
            }
        })
    }

}

