import { Injectable }   from '@angular/core';
import {HttpServices}   from '../../shared/services/http.services'
import 'rxjs/add/operator/map';

@Injectable()
export class SharedServices {

    constructor(private http: Http) { 
        
    }

    getBadges(){
        var url = '/api/badges'

        return this.http.get(url)
                        .map(res => res.json())
    }

    getDistributors(){
        var url = '/api/distributors'

        return this.http.get(url)
                        .map(res => res.json())
    }

}