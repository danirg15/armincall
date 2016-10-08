import { Component, OnInit } from '@angular/core';

@Component({
    template: `
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
                    <td>{{ ticket.created_at | diffForHumans }} add tooltip with date details</td>
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
        
    
    `,
})
export class TicketsComponent implements OnInit {
    linkingAllowed = false
    tickets: any[] = []
    selectedTickets: any[] = [] //should be Ticket Object

    constructor() { 
        
    }

    ngOnInit() { 

        this.tickets.push({
            _id: '99',
            workshop: {
                _id: '11111', 
                name: 'Talleres Dani'
            },
            category: 'Category X',
            description: 'lorem ipsum',
            created_at: 'dating'
        })

        this.tickets.push({
            _id: '99',
            workshop: {
                _id: '11111', 
                name: 'Talleres Dani'
            },
            category: 'Category X',
            description: 'lorem ipsum',
            created_at: 'dating'
        })

        console.log(this.tickets)
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