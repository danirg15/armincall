const Call  = require('../models/call')
const moment = require('moment')
moment.locale('es')


module.exports = {

    getCallsEvolutionByMonth: function(nMonths, callback){
        let monthTags = moment.monthsShort()

        let pipeline = [
            {$match:{
                  "date":   { $gt: moment().subtract(nMonths, 'months').toDate() }
            }}, 
            {$project:{
                  "year":   { $year:"$date" }, 
                  "month":  { $month:"$date" } 
            }}, 
            {$group:{
                  _id:      { year: "$year", month: "$month" }, 
                  count:    { $sum:1 }
            }},
            {$sort: { _id: 1 }}
        ]

        Call.aggregate().append(pipeline).exec((err, data) => {
            if (err) {
                callback(err, null)
            }
            else{
                let result = {'tags': [], 'count': []}
                data.forEach((value) => {
                    result.tags.push(monthTags[value._id.month-1])
                    result.count.push(value.count)
                })
                callback(null, result)
            }
        })
    },


    getCallsAvgTime: (time_word, callback) => {
        if(time_word == 'all') {
            var date_lower_bound = moment().subtract(100, 'years').toDate()
            var date_upper_bound = moment().add(100, 'years').toDate()
        }else {
            var date_lower_bound = moment().startOf(time_word).toDate()
            var date_upper_bound = moment().endOf(time_word).toDate()
        }  
        
        let pipeline = [
            {$match:{
                  'date': { $gte: date_lower_bound, $lte: date_upper_bound },
                  'status': 'Respondida',
            }},  
            {$group:{
                  '_id': null, 
                  'avg': {$avg: '$durationInSeconds'} 
            }}
        ]

        Call.aggregate().append(pipeline).exec((err, data) => {
            callback(err, data.length == 0 ? data : data[0])
        })
    },

    getCallsCount: (time_word, callback) => {
        if(time_word == 'all') {
            var date_lower_bound = moment().subtract(100, 'years').toDate()
            var date_upper_bound = moment().add(100, 'years').toDate()
        }else {
            var date_lower_bound = moment().startOf(time_word).toDate()
            var date_upper_bound = moment().endOf(time_word).toDate()
        }        

        let pipeline = [
            {$match:{
                  'date': { $gte: date_lower_bound, $lte: date_upper_bound },
            }},  
            {$group:{
                  '_id': null, 
                  'count': {$sum: 1} 
            }}
        ]

        Call.aggregate().append(pipeline).exec((err, data) => {
            callback(err, data.length == 0 ? data : data[0])
        })
    },

    getCallsCountWeekHistogram: (time_word, callback) => {
        if(time_word == 'all') {
            var date_lower_bound = moment().subtract(100, 'years').toDate()
            var date_upper_bound = moment().add(100, 'years').toDate()
        }else {
            var date_lower_bound = moment().startOf(time_word).toDate()
            var date_upper_bound = moment().endOf(time_word).toDate()
        }   
        let dayTags = moment.weekdaysShort()

        let pipeline = [
            {$match:{
                  'status': 'Respondida',
                  'date': { $gte: date_lower_bound, $lte: date_upper_bound }
            }}, 
            {$project:{
                  'dayOfWeek':  { $dayOfWeek: '$date' },
            }}, 
            {$group:{
                  '_id': { dayOfWeek: '$dayOfWeek' }, 
                  'count': { $sum: 1 }
            }},
            {$sort: { _id: 1 }}
        ]

        Call.aggregate().append(pipeline).exec((err, data) => {
            if (err){
                callback(err, null)
            }
            else {
                let result = {'tags': [], 'count': []}
                data.forEach((value) => {
                    result.tags.push(dayTags[value._id.dayOfWeek-1])
                    result.count.push(value.count)
                })

                //remove sunday
                //result.tags.shift()
                //result.count.shift()

                callback(null, result)
            }
        })
    },

    getCallsCountHourHistogram: (time_word, callback) => {
        if(time_word == 'all') {
            var date_lower_bound = moment().subtract(100, 'years').toDate()
            var date_upper_bound = moment().add(100, 'years').toDate()
        }else {
            var date_lower_bound = moment().startOf(time_word).toDate()
            var date_upper_bound = moment().endOf(time_word).toDate()
        }   

        let pipeline = [
            {$match:{
                  'status': 'Respondida',
                  'date': { $gte: date_lower_bound, $lte: date_upper_bound }
            }}, 
            {$project:{
                  'hourOfDay':  { $hour: [{ $add: [ '$date', 3600000 ]}] },//timezone 
            }}, 
            {$group:{
                  '_id': { hourOfDay: '$hourOfDay' }, 
                  'count': { $sum: 1 }
            }},
            {$sort: { _id: 1 }}
        ]

        Call.aggregate().append(pipeline).exec((err, data) => {
            if (err){
                callback(err, null)
            }
            else {
                let result = {'tags': [], 'count': []}

                for (var i = 0; i < data.length; i++) {
                    result.tags.push(data[i]._id.hourOfDay+':00')
                    result.count.push(data[i].count)
                }
                
                callback(null, result)
            }
        })
    },

}