import {Component} from '@angular/core';

// @Component({
//     selector: 'my-app',
//     template: `
//         <nav-bar></nav-bar>
    
//         <div class="container">
//              <router-outlet></router-outlet>
//         </div> 
//     `
// })
@Component({
    selector: 'my-app',
    template: `
        <router-outlet></router-outlet>
    `
})
export class AppComponent { 

}


