import { Component, OnInit, OnDestroy, ViewChild }  from '@angular/core';
import {CallService}    from '../services/call.service'

@Component({
    selector: 'incomming',
    templateUrl: '../templates/incomming.template.html'
})
export class IncommingComponent implements OnInit, OnDestroy {
    @ViewChild('incommingCallModal') modal;
    incommingCall = {}
    eventsConnection

    constructor(private callService: CallService) { }

    ngOnInit() { 

        this.eventsConnection = this.callService.getIncommingCalls()
                        .subscribe( incomming => {

                            console.log(incomming)

                            this.modal.open()
                            this.incommingCall = incomming

                            setTimeout(()=>{
                                this.modal.close()
                            }, 60*1000)

                        })
    }

    ngOnDestroy(){
        this.eventsConnection.unsubscribe()
    }

}