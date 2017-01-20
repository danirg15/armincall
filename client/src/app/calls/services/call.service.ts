import { HttpServices }         from '../../shared/services/http.services'
import { Injectable, OnInit }   from '@angular/core';
import { Observable }           from 'rxjs/Observable';
import * as io                  from 'socket.io-client';
import { environment }          from '../../../environments/environment';

@Injectable()
export class CallService implements OnInit{
    url = '/api/calls'
    eventsBaseURL = environment.socketIOBaseEndpoint

    constructor(private http: HttpServices) { 
    }

    ngOnInit() {
        if(!environment.socketIOBaseEndpoint) {
            console.log("Endpoint for events not found, the application won't react to events.")
        }
    }

    getPendingCalls(){
        return this.http.get(this.url+'?isValidated=false')
    }

    getAll() {
        return this.http.get(this.url)
    }

    updateCall(call){
        return this.http.put(this.url+'/'+call._id , call)
    }

    getNewCalls() {
        const url = this.eventsBaseURL + '/events/calls/new'
        return this.createSocketObservable(url, 'newCall')
    }

    getIncommingCalls(){
        const url = this.eventsBaseURL + '/events/calls/incomming'
        return this.createSocketObservable(url, 'incommingCall')
    }


    createSocketObservable(endpoint, event) {
        let socket = null
        let observable = new Observable(observer => {
            socket = io(endpoint);
            socket.on(event, (data) => {
                observer.next(data)  
            })
            return () => socket.disconnect()
        }) 

        return observable
    }
}