import {HttpServices}   from '../../shared/services/http.services'
import {Injectable}     from '@angular/core'

@Injectable()
export class CategoryService {
    url = "/api/categories"

    constructor(private http: HttpServices){
       
    }

    save(category){
        return this.http.post(this.url, category)
    }

    getAll() {
        return this.http.get(this.url)
    }

    getOne(id) {
        return this.http.get(this.url+'/'+id)
    }

}