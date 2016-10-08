import {Http, Headers} from '@angular/http'
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'

//import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';


@Injectable()
export class CallService {
    headers: Headers
    url = '/api/calls'

    constructor(private http: Http) { 
        this.headers = new Headers()
        this.headers.append("Content-Type", "application/json")
    }

    getPendingCalls(){
        return this.http.get(this.url+'?isValidated=false', {headers: this.headers})
                        .map(res => res.json())
    }

    getNewCalls() {
        var socket = null
        var url = 'http://localhost:5000/events/calls'

        let observable = new Observable(observer => {
            socket = io(url);

            socket.on('newCall', (data) => {
                observer.next(data)  
            });

            return () => {
                socket.disconnect()
            };  
        })     
        
        return observable;
    }

    updateCall(call){
        return this.http.put(this.url+'/'+call._id , JSON.stringify(call), {headers: this.headers})
                        .map(res => res.json())
    }

}