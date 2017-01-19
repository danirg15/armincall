import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import {CallService}        from '../services/call.service'
import { Subject } from 'rxjs/Subject';

@Component({
    selector: 'incomming',
    template: `
        <modal #incommingCallModal 
                title="Llamada entrante"
                modalClass="modal-lg"
                [hideCloseButton]="false"
                [closeOnEscape]="true"
                [closeOnOutsideClick]="true"
        >

            <modal-header>
                <h2 class="text-center" *ngIf="incommingCall.workshop">
                    {{incommingCall.workshop?.name}}
                    <small>{{incommingCall.number}}</small>
                </h2>
                <h2 class="text-center" *ngIf="!incommingCall.workshop">
                    {{incommingCall.number}}
                </h2>

            </modal-header>

            <modal-content>

                <div class="row">
                    <div class="col-md-5">  
                        <form class="form-horizontal">
                            <div class="form-group">
                                <label class="col-lg-3 control-label">Contacto:</label>
                                <div class="col-lg-9">
                                    <input type="text" class="form-control" readonly 
                                    value="{{incommingCall.workshop?.contact}}">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-lg-3 control-label">Distribuidor:</label>
                                <div class="col-lg-9">
                                    <input type="text" class="form-control" readonly value="Ramirez">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-lg-3 control-label">Dirección:</label>
                                <div class="col-lg-9">
                                    <input type="text" class="form-control" readonly value="Ramirez">
                                </div>
                            </div>
                        </form>
                    </div>

                    <div class="col-md-offset-2 col-md-5">  
                        <div *ngIf="incommingCall.workshop">
                            <div class="form-group">
                                <label><u>Nueva Incidencia</u></label>
                                <textarea #description class="form-control" rows="3"></textarea>
                            </div>
                            <button class="btn btn-primary btn-sm"
                                     (click)="saveTicket(incommingCall.workshop, description.value)">
                                     Guardar
                            </button>      
                        </div>
                    </div>

                </div>
                
                <br>

                <div class="panel panel-warning">
                    <div class="panel-heading">
                        <h3 class="panel-title">Incidencias Activas</h3>
                    </div>
                    <div class="panel-body">
                        <table class="table table-striped table-hover ">
                            <thead>
                                <tr>
                                    <th>Fecha/Hora</th>
                                    <th>Descripción</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr *ngFor="let ticket of incommingCall.tickets">
                                    <td>{{ticket.createdAt | diffForHumans}}</td>
                                    <td>{{ticket.description}}</td>
                                </tr>
                            </tbody>
                        </table> 
                    </div>
                </div>

            </modal-content>

            <modal-footer>
            </modal-footer>

        </modal>
    
    
    
    `
})
export class IncommingComponent implements OnInit, OnDestroy {
    @ViewChild('incommingCallModal') modal;
    incommingCall = {}
    connection

    constructor(private callService: CallService) { }

    ngOnInit() { 
        this.connection = this.callService.getIncommingCalls()
                        .subscribe( incomming => {
                            this.modal.open()

                            this.incommingCall = incomming

                        })
    }

    ngOnDestroy(){
        this.connection.unsubscribe()
    }

    saveTicket(workshop, description){
        console.log(description)
        console.log(workshop)
    }

}