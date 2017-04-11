import {HttpServices}   from '../../shared/services/http.services'
import {Injectable}     from '@angular/core'

@Injectable()
export class ChartService {
    url = "/api/stats"

    constructor(private http: HttpServices){
        
    }

    getCallsCountByMonths(n_months) {
        return this.http.get(this.url+'/calls/evolution_by_months/'+n_months)
    }

    
    getCallsCount(time_word) {
        return this.http.get(this.url+'/calls/count/this/'+time_word)
    }

    getCallsAvgTime(time_word) {
        return this.http.get(this.url+'/calls/avg_time/this/'+time_word)
    }

    getCallsCountWeekHistogram(time_word) {
        return this.http.get(this.url+ '/calls/count/daily/histogram/'+time_word)
    }

    getCallsCountHourHistogram(time_word) {
        return this.http.get(this.url+ '/calls/count/hourly/histogram/'+time_word)
    }

}
