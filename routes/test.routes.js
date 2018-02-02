const router 			= require('express').Router()

router.get('/started', (req, res) => {
	console.log('Started:')
	console.log(req.query)
	res.status(200).send()
})

router.get('/answered', (req, res) => {
	console.log('Answered:')
	console.log(req.query)
	res.status(200).send()
})

router.get('/finished', (req, res) => {
	console.log('Finished:')
	console.log(req.query)
	res.status(200).send()
})


module.exports = router



