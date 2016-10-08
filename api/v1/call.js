var router = require('express').Router();
var mongoose = require('mongoose');
var Call = require('../../../models/call');

var stringToISODate = function(stringdate, time) {
	//regex
	var str = stringdate.split('/');
	return new Date(str[2]+'-'+str[1]+'-'+str[0]+' '+time).toISOString();
}
var serverErrorRes = function(res) {
	res.status(500).json({status_code: '500', message: 'Internal Server Error'});
}

var badRequestRes = function(res) {
	res.status(400).json({status_code: '400', message: 'Missing parameters', data: []});
}

var successRes = function(res, data) {
	res.status(200).json({status_code: '200', message: '', 'data': data});
}


router.get('/calls', function(req, res) {
	if (!req.query.dateini || !req.query.datefin) {
		badRequestRes(res);
	}
	else{
		var dateini = stringToISODate(req.query.dateini, '00:00:00');
		var datefin = stringToISODate(req.query.datefin, '23:59:59');

		Call.find({'date': {'$gte': dateini, '$lte': datefin}}, {extra: 0}).populate('workshop').exec(function(err, calls) {
			if (err)
				serverErrorRes(res);
			else
				successRes(res, calls);
		});	
	}
});

router.get('/calls/distributor/:distributor_code', function(req, res) {
	if (!req.query.dateini || !req.query.datefin || !req.params.distributor_code) {
		badRequestRes(res);
	}
	else{
		var dateini = stringToISODate(req.query.dateini, '00:00:00');
		var datefin = stringToISODate(req.query.datefin, '23:59:59');

		Call.find({'extra.distributor_code': req.params.distributor_code, 'date': {'$gte': dateini, '$lte': datefin}}, {extra: 0}).populate('workshop').exec(function(err, calls) {
			if (err)
				serverErrorRes(res);
			else
				successRes(res, calls);
		});	
	}
});


router.get('/calls/workshop/:workshop_cif', function(req, res) {
	if (!req.query.dateini || !req.query.datefin || !req.params.workshop_cif) {
		res.json({status_code: '400', message: 'Missing parameters', data: []});
	}
	else{
		var dateini = stringToISODate(req.query.dateini, '00:00:00');
		var datefin = stringToISODate(req.query.datefin, '23:59:59');

		Call.find({'extra.cif': req.params.workshop_cif, 'date': {'$gte': dateini, '$lte': datefin}}, {extra: 0}).populate('workshop').exec(function(err, calls) {
			if (err) return res.json({status_code: '500', message: 'Internal Server Error'});
			res.json({status_code: '200', message: '', 'data': calls});
		});	
		
	}
});


router.get('/calls/licence/:licence_code', function(req, res) {
	if (!req.query.dateini || !req.query.datefin || !req.params.licence_code) {
		badRequestRes(res);
	}
	else{
		var dateini = stringToISODate(req.query.dateini, '00:00:00');
		var datefin = stringToISODate(req.query.datefin, '23:59:59');

		Call.find({'extra.licence_code': req.params.licence_code, 'date': {'$gte': dateini, '$lte': datefin}}, {extra: 0}).populate('workshop').exec(function(err, calls) {
			if (err)
				serverErrorRes(res);
			else
				successRes(res, calls);
		});	
	}
});


router.get('/calls/count', function(req, res) {
	if (!req.query.dateini || !req.query.datefin) {
		badRequestRes(res);
	}
	else{
		var dateini = stringToISODate(req.query.dateini, '00:00:00');
		var datefin = stringToISODate(req.query.datefin, '23:59:59');

		Call.count({'date': {'$gte': dateini, '$lte': datefin}}, function(err, count) {
			if (err)
				serverErrorRes(res);
			else
				successRes(res, count);
		});		
	}
});

router.get('/calls/count/distributor/:distributor_code', function(req, res) {
	if (!req.query.dateini || !req.query.datefin || !req.params.distributor_code) {
		badRequestRes(res);
	}
	else{
		var dateini = stringToISODate(req.query.dateini, '00:00:00');
		var datefin = stringToISODate(req.query.datefin, '23:59:59');

		Call.count({'extra.distributor_code': req.params.distributor_code, 'date': {'$gte': dateini, '$lte': datefin}}, function(err, count) {
			if (err)
				serverErrorRes(res);
			else
				successRes(res, count);
		});	
	}
});


router.get('/calls/count/workshop/:workshop_cif', function(req, res) {
	if (!req.query.dateini || !req.query.datefin || !req.params.workshop_cif) {
		badRequestRes(res);
	}
	else{
		var dateini = stringToISODate(req.query.dateini, '00:00:00');
		var datefin = stringToISODate(req.query.datefin, '23:59:59');

		Call.count({'extra.cif': req.params.workshop_cif, 'date': {'$gte': dateini, '$lte': datefin}}, function(err, count) {
			if (err)
				serverErrorRes(res);
			else
				successRes(res, count);
		});		
	}
});


router.get('/calls/count/licence/:licence_code', function(req, res) {
	if (!req.query.dateini || !req.query.datefin || !req.params.licence_code) {
		badRequestRes(res);
	}
	else{
		var dateini = stringToISODate(req.query.dateini, '00:00:00');
		var datefin = stringToISODate(req.query.datefin, '23:59:59');

		Call.count({'extra.licence_code': req.params.licence_code, 'date': {'$gte': dateini, '$lte': datefin}}, function(err, count) {
			if (err)
				serverErrorRes(res);
			else
				successRes(res, count);
		});		
	}
});


router.get('/calls/count/status/:status_code', function(req, res) {
	if (!req.query.dateini || !req.query.datefin || !req.params.status_code) {
		badRequestRes(res);
	}
	else{
		var dateini = stringToISODate(req.query.dateini, '00:00:00');
		var datefin = stringToISODate(req.query.datefin, '23:59:59');

		Call.count({'status': req.params.status_code, 'date': {'$gte': dateini, '$lte': datefin}}, function(err, count) {
			if (err)
				serverErrorRes(res);
			else
				successRes(res, count);
		});		
	}
});

router.all('/calls/*', function(req, res) {
	res.json({status_code: '404', message: 'Not Found', data: []});
});


module.exports = router;