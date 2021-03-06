import { Component, OnInit }    from '@angular/core';
import { ActivatedRoute }       from '@angular/router'
import { TicketService }        from '../services/ticket.service'
import { Ticket }               from '../ticket'
import * as consts          from '../../config/constants'


@Component({
    selector: 'ticket-detail',
    templateUrl: '../templates/ticket-detail.template.html'
})
export class TicketDetailComponent implements OnInit {
    ticket = new Ticket()
    consts: object = consts

    constructor(private route: ActivatedRoute, 
                private ticketService: TicketService) { 
    }

    ngOnInit() { 
        this.route.params.subscribe(params => {
            let id = params['id']
            this.ticketService
                .getOne(id)
                .subscribe(ticket => this.ticket = ticket)
        })
    }
}