import { Component, OnInit } from '@angular/core';
import { TicketService } from '../services/ticket.service'

@Component({
    template: `
        <nav-bar></nav-bar>

        <div class="container" >

        <div class="page-header">
            <h2>Incidencias</h2>
        </div>

        <button class="btn btn-primary btn-sm pull-right" [disabled]="!linkingAllowed">Asociar Llamadas</button> <br><br>

        <ul class="nav nav-tabs">
            <li class="active"><a href="#home" data-toggle="tab" aria-expanded="true">Incidencias Pendientes</a></li>
            <li class=""><a href="#profile" data-toggle="tab" aria-expanded="false">Historial</a></li>
        </ul>


        <br>

        <table class="table table-striped table-hover ">
            <thead>
                <tr>
                    <th></th>
                    <th>Taller</th>
                    <th>Categoría</th>
                    <th>Descripción</th>
                    <th>Fecha/Hora</th>
                    <th>Acción</th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let ticket of tickets">
                    <td>
                        <div class="checkbox">
                            <label>
                                <input type="checkbox" value="" (change)="select($event, ticket)" />
                            </label>
                        </div>
                    </td>
                    <td> 
                        <a [routerLink]="['/workshops', ticket.workshop._id]"> 
                            {{ ticket.workshop.name }} 
                        </a> 
                    </td>
                    <td>{{ ticket.category }}</td>
                    <td>{{ ticket.description }}</td>
                    <td>{{ ticket.createdAt | diffForHumans }}</td>
                    <td>
                        <a class="btn btn-primary btn-sm" [routerLink]="['/tickets', ticket._id]" >
                            <i class="fa fa-search" aria-hidden="true"></i>
                        </a>
                        &nbsp;
                        <a class="btn btn-warning btn-sm" (click)="delete(ticket)">
                            Descartar
                        </a>
                    </td>
                </tr>
            </tbody>
        </table> 
        
        </div>
    
    `,
})
export class TicketsComponent implements OnInit {
    linkingAllowed = false
    tickets: any[] = []
    selectedTickets: any[] = [] //should be Ticket Object

    constructor(private ticketService: TicketService) { 
    }

    ngOnInit() { 
        this.ticketService.getPendingTickets(null)
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
        console.log(this.selectedTickets)

        this.checkLinking()
    }

    checkLinking() {
        if(this.selectedTickets.length > 0)
            this.linkingAllowed = true
        else
            this.linkingAllowed = false
    }

    delete(ticket){
        console.log(ticket)
    }

}