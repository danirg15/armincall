import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { BasicValidators } from '../../shared/validators/basicValidators'
import { TicketService } from '../services/ticket.service'
import { Router } from '@angular/router';

@Component({
    selector: 'ticket-form',
    templateUrl: 'app/tickets/templates/ticket-form.template.html'
})
export class TicketFormComponent {
    
    form: FormGroup
    
    constructor(fb: FormBuilder, private ticketService: TicketService, private router: Router) { 
        this.form = fb.group({
            description: ['', Validators.required],
            date: ['', Validators.compose([Validators.required, BasicValidators.date])],
            time: ['', Validators.compose([Validators.required, BasicValidators.time])]
        })
    }

    onSubmit(){
        console.log(this.form.value)

        this.ticketService.save(this.form.value)
                            .subscribe(x =>
                                this.router.navigate(['Tickets'])
                            )
    }

}