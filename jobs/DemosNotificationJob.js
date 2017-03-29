const moment = require('moment')
const Demo = require('../models/demo')
const Mailgun = require('../lib/MailgunInterface')

module.exports = {
	
	handle: () => {
		let now = moment().toDate()
		let halfHour = moment().add(30, 'minutes').toDate()

		Demo.find({'ISODate' : {'$gte': now, '$lte': halfHour} }, (err, demos) => {
			if (err || !demos) {
				return
			}
			demos.forEach((demo) => {
				const template = `
					<h1>ArminCall - Recordatorio</h1><br/>
					<p>Hoy a las `+moment(demo.ISODate, moment.ISO_8601).format("HH:mm")+`</p>
					<p>`+demo.description+`</p>`
					
				Mailgun.compose()
					   .from(process.env.DEFAULT_EMAIL || 'no-reply@armincall.com')
					   .to('dani.rg15@gmail.com')
					   .withSubject('ArminCall | Recordatorio')
					   .withBody(template)
					   .send((err) => {
					   		if (err) throw err
					   })
			})//for-each	
		})

	}

}
