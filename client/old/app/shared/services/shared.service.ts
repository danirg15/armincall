import { Injectable }   from '@angular/core';
import {HttpServices}   from '../../shared/services/http.services'
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx'

@Injectable()
export class SharedServices {

    constructor(private http: HttpServices) { 
        
    }

    getBadges(){
        const url = '/api/badges'
        return this.http.get(url)
    }

    getDistributors(){
        const url = '/api/distributors'
        return this.http.get(url)
    }

}