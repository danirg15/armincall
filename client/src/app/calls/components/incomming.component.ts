import { Component, OnInit, OnDestroy, ViewChild }  from '@angular/core';
import {CallService}    from '../services/call.service'
import { Workshop } from '../../workshops/workshop'
import { Ticket } from '../../tickets/ticket'
import { Incomming } from '../incomming'

@Component({
    selector: 'incomming',
    templateUrl: '../templates/incomming.template.html'
})
export class IncommingComponent implements OnInit, OnDestroy {
    @ViewChild('incommingCallModal') modal;
    incommingCall = new Incomming()
    eventsConnection

    constructor(private callService: CallService) { }

    ngOnInit() { 

        this.eventsConnection = this.callService.getIncommingCalls()
                        .subscribe( incomming => {
                            
                            this.modal.open()
                            this.incommingCall = <Incomming>incomming

                            setTimeout(()=>{
                                this.modal.close()
                            }, 60*1000)

                        })
    }

    ngOnDestroy(){
        this.eventsConnection.unsubscribe()
    }

}