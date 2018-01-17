import { Component, Input, ViewChild, OnInit } from '@angular/core';
import { TicketService }    from '../services/ticket.service'
import { CategoryService }  from '../../categories/services/category.service'
import { Router } from '@angular/router'

@Component({
    selector: 'workshop-tickets',
    templateUrl: '../templates/tickets-of-workshop.template.html'
})
export class TicketsOfWorkshopComponent implements OnInit{
    @ViewChild('ticketsModal') modal
    @Input('workshop-id') workshopId = null
    @Input('call-ids') callIds: any[] = []
    tickets: any[] = []
    categories = []
    selectedTicketId = null
    ticketMarkedAsCompleted = false
    descriptionOfNewTicket = ""
    solutionOfNewTicket = ""
    categoryOfNewTicket = ""
    isNewTicket: boolean = false

    constructor(private ticketService: TicketService,
                private categoryService: CategoryService,
                private router: Router) { 
    
    }

    ngOnInit() {
        this.categoryService.getAll()
                            .subscribe(categories => this.categories = categories)
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
        if(this.selectedTicketId != null && this.categoryOfNewTicket == '') {
            this.ticketService.updateTicket(this.selectedTicketId, {
                'workshop':     this.workshopId,
                'calls':        this.callIds,
                'completed':    this.ticketMarkedAsCompleted 
            }).subscribe( x => {
                //console.log("by id")
                this.modal.close()
                this.router.navigate(['/dashboard'])
            })
        }
        else if(this.selectedTicketId == null && this.categoryOfNewTicket != '') {
            this.ticketService.save({
                'workshop':     this.workshopId,
                'calls':        this.callIds,
                'completed':    this.ticketMarkedAsCompleted,
                'description':  this.descriptionOfNewTicket,
                'solution':     this.solutionOfNewTicket,
                'category':     this.categoryOfNewTicket
            }).subscribe( x => {
                //console.log("by descrip")
                this.modal.close()
                this.router.navigate(['/dashboard'])
            })
        }
        else {
            alert('error!')
            return    
        }

        

    }
}