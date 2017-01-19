import { HttpServices }   from '../../shared/services/http.services'
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';


@Injectable()
export class CallService {
    url = '/api/calls'

    constructor(private http: HttpServices) { 
        
    }

    getPendingCalls(){
        return this.http.get(this.url+'?isValidated=false')
                        .map(res => res.json())
    }

    getNewCalls() {
        var socket = null
        var url = 'http://localhost:5000/events/calls/new'

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

    getIncommingCalls(){

        //TODO refactor duplicated code
        var socket = null
        var url = 'http://localhost:5000/events/calls/incomming'

        let observable = new Observable(observer => {
            socket = io(url);

            socket.on('incommingCall', (data) => {
                observer.next(data)  
            });

            return () => {
                socket.disconnect()
            };  
        })     
        
        return observable;
    }


    updateCall(call){
        return this.http.put(this.url+'/'+call._id , call)
    }

}