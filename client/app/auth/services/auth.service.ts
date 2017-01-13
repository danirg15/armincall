import { Injectable }   from '@angular/core'
import { HttpServices }              from '../../shared/services/http.services' 

@Injectable()
export class AuthService {
    isLoggedIn = true
    uri = '/auth/login'

    constructor(private http: HttpServices) {

    }

    login(username, password) {
        this.http.post(this.uri, {'username': username, 'password': password})
                 .subscribe(res => {
                     console.log(res)
                     //localStorage.setItem('token', 'Hello World')
                     //this.isLoggedIn = true
                 }, err => {
                     console.log(err)
                 })
    }

    logout() {
        localStorage.removeItem('token')
        this.isLoggedIn = false
    }

}