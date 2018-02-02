import { Injectable, OnInit }   from '@angular/core';
import {HttpServices}           from '../../shared/services/http.services'
import { Observable }           from 'rxjs/Observable';
import * as io                  from 'socket.io-client';

import { environment }          from '../../../environments/environment';

@Injectable()
export class SharedServices implements OnInit{
    eventsBaseURL: string
    
    constructor(private http: HttpServices) { 
        this.eventsBaseURL = environment.socketIOBaseEndpoint
    }

    ngOnInit() {
        if(!environment.socketIOBaseEndpoint) {
            console.log("Endpoint for events not found, the application won't react to events.")
        }
    }

    getUser(){
        const url = '/api/user'
        return this.http.get(url)
    }

    getBadges(){
        const url = '/api/badges'
        return this.http.get(url)
    }

    getDistributors(){
        const url = '/api/distributors'
        return this.http.get(url)
    }

    getDmss(){
        const url = '/api/dmss'
        return this.http.get(url)
    }

    createSocketObservable(endpoint, event) {
        let socket = null
        let observable = new Observable(observer => {
            socket = io(this.eventsBaseURL + endpoint);
            socket.on(event, (data) => {
                observer.next(data)  
            })
            return () => socket.disconnect()
        }) 

        return observable
    }

}