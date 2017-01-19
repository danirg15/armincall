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
    }

    getAll(){
        return this.http.get(this.url)
    }

    delete(reminder){
        return this.http.delete(this.url+reminder._id)
    }


}