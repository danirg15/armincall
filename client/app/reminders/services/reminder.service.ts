import {HttpServices}   from '../../shared/services/http.services'
import {Injectable}    from '@angular/core'
import 'rxjs/add/operator/map';


@Injectable()
export class ReminderService {
    url = "/api/reminders/"

    constructor(private http: HttpServices){
        
    }

    save(reminder){
        return this.http.post(this.url, reminder)
                        .map(res => res.json())
    }

    getAll(){
        return this.http.get(this.url)
                        .map(res => res.json())
    }

    delete(reminder){
        return this.http.delete(this.url+reminder._id)
                        .map(res => res.json())
    }


}