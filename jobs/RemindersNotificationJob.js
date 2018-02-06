const moment = require('moment')
const Reminder = require('../models/reminder')
const ReminderController = require('../controllers/ReminderController')
const Mailgun = require('../lib/MailgunInterface')

module.exports = {
	
	handle: () => {
		let now = moment().toDate()
		let halfHour = moment().add(30, 'minutes').toDate()

		Reminder.find({
			'notified': false,
			'ISODate' : {'$gte': now, '$lte': halfHour} 
		}).populate('owner').exec((err, reminders) => {

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
					   .to(reminder.owner.email)
					   .withSubject('ArminCall | Recordatorio')
					   .withBody(template)
					   .send((err) => {
					   		if (err) throw err
					   		else ReminderController.update(reminder._id, {'notified':true}, (err) => {})
					   })
			})//for-each	
		})

	}

}
