import { Component, OnInit, OnDestroy }    from '@angular/core';
import { SharedServices }       from '../../shared/services/shared.service'

@Component({
    templateUrl: '../templates/dashboard.template.html'
})
export class DashboardComponent implements OnInit, OnDestroy {
    eventsConnection

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

        
        this.eventsConnection =  this.sharedServices
                                .createSocketObservable('/events/calls/incomming', 'incommingCall')
                                .subscribe(x => {
                                    this.badges.pendingCalls++
                                })
        
    }

    ngOnDestroy() {
        this.eventsConnection.unsubscribe()
    }
}