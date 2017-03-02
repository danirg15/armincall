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

    
    getCallsCount(word_time) {
        return this.http.get(this.url+'/calls/count/this/'+word_time)
    }

    getCallsAvgTime(word_time) {
        return this.http.get(this.url+'/calls/avg_time/this/'+word_time)
    }

    getCallsCountWeekHistogram() {
        return this.http.get(this.url+ '/calls/count/week/histogram')
    }

    getCallsCountHourHistogram() {
        return this.http.get(this.url+ '/calls/count/hour/histogram')
    }

}
