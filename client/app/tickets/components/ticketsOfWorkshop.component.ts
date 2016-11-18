import { Component, Input, ViewChild } from '@angular/core';
import { TicketService } from '../services/ticket.service'

@Component({
    selector: 'workshop-tickets',
    template: `
        <modal #ticketsModal 
                title="tickets"
                modalClass="modal-lg"
                [hideCloseButton]="false"
                [closeOnEscape]="true"
                [closeOnOutsideClick]="true"
        >

            <modal-header>
                <h2 class="text-center">
                    <small></small>
                </h2>
                
            </modal-header>

            <modal-content>
                <div class="panel panel-warning">
                    <div class="panel-heading">
                        <h3 class="panel-title">Incidencias Activas</h3>
                    </div>
                    <div class="panel-body">
                        <table class="table table-striped table-hover ">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Fecha/Hora</th>
                                    <th>Descripción</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr *ngFor="let ticket of tickets">
                                    <td>
                                        <div class="checkbox">
                                            <label>
                                                <input type="radio" name="radio" value="{{ticket._id}}" (change)="select($event)" />
                                            </label>
                                        </div>
                                    </td>
                                    <td>{{ticket.createdAt}}</td>
                                    <td>{{ticket.description}}</td>
                                </tr>
                            </tbody>
                        </table> 
                    </div>
                </div>

            </modal-content>

            <modal-footer>
                <button class="btn btn-default" (click)="ticketsModal.close()">Cancelar</button>
                <button class="btn btn-primary" [disabled]="selectedTicketId == null" (click)="link()">Link</button>
            </modal-footer>

        </modal>
    
    `
})
export class TicketsOfWorkshopComponent {
    @ViewChild('ticketsModal') modal
    @Input('workshop-id') workshopId = null
    @Input('call-ids') callIds: any[] = []
    tickets: any[] = []
    selectedTicketId = null

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
        this.ticketService.updateTicket(this.selectedTicketId, {
            'workshop': this.workshopId,
            'calls': this.callIds,
            'completed': true 
        }).subscribe( x => {
            console.log(x)
        })
    }
}