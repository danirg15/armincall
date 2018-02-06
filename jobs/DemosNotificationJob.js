const moment = require('moment')
const Demo = require('../models/demo')
const DemoController = require('../controllers/DemoController')
const Mailgun = require('../lib/MailgunInterface')

module.exports = {
	
	handle: () => {
		let now = moment().toDate()
		let halfHour = moment().add(30, 'minutes').toDate()

		Demo.find({
				'notified': false ,
				'completed': false,
				'ISODate' : {'$gte': now, '$lte': halfHour} 
		}).populate('owner').exec((err, demos) => {
			if (err || !demos) {
				return
			}

			demos.forEach((demo) => {
				const template = `
					<h1>ArminCall - Demo</h1><br/>
					<p>Hoy a las `+moment(demo.ISODate, moment.ISO_8601).format("HH:mm")+`</p>
					<p>`+demo.description+`</p>`
					
				Mailgun.compose()
					   .from(process.env.DEFAULT_EMAIL || 'no-reply@armincall.com')
					   .to(demo.owner.email)
					   .withSubject('ArminCall | Demo')
					   .withBody(template)
					   .send((err) => {
					   		if (err) throw err
					   		else DemoController.update(demo._id, {'notified':true}, (err) => {})					   		
					   })
			})//for-each	
		})

	}

}
