import { Component, OnInit }    from '@angular/core';
import {WorkshopService}        from '../services/workshop.service'
import {ActivatedRoute}         from '@angular/router';

@Component({
    templateUrl: '../templates/workshops.template.html'
})
export class WorkshopsComponent implements OnInit {
    workshops: any[]
    
    constructor(private workshopService: WorkshopService, 
                private route: ActivatedRoute) { 
    }

    ngOnInit() { 
        this.route.params.subscribe( params => {
            var keyword = params['q']
                        
            if(keyword){
                this.workshopService.search(keyword)
                                    .subscribe( workshops => this.workshops = workshops)
            }
            else{
                this.workshopService.getAll()
                                    .subscribe( workshops => this.workshops = workshops)
            }
        }) 
    }

}