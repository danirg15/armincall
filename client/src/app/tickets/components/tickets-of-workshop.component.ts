import { Component, Input, ViewChild } from '@angular/core';
import { TicketService } from '../services/ticket.service'

@Component({
    selector: 'workshop-tickets',
    templateUrl: '../templates/tickets-of-workshop.template.html'
})
export class TicketsOfWorkshopComponent {
    @ViewChild('ticketsModal') modal
    @Input('workshop-id') workshopId = null
    @Input('call-ids') callIds: any[] = []
    tickets: any[] = []
    selectedTicketId = null
    ticketMarkedAsCompleted = false
    descriptionOfNewTicket = ""

    constructor(private ticketService: TicketService) { 
    
    }

    show() {
        this.modal.open()
        if(this.workshopId){
            this.ticketService.getPendingTickets(this.workshopId)
            .subscribe( tickets => this.tickets = tickets )
        }
    }
    
    select($event){
        this.selectedTicketId = $event.target.value
    }

    link(){
        if(this.selectedTicketId != null && this.descriptionOfNewTicket == '') {
            this.ticketService.updateTicket(this.selectedTicketId, {
                'workshop':     this.workshopId,
                'calls':        this.callIds,
                'completed':    this.ticketMarkedAsCompleted 
            }).subscribe( x => {
                console.log("by id")
                this.modal.close()
            })
        }
        else if(this.selectedTicketId == null && this.descriptionOfNewTicket != '') {
            this.ticketService.save({
                'workshop':     this.workshopId,
                'calls':        this.callIds,
                'completed':    this.ticketMarkedAsCompleted,
                'description':  this.descriptionOfNewTicket
            }).subscribe( x => {
                console.log("by descrip")
                this.modal.close()
            })
        }
        else {
            alert('Something went wrong!')
            return    
        }
    }
}