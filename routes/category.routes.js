const router 			= require('express').Router()
const CategoryController 	= require('../controllers/CategoryController')
const validate 			= require('express-validation');
const validator 		= require('./validators');


router.get('/categories', (req, res) => {
	CategoryController.getAll(req.query, (err, categories) => {
		if (err) res.status(500).json(err)
        else res.status(200).json(categories)
	})	
})

router.get('/categories/:id', (req, res) => {
	CategoryController.getOne(req.params.id, (err, category) => {
		if (err) res.status(500).json(err)
        else res.status(200).json(category)
	})
})

router.post('/categories', validate(validator.category.full), (req, res) => {	
	CategoryController.store(req.body, (err) =>{
		if (err) res.status(500).json(err)
        else res.status(201).json({})
	})
})

router.put('/categories/:id', validate(validator.category.full), (req, res) => {
	CategoryController.update(req.params.id, req.body, (err) => {
		if (err) res.status(500).json(err)
        else res.status(200).json({})
	})	
})

router.delete('/categories/:id', (req, res) => {
	CategoryController.destroy(req.params.id, (err) => {
		if (err) res.status(500).json(err)
        else res.status(200).json({})
	})
})

module.exports = router;