//import {Http, Headers}      from '@angular/http'
import {Injectable}         from '@angular/core'
import {HttpServices}       from '../../shared/services/http.services'
import 'rxjs/add/operator/map';

@Injectable()
export class DemoService {
    //headers: Headers
    url = "/api/demos/"

    constructor(private http: HttpServices){
        //this.headers = new Headers()
        //this.headers.append("Content-Type", "application/json")
    }

    save(demo){
        return this.http.post(this.url, demo)
                        .map(res => res.json())
    }

    getAll(){
        return this.http.get(this.url)
                        .map(res => res.json())
    }

    delete(demo){
        return this.http.delete(this.url+demo._id)
                        .map(res => res.json())    
    }



}