import {Component, Input, OnInit} from '@angular/core'
import {Router} from '@angular/router';
import {SharedServices} from '../services/shared.service'

@Component({
    selector: 'nav-bar',
    templateUrl: 'app/shared/templates/nav-bar.template.html',
})

export class NavBarComponent implements OnInit{
    badges = {
        pendingCalls: 0,
        pendingTickets: 0,
        pendingDemos: 0,
        pendingReminders: 0
    }

    constructor(private router: Router, private sharedServices: SharedServices){
        
    }

    ngOnInit(){
        this.sharedServices.getBadges()
                           .subscribe(badges => this.badges = badges)
    }


    test(t){
        console.log(t)
    }

    
   
}