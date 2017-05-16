import { Component, ElementRef } from '@angular/core';
import { Location } from '@angular/common';

@Component({
    host: {
        '(click)': 'back()',
    },
    selector: 'go-back',
    styles: [`
        
        .goback:hover {
            color: #3c82c1;
            font-size: 1.2rem;
        }   

        .goback:hover > .arrow {
            color: #3c82c1;
            font-size: 2.1rem;
        }

        .arrow {
            color: #34485a;
            font-size: 2rem;
        }

    `],
    template: `
        <br>
        <a href="#" class="goback"> 
            <i class="arrow icon-lg ion-ios-arrow-thin-left align-middle"></i> 
            <span style="font-size: 1rem;" class="align-middle"> Atras</span> 
        </a>
    ` 
    
})
export class GoBackComponent {

    constructor(private location: Location,
                private _eref: ElementRef) { 

    }

    back() {
        this.location.back();
    }
}