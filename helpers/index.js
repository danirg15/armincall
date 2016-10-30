const moment = require('moment')


function getLastsMonthsTag(n_months){
	moment.locale('es')
	const months = moment.monthsShort()
	let tags = []
	let currentMonth = moment().month()

	for(let i = 0; i < n_months; i++){
		if ( (currentMonth - i) < 0 ) {
			t = 12 + (currentMonth - i)
		}
		else{
			t = (currentMonth - i) % 12
		}
		tags.push(months[t])
	}

	return tags.reverse()
}



module.exports = {
	'getLastsMonthsTag': getLastsMonthsTag
}