import { Injectable }   from '@angular/core'
import { HttpServices } from '../../shared/services/http.services' 
import { Router, ActivatedRoute }       from '@angular/router'

@Injectable()
export class AuthService {
    uri = '/api/auth/login'

    constructor(private http: HttpServices, private router: Router, private route: ActivatedRoute) {

        //This allows login through url param
        if(route.snapshot.queryParams.token) {
            localStorage.setItem('token', route.snapshot.queryParams.token)
            router.navigate(['/dashboard']);
        }
   
    }

    isLoggedIn = function() {
        return localStorage.getItem('token') ? true : false
    }

    login(username, password, cb) {
        this.http.post(this.uri, {'username': username, 'password': password})
                .subscribe(res => {
                    if(res.token) {
                        localStorage.setItem('token', res.token)
                        this.router.navigate(['/dashboard'])
                    }
                    else {
                        cb('Ha ocurrido un error al autenticarse.')
                    }                              
                }, err => {
                    cb('Usuario o contraseña incorrectos!')
                })
    }

    logout() {
        localStorage.removeItem('token')
    }

}