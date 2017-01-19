import { Component, OnInit }    from '@angular/core';
import { SharedServices }       from '../../shared/services/shared.service'

@Component({
    templateUrl: 'app/dashboard/templates/dashboard.template.html'
})
export class DashboardComponent implements OnInit {
    badges = {
        pendingCalls: 0,
        pendingTickets: 0,
        pendingDemos: 0,
        pendingReminders: 0
    } 
    
    constructor(private sharedServices: SharedServices){   
    }

    ngOnInit(){
        this.sharedServices.getBadges()
                           .subscribe(badges => this.badges = badges)
    }
}