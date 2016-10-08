import {Http, Headers} from '@angular/http'
import {Injectable} from '@angular/core'
import 'rxjs/add/operator/map';


@Injectable()
export class ChartService {
    headers: Headers
    url = "/api/charts/"

    constructor(private http: Http){
        this.headers = new Headers()
        this.headers.append("Content-Type", "application/json")
    }

    getAll(){
        return this.http.get(this.url + 'months/' + 6, {headers: this.headers})
                        .map(res => res.json())
    }

}