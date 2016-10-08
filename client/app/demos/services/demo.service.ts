import {Http, Headers} from '@angular/http'
import {Injectable} from '@angular/core'
import 'rxjs/add/operator/map';


@Injectable()
export class DemoService {
    headers: Headers
    url = "/api/demos/"

    constructor(private http: Http){
        this.headers = new Headers()
        this.headers.append("Content-Type", "application/json")
    }

    save(demo){
        return this.http.post(this.url, JSON.stringify(demo), {headers: this.headers})
                        .map(res => res.json())
    }

    getAll(){
        return this.http.get(this.url, {headers: this.headers})
                        .map(res => res.json())
    }

    delete(demo){
        return this.http.delete(this.url+demo._id, {headers: this.headers})
                        .map(res => res.json())    
    }



}