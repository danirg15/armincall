const router = require('express').Router()
const UserController = require('../controllers/UserController')
const User = require('../models/user')
const validate = require('express-validation');
const validator = require('./validators');


router.get('/auth/login', (req, res) => {

})

router.get('/auth/refresh_token', (req, res) => {
      
})

router.get('/auth/logout', (req, res) => {
      
})


module.exports = router;