import {Http, Headers} from '@angular/http'
import {Injectable} from '@angular/core'
import 'rxjs/add/operator/map';


@Injectable()
export class ChartService {
    headers: Headers
    url = "/api/stats/calls/"

    constructor(private http: Http){
        this.headers = new Headers()
        this.headers.append("Content-Type", "application/json")
    }

    getAll(n_months){
        return this.http.get(this.url + n_months + '/months', {headers: this.headers})
                        .map(res => res.json())
    }

}