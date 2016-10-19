const moment = require('moment')



function getLastsMonthsTag(n_months){
	const months = [
		"Ene", "Feb", "Mar", "Abr", "May",
		"Jun","Jul","Ago","Sep","Oct","Nov","Dic"
	]

	let tags = []
	let currentMonth = moment().month()

	for(let i = 0; i < n_months; i++){
		t = Math.abs(currentMonth - i) % 12
		tags.push(months[t])
	}

	return tags.reverse()
}


module.exports = {
	'getLastsMonthsTag': getLastsMonthsTag
}