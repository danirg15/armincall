var api = require('express').Router();
var auth = require('../../middleware/auth');

api.get('/cars', function(req, res){
    res.json({});
});



module.exports = api;