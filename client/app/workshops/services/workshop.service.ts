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
                        .map(res => res.json())
    }

    getWorkshop(id) {
        return this.http.get(this.url+id)
                        .map(res => res.json())
    }

    getAll(){
        return this.http.get(this.url)
                        .map(res => res.json())
    }

    updateWorkshop(id, workshop){
        return this.http.put(this.url + id, workshop)
                        .map(res => res.json())
    }

    search(keyword) {
        return this.http.get(this.url+'?q='+keyword)
                        .map(res => res.json())
    }


}