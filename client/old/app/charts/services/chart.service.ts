import {HttpServices} from '../../shared/services/http.services'
import {Injectable} from '@angular/core'
import 'rxjs/add/operator/map';


@Injectable()
export class ChartService {
    url = "/api/stats/calls/"

    constructor(private http: HttpServices){
        
    }

    getAll(n_months){
        return this.http.get(this.url + n_months + '/months')
    }

}