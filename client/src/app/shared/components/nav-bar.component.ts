import {Component, Input, OnInit} from '@angular/core'
import {Router}             from '@angular/router';
import {SharedServices}     from '../services/shared.service'
import { AuthService }      from '../../auth/services/auth.service'
import * as algoliasearch   from 'algoliasearch'
import * as autocomplete    from 'autocomplete.js';

@Component({
    selector: 'nav-bar',
    styleUrls: ['../style.css'],
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

    test() {
        const client = algoliasearch("N5FLSJ2BJC", "00907831911300073a873eda9a70d709");
        const index = client.initIndex('workshops');

        autocomplete('#aa-search-input',
        { hint: false }, {
            source: autocomplete.sources.hits(index, {hitsPerPage: 5}),
            //value to be displayed in input control after user's suggestion selection
            displayKey: 'name',
            //hash of templates used when rendering dataset
            templates: {
                suggestion: function(suggestion) {
                    return '<span>' + suggestion._highlightResult.name.value + '</span>'+
                           '<span>' + suggestion._highlightResult.distributor.value + '</span>';
                }
            }
        })


    }

    ngOnInit(){
        this.test()

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