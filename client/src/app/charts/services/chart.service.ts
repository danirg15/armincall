import {HttpServices}   from '../../shared/services/http.services'
import {Injectable}     from '@angular/core'

@Injectable()
export class ChartService {
    url = "/api/stats/calls/"

    constructor(private http: HttpServices){
        
    }

    getAll(n_months){
        return this.http.get(this.url + n_months + '/months')
    }

}