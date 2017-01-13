import { Injectable }   from '@angular/core'
import { HttpServices } from '../../shared/services/http.services' 

@Injectable()
export class AuthService {
    isLoggedIn = true
    uri = '/api/auth/login'

    constructor(private http: HttpServices) {

    }

    login(username, password) {
        this.http.post(this.uri, {'username': username, 'password': password})
                 .subscribe(res => {

                     if(res.status === 200 && res.json().token) {
                         localStorage.setItem('token', res.json().token)
                         this.isLoggedIn = true
                     }
                              
                 }, err => {
                     console.log(err)
                 })
    }

    logout() {
        localStorage.removeItem('token')
        this.isLoggedIn = false
    }

}