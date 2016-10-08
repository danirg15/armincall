import {Component, OnInit, OnDestroy}  from '@angular/core';
import {CallService}        from '../services/call.service'

@Component({
    template: `
        <div class="page-header">
            <h2>Llamadas</h2>
        </div>

        <ul class="nav nav-tabs">
            <li class="active"><a href="#home" data-toggle="tab" aria-expanded="true">Llamadas Pendientes</a></li>
            <li class=""><a href="#profile" data-toggle="tab" aria-expanded="false">Historial</a></li>
        </ul>

        <br><br>

        <table class="table table-striped table-hover ">
            <thead>
                <tr>
                    <th></th>
                    <th>Taller</th>
                    <th>Emisor</th>
                    <th>Receptor</th>
                    <th>Fecha/Hora</th>
                    <th>Duración</th>
                    <th>Estado</th>
                    <th>Acción</th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let call of calls">
                    <td>
                        <div class="checkbox">
                            <label>
                                <input type="checkbox" value="" (change)="select($event, call)" />
                            </label>
                        </div>
                    </td>
                    <td> 
                        <a [routerLink]="['/workshops', 111]"> 
                            {{call.workshop?.name}} 
                        </a> 
                    </td>
                    <td>{{call.caller_number}}</td>
                    <td>{{call.reciever_number}}</td>
                    <td>{{call.date | diffForHumans}} {{ call.date }}</td>
                    <td>{{call.durationInSeconds | durationForHumans}}</td>
                    <td>{{call.status}}</td>
                    <td>
                        <a class="btn btn-warning btn-sm" (click)="discard(call)">
                            Descartar
                        </a>
                    </td>
                    
                </tr>
            </tbody>
        </table> 
    `,
})
export class CallsComponent implements OnInit, OnDestroy {
    calls: any[] = []
    selectedCalls: any[] = []
    connection;

    constructor(private callService: CallService) { 

    }

    ngOnInit() { 
        this.callService.getPendingCalls()
                        .subscribe(calls => this.calls = calls)

        this.connection = this.callService.getNewCalls()
                              .subscribe(newCall => this.calls.push(newCall))
    }

    ngOnDestroy() {
        this.connection.unsubscribe()
    }

    select($event, call){
        if($event.target.checked){
            this.selectedCalls.push(call)
        }
        else{
            var index = this.selectedCalls.indexOf(call)
            this.selectedCalls.splice(index, 1)
        }
        console.log(this.selectedCalls)
    }

    discard(call){
        if(!confirm('¿Estas seguro que deseas descartar esta llamada?')) 
            return

        var i = this.calls.indexOf(call)
        this.calls.splice(i, 1)

        var c = call
        c.isValidated = true
        c.workshop = c.workshop._id

        this.callService.updateCall(c)
                        .subscribe(null, err => {
                            alert('Error al eliminar')
                            this.calls.splice(i, 0, call) 
                        })
        }   
    }
