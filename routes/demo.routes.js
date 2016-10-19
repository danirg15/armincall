const router 			= require('express').Router()
const DemoController 	= require('../controllers/DemoController')
const validate 			= require('express-validation');
const validator 		= require('./validators');


router.get('/demos', (req, res) => {
	DemoController.getAll(req.query, (err, demos) => {
		if (err) res.status(500).json(err)
        else res.status(200).json(demos)
	})	
})

router.get('/demos/:id', (req, res) => {
	DemoController.getOne(req.params.id, (err, demo) => {
		if (err) res.status(500).json(err)
        else res.status(200).json(demo)
	})
})

router.post('/demos', validate(validator.demo), (req, res) => {	
	DemoController.store(req.body, (err) =>{
		if (err) res.status(500).json(err)
        else res.status(201).json({})
	})
})

router.put('/demos/:id', validate(validator.demo), (req, res) => {
	DemoController.update(req.params.id, req.body, (err) => {
		if (err) res.status(500).json(err)
        else res.status(200).json({})
	})	
})

router.delete('/demos/:id', (req, res) => {
	DemoController.destroy(req.params.id, (err) => {
		if (err) res.status(500).json(err)
        else res.status(200).json({})
	})
})

module.exports = router;