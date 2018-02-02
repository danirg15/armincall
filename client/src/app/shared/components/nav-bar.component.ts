import {Component, Input, OnInit} from '@angular/core'
import {Router}             from '@angular/router';
import {SharedServices}     from '../services/shared.service'
import { AuthService }      from '../../auth/services/auth.service'
import * as algoliasearch   from 'algoliasearch'
import * as autocomplete    from 'autocomplete.js';

@Component({
    selector: 'nav-bar',
    templateUrl: '../templates/nav-bar.template.html',
})

export class NavBarComponent implements OnInit{
    user: object = {}
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
        this.initWorkshopSmartSearch()

        this.sharedServices.getUser()
                           .subscribe(user => this.user = user)

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

    initWorkshopSmartSearch() {
        const client = algoliasearch("N5FLSJ2BJC", "00907831911300073a873eda9a70d709");
        const index = client.initIndex('workshops');

        autocomplete('#workshop-smart-search',
        { hint: false }, {
            source: autocomplete.sources.hits(index, {hitsPerPage: 10}),
            displayKey: 'name',
            templates: {
                suggestion: (suggestion) => {
                    return '<span>' + suggestion._highlightResult.name.value + '</span>'+
                           '<span>' + suggestion._highlightResult.distributor.value + '</span>';
                }
            }
        })
    }

}