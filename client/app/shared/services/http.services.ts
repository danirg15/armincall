import {Http, Headers}  from '@angular/http'
import {Injectable}     from '@angular/core'
import {Router} from '@angular/router'
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx'

@Injectable()
export class HttpServices {
    headers: Headers

    constructor(private http: Http, private router: Router){
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
        return this.http.get(uri, {headers: this.headers})
                        .map(res => res.json())
                        .catch(err => {
                            return this.checkStatus(err)
                        })
    }

    post(uri, data){
        return this.http.post(uri, JSON.stringify(data), {headers: this.headers})
                        .map(res => res.json())
                        .catch(err => {
                            return this.checkStatus(err)
                        })
    }

    put(uri, data){
        return this.http.put(uri, JSON.stringify(data), {headers: this.headers})
                        .map(res => res.json())
                        .catch(err => {
                            return this.checkStatus(err)
                        })
    }

    delete(uri){
        return this.http.delete(uri, {headers: this.headers})
                        .map(res => res.json())
                        .catch(err => {
                            return this.checkStatus(err)
                        })
    }

}