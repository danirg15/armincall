import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http'
import 'rxjs/add/operator/map';

@Injectable()
export class SharedServices {
    headers: Headers

    constructor(private http: Http) { 
        this.headers = new Headers()
        this.headers.append("Content-Type", "application/json")
    }

    getBadges(){
        var url = '/api/badges'

        return this.http.get(url, {headers: this.headers})
                        .map(res => res.json())
    }

    getDistributors(){
        var url = '/api/distributors'

        return this.http.get(url, {headers: this.headers})
                        .map(res => res.json())
    }

}