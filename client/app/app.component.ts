import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <nav-bar></nav-bar>
    
        <div class="container">
             <router-outlet></router-outlet>
        </div> 
    `
})
export class AppComponent { 

}


