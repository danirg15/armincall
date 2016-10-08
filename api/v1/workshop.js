var router = require('express').Router();
var mongoose = require('mongoose');
var Workshop = require('../../../models/workshop');


router.get('/workshop', function(req, res) {
	Workshop.find({}, function(err, workshops) {
		if (err) throw err;
		res.json({status_code: '200', message: '', 'data': workshops});
	});	
});


router.get('/workshop/:workshop_cif', function(req, res) {
	if (!req.params.workshop_cif) {
		res.json({status_code: '400', message: 'Missing parameters', data: []});
	}
	else{
		Workshop.findOne({cif: req.params.workshop_cif}, function(err, workshops) {
			if (err) throw err;
			res.json({status_code: '200', message: '', 'data': workshops});
		});	
	}
});

//Create workshop
router.post('/workshop', function(req, res) {
	if (!req.params.id) {
		res.json({status_code: '400', message: 'Missing parameters', data: []});
	}
	else{
		Workshop.find({_id: req.params.id}, function(err, workshops) {
			if (err) throw err;
			res.json({status_code: '200', message: 'Successfully created'});
		});	
	}
});

/*
router.put('/workshop/:id', function(req, res) {
	if (!req.params.id) {
		res.json({status_code: '400', message: 'Missing parameters', data: []});
	}
	else{
		Workshop.find({_id: req.params.id}, function(err, workshops) {
			if (err) throw err;
			res.json({status_code: '200', message: 'Successfully updated'});
		});	
	}
});
*/
router.delete('/workshop/:workshop_cif', function(req, res) {
	if (!req.params.workshop_cif) {
		res.json({status_code: '400', message: 'Missing parameters', data: []});
	}
	else{
		Workshop.delete({cif: req.params.workshop_cif}, function(err) {
			if (err) throw err;
		});	
	}
});


module.exports = router;