import {Http, Headers}  from '@angular/http'
import {Injectable}     from '@angular/core'

@Injectable()
export class HttpServices {
    headers: Headers

    constructor(private http: Http){
        this.headers = new Headers()
        this.headers.append("Content-Type", "application/json")
        this.headers.append("Authorization", localStorage.getItem('token'))
    }

    get(uri){
        return this.http.get(uri, {headers: this.headers})
    }

    post(uri, data){
        return this.http.post(uri, JSON.stringify(data), {headers: this.headers})
    }

    put(uri, data){
        return this.http.put(uri, JSON.stringify(data), {headers: this.headers})
    }

    delete(uri){
        return this.http.delete(uri, {headers: this.headers})
    }

}