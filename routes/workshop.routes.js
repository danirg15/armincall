const router 				= require('express').Router()
const WorkshopController 	= require('../controllers/WorkshopController')
const validate 				= require('express-validation');
const validator 			= require('./validators');


router.get('/workshops', (req, res) => {
	WorkshopController.getAll(req.query, (err, workshops) => {
		if (err) res.status(500).json(err)
        else res.status(200).json(workshops)
	})	
})

router.get('/workshops/:id', (req, res) => {
	WorkshopController.getOne(req.params.id, (err, workshop) => {
		if (err) res.status(500).json(err)
        else res.status(200).json(workshop)
	})	
})

router.post('/workshops', validate(validator.workshop.full), (req, res) => {
	WorkshopController.store(req.body, (err) => {
		if (err) res.status(500).json(err)
        else res.status(201).json({})
	})	
})

router.put('/workshops/:id', validate(validator.workshop.full), (req, res) => {
	WorkshopController.update(req.params.id, req.body, (err) => {
		if (err) res.status(500).json(err)
        else res.status(200).json({})
	})	
})

router.delete('/workshops/:id', (req, res) => {
	WorkshopController.destroy(req.params.id, (err) => {
		if (err) res.status(500).json(err)
        else res.status(200).json({})
	})	
})

router.post('/workshops/sync-algolia', (req, res) => {
	WorkshopController.syncAlgolia((result) => {
		res.status(200).json(result)
	})
})

module.exports = router
