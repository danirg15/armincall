// import {Component, Input, OnInit} from '@angular/core'
// import { AuthService }      from '../../auth/services/auth.service'
// import * as algoliasearch   from 'algoliasearch'
// import * as autocomplete    from 'autocomplete.js';

// @Component({
//     selector: 'nav-bar',
//     templateUrl: '../templates/nav-bar.template.html',
// })

// export class NavBarComponent implements OnInit{
//     badges = {
//         pendingCalls: 0,
//         pendingTickets: 0,
//         pendingDemos: 0,
//         pendingReminders: 0
//     }

//     constructor(private router: Router, 
//                 private sharedServices: SharedServices,
//                 private authService: AuthService){
        
//     }

//     ngOnInit(){
//         // const client = algoliasearch("N5FLSJ2BJC", "00907831911300073a873eda9a70d709");
//         // const index = client.initIndex('workshops');

//         // index.search('burg', (err, res) => {
//         //     if(err) throw err
//         //     console.log(res)
//         // })

//         console.log(autocomplete)



//         this.sharedServices.getBadges()
//                            .subscribe(badges => this.badges = badges)
//     }

//     logout() {
//         this.authService.logout()
//         this.router.navigate(['/login'])
//     }
   
//     find(keyword){
//         this.router.navigate(['/workshops', {'q': keyword}])
//     }

// }