const Mailgun = require('mailgun-js')
const apiKey = process.env.MAILGUN_SECRET
const domain = process.env.MAILGUN_DOMAIN

let data = {
	from: '',
	to: '',
	subject: '',
	html: '',
	attachment: []
}

self = module.exports = {

	compose: () => {
		data = {from: '', to: '', subject: '', html: '', attachment: []}
		return self
	},

	from: (email) => {
		data.from = email
		return self
	},

	to: (recipients) => {
		data.to = Array.isArray(recipients) ? recipients.join() : recipients
		return self
	},

	withSubject: (subject) => {
		data.subject = subject
		return self
	},

	withBody: (html) => {
		data.html = html
		return self
	},

	withAttachment: (filepath) => {
		data.attachment.push(filepath)
		return self
	},

	send: (callback) => {
		//console.log(data)
		let mailgun = new Mailgun({'apiKey': apiKey,  'domain': domain})
		mailgun.messages().send(data, callback)
	}

}


    
    
