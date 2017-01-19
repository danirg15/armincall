import {Component, Input, OnInit} from '@angular/core'
import {Router} from '@angular/router';
import {SharedServices} from '../services/shared.service'
import { AuthService } from '../../auth/services/auth.service'

@Component({
    selector: 'nav-bar',
    templateUrl: '../templates/nav-bar.template.html',
})

export class NavBarComponent implements OnInit{
    badges = {
        pendingCalls: 0,
        pendingTickets: 0,
        pendingDemos: 0,
        pendingReminders: 0
    }

    constructor(private router: Router, 
                private sharedServices: SharedServices,
                private authService: AuthService){
        
    }

    ngOnInit(){
        this.sharedServices.getBadges()
                           .subscribe(badges => this.badges = badges)
    }

    logout() {
        this.authService.logout()
        this.router.navigate(['/login'])
    }
   
    find(keyword){
        this.router.navigate(['/workshops', {'q': keyword}])
    }

}