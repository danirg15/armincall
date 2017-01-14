import { Injectable }   from '@angular/core'
import { HttpServices } from '../../shared/services/http.services' 
import { Router } from '@angular/router'

@Injectable()
export class AuthService {
    uri = '/api/auth/login'

    constructor(private http: HttpServices, private router: Router) {

    }

    isLoggedIn = function() {
        return localStorage.getItem('token') ? true : false
    }

    login(username, password) {
        this.http.post(this.uri, {'username': username, 'password': password})
                 .subscribe(res => {

                     if(res.status === 200 && res.json().token) {
                         localStorage.setItem('token', res.json().token)
                         this.router.navigate(['/dashboard'])
                     }
                     else {
                         alert('Usuario no autorizado!')
                     }
                              
                 }, err => {
                     alert('Ha ocurrido un error al autenticarse. '  + err)
                     console.log(err)
                 })
    }

    logout() {
        localStorage.removeItem('token')
    }

}