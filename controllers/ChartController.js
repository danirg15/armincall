const CallController  = require('../controllers/CallController')
const moment = require('moment')
moment.locale('es')


module.exports = {

    getCallsByMonth: function(nMonths, callback){
        let monthTags = moment.monthsShort()

		CallController.getNumberOfCallsByMonth(nMonths, (err, data) => {
            if (err) {
                callback(err, null)
            }
            else{
                let result = {
                    'tags': [],
                    'count': []
                }

                data.forEach((value) => {
                    result.tags.push(monthTags[value._id.month-1])
                    result.count.push(value.count)
                })

                callback(null, result)
            }
        })
    }


}