import {HttpServices}   from '../../shared/services/http.services'
import {Injectable}     from '@angular/core'
import 'rxjs/add/operator/map';


@Injectable()
export class WorkshopService {
    url = "/api/workshops/"

    constructor(private http: HttpServices){
        
    }

    save(workshop){
        return this.http.post(this.url, workshop)
    }

    getWorkshop(id) {
        return this.http.get(this.url+id)
    }

    getAll(){
        return this.http.get(this.url)
    }

    updateWorkshop(id, workshop){
        return this.http.put(this.url + id, workshop)
    }

    search(keyword) {
        return this.http.get(this.url+'?q='+keyword)
    }


}