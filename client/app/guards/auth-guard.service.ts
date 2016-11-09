import { Injectable }           from '@angular/core'
import { CanActivate, Router }  from '@angular/router'
import { AuthService }          from '../auth/services/auth.service'

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router){
    }

    canActivate(){
        localStorage.setItem('token', 'Hello World')
        //localStorage.removeItem('token')
        
        if(this.authService.isLoggedIn)
            return true
        
        this.router.navigate(['login'])

        return false
    }

}