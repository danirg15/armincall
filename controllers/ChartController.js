const helpers         = require('../helpers')
const CallController  = require('../controllers/CallController')

module.exports = {

    getCallsCountOfMonths: function(req, res){
        let n_months = req.params.months || 1
        let tags = helpers.getLastsMonthsTag(n_months)

    		CallController.getCountOfMonths(n_months, function(err, docs){
      			if (err) {
                res.status(500).send(err)
            }
            else{
              	let callsCount = docs[0].counts
              	let zeroCounts = []

                //fill with zero the non-data months
              	const c = tags.length - callsCount.length
              	for (let i = 0; i < c; i++) {
              		zeroCounts.push(0)
              	}

              	callsCount = zeroCounts.concat(callsCount)

                res.status(200).json({
                    'tags': tags,
                    'counts': callsCount  
                })
            }//else
		    })
	  }

}