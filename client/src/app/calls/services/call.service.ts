import { HttpServices }         from '../../shared/services/http.services'
import { Injectable }           from '@angular/core';
import { SharedServices }       from '../../shared/services/shared.service'

@Injectable()
export class CallService{
    url = '/api/calls'

    constructor(private http: HttpServices,
                private sharedServices: SharedServices) { 

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
        const url = '/events/calls/new'
        return this.sharedServices.createSocketObservable(url, 'newCall')
    }

    getIncommingCalls(){
        const url = '/events/calls/incomming'
        return this.sharedServices.createSocketObservable(url, 'incommingCall')
    }



}