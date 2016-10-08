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
    

/*
        http://valor-software.com/ng2-charts/
        https://github.com/thelgevold/rxjs-socket.io
        https://github.com/brinkmanjg/ng2-typeahead

*/

