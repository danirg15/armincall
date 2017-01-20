import { Component, OnInit } from '@angular/core';
import { TicketService } from '../services/ticket.service'

@Component({
    templateUrl: '../templates/tickets.template.html'
})
export class TicketsComponent implements OnInit {
    tickets: any[] = []
    selectedTickets: any[] = []
    discardButtonHidden = false

    constructor(private ticketService: TicketService) { 
    }

    ngOnInit() { 
        this.loadPendingTickets()
    }

    loadPendingTickets() {
        this.discardButtonHidden = false
        this.ticketService.getPendingTickets(null)
                          .subscribe( tickets => this.tickets = tickets )
    }

    loadTicketsHistory() {
        this.discardButtonHidden = true
        this.ticketService.getAll()
                          .subscribe( tickets => this.tickets = tickets )
    }

    select($event, call){
        if($event.target.checked){
            this.selectedTickets.push(call)
        }
        else{
            var index = this.selectedTickets.indexOf(call)
            this.selectedTickets.splice(index, 1)
        }
    }

    setAsCompleted(ticket){
        if(!confirm('¿Estas seguro que deseas resolver esta incidencia?')) 
            return

        var i = this.tickets.indexOf(ticket)
        this.tickets.splice(i, 1)

        this.ticketService.updateTicket(ticket._id, {
            'completed': true
        }).subscribe(null, err => {
            alert('Error al eliminar')
            this.tickets.splice(i, 0, ticket) 
        })
    }

}