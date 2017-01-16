import {Http, Headers}  from '@angular/http'
import {Injectable}     from '@angular/core'
import {Router} from '@angular/router'
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx'

@Injectable()
export class HttpServices {
    headers: Headers

    constructor(private http: Http, private router: Router){
        
    }

    private buildHeaders() {
        this.headers = new Headers()
        this.headers.append("Content-Type", "application/json")
        this.headers.append("Authorization", localStorage.getItem('token'))
    }

    private checkStatus(err) {
        if(err.status === 401){
            this.router.navigate(['/login'])
            return Observable.throw(new Error(err.status));
        }
    }

    get(uri){
        this.buildHeaders()
        return this.http.get(uri, {headers: this.headers})
                        .map(res => res.json())
                        .catch(err => {
                            return this.checkStatus(err)
                        })
    }

    post(uri, data){
        this.buildHeaders()
        return this.http.post(uri, JSON.stringify(data), {headers: this.headers})
                        .map(res => res.json())
                        .catch(err => {
                            return this.checkStatus(err)
                        })
    }

    put(uri, data){
        this.buildHeaders()
        return this.http.put(uri, JSON.stringify(data), {headers: this.headers})
                        .map(res => res.json())
                        .catch(err => {
                            return this.checkStatus(err)
                        })
    }

    delete(uri){
        this.buildHeaders()
        return this.http.delete(uri, {headers: this.headers})
                        .map(res => res.json())
                        .catch(err => {
                            return this.checkStatus(err)
                        })
    }

}