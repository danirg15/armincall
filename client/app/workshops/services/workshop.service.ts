import {Http, Headers} from '@angular/http'
import {Injectable} from '@angular/core'
import 'rxjs/add/operator/map';


@Injectable()
export class WorkshopService {
    headers: Headers
    url = "/api/workshops/"

    constructor(private http: Http){
        this.headers = new Headers()
        this.headers.append("Content-Type", "application/json")
    }

    save(workshop){
        return this.http.post(this.url, JSON.stringify(workshop), {headers: this.headers})
                        .map(res => res.json())
    }

    getWorkshop(id) {
        return this.http.get(this.url+id, {headers: this.headers})
                        .map(res => res.json())
    }

    getAll(){
        return this.http.get(this.url, {headers: this.headers})
                        .map(res => res.json())
    }

    updateWorkshop(id, data){
        return this.http.put(this.url + id, 
                            JSON.stringify(data), 
                            {headers: this.headers})
                        .map(res => res.json())
    }

    search(keyword) {
        return this.http.get(this.url+'?q='+keyword, {headers: this.headers})
                        .map(res => res.json())
    }


}