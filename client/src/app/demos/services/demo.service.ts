import {Injectable}         from '@angular/core'
import {HttpServices}       from '../../shared/services/http.services'

@Injectable()
export class DemoService {
    url = "/api/demos/"

    constructor(private http: HttpServices){

    }

    save(demo){
        return this.http.post(this.url, demo)
    }

    getPendingDemos(){
        return this.http.get(this.url+'?completed=false')
    }

    getDemo(id){
        return this.http.get(this.url+id)
    }

    updateDemo(id, demo) {
        return this.http.put(this.url+id, demo)
    }

    getAll(){
        return this.http.get(this.url)
    }

    markDemoAsCompleted(demo){
        return this.http.put(this.url+demo._id, {'completed': true})
    }

}