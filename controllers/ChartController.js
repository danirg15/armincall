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
            {$sort: { _id: 1 }},
            {$limit: Number(nMonths)}
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
        let date_lower_bound = moment().startOf(time_word).toDate()
        let date_upper_bound = moment().endOf(time_word).toDate()

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
        let date_lower_bound = moment().startOf(time_word).toDate()
        let date_upper_bound = moment().endOf(time_word).toDate()

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

    getCallsCountWeekHistogram: (callback) => {
        let dayTags = moment.weekdaysShort()

        let pipeline = [
            {$match:{
                  'status': 'Respondida',
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
                callback(null, result)
            }
        })
    },

    getCallsCountHourHistogram: (callback) => {
        let pipeline = [
            {$match:{
                  'status': 'Respondida',
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

                for (var i = 0; i < data.length-2; i++) {
                    result.tags.push(data[i]._id.hourOfDay+':00 - '+data[i+2]._id.hourOfDay+':00')
                    result.count.push(data[i].count + data[i+1].count)
                }

                callback(null, result)
            }
        })
    },

    // getCallsAvgTimeWeekHistogram: (callback) => {
    //     let dayTags = moment.weekdaysShort()

    //     let pipeline = [
    //         {$match:{
    //               'status': 'Respondida',
    //         }}, 
    //         {$project:{
    //               'dayOfWeek':  { $dayOfWeek: '$date' }, 
    //               'duration': '$durationInSeconds'
    //         }}, 
    //         {$group:{
    //               '_id': { dayOfWeek: '$dayOfWeek' }, 
    //               'avg': { $avg: '$duration' }
    //         }},
    //         {$sort: { _id: 1 }}
    //     ]

    //     Call.aggregate().append(pipeline).exec((err, data) => {
    //         if (err){
    //             callback(err, null)
    //         }
    //         else {
    //             let result = {'tags': [], 'count': []}
    //             data.forEach((value) => {
    //                 result.tags.push(dayTags[value._id.dayOfWeek-1])
    //                 result.count.push(value.avg)
    //             })
    //             callback(null, result)
    //         }
    //     })
    // }


}