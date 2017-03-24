const moment = require('moment')
const Reminder = require('../models/reminder')
const Mailgun = require('../lib/MailgunInterface')

module.exports = {
	
	handle: () => {
		let now = moment().toDate()
		let halfHour = moment().add(30, 'minutes').toDate()

		Reminder.find({'ISODate' : {'$gte': now, '$lte': halfHour} }, (err, reminders) => {
			if (err || !reminders) {
				return
			}
			reminders.forEach((reminder) => {
				const template = `
					<h1>ArminCall - Recordatorio</h1><br/>
					<p>Hoy a las `+moment(reminder.ISODate, moment.ISO_8601).format("HH:mm")+`</p>
					<p>`+reminder.description+`</p>`
					
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