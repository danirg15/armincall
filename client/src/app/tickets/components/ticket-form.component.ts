import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { BasicValidators } from '../../shared/validators/basicValidators'
import { TicketService } from '../services/ticket.service'
import { WorkshopService } from '../../workshops/services/workshop.service'
import { Router, ActivatedRoute } from '@angular/router';

import { Ticket } from '../ticket'

@Component({
    selector: 'ticket-form',
    templateUrl: '../templates/ticket-form.template.html'
})
export class TicketFormComponent implements OnInit {
    ticket = new Ticket('', false)
    workshop = { name: ''}
    title = 'Nueva Incidencia'
    form: FormGroup

    constructor(fb: FormBuilder, 
                private ticketService: TicketService, 
                private workshopService: WorkshopService,
                private router: Router,
                private route: ActivatedRoute,) { 
        this.form = fb.group({
            description: ['', Validators.required],
            completed: ['', Validators.required]
        })
    }

    ngOnInit(){
        this.route.params.subscribe( params => {
            this.workshopService
                .getWorkshop(params['workshop_id'])
                .subscribe(workshop => this.workshop = workshop) 
        }) 
    }

    onSubmit(){
        this.route.params.subscribe( params => {
            let workshop_id = params['workshop_id']
            if(workshop_id){
                let ticket = this.form.value
                ticket.workshop = workshop_id
   
                this.ticketService.save(ticket)
                .subscribe(x =>
                    this.router.navigate(['/tickets'])
                )
            }
        }) 
    }

}       