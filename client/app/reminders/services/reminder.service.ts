import {Http, Headers} from '@angular/http'
import {Injectable} from '@angular/core'
import 'rxjs/add/operator/map';


@Injectable()
export class ReminderService {
    headers: Headers
    url = "/api/reminders/"

    constructor(private http: Http){
        this.headers = new Headers()
        this.headers.append("Content-Type", "application/json")
    }

    save(reminder){
        return this.http.post(this.url, JSON.stringify(reminder), {headers: this.headers})
                        .map(res => res.json())
    }

    getAll(){
        return this.http.get(this.url, {headers: this.headers})
                        .map(res => res.json())
    }

    delete(reminder){
        return this.http.delete(this.url+reminder._id, {headers: this.headers})
                        .map(res => res.json())
    }


}