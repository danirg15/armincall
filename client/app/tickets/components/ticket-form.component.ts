import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { BasicValidators } from '../../shared/validators/basicValidators'
import { TicketService } from '../services/ticket.service'
import { Router, ActivatedRoute } from '@angular/router';

import { Ticket } from '../ticket'

@Component({
    selector: 'ticket-form',
    templateUrl: 'app/tickets/templates/ticket-form.template.html'
})
export class TicketFormComponent implements OnInit {
    ticket = new Ticket()
    workshop = { name: 'workshop name'}
    title = 'Nueva Incidencia'
    form: FormGroup

    constructor(fb: FormBuilder, 
                private ticketService: TicketService, 
                private router: Router,
                private route: ActivatedRoute,) { 
        this.form = fb.group({
            description: ['', Validators.required],
            completed: ['', Validators.required]
            // time: ['', Validators.compose([Validators.required, BasicValidators.time])]
        })
    }

    ngOnInit(){

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