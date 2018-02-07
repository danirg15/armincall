import { Component, OnInit, OnDestroy, ViewChild }  from '@angular/core';
import { CallService }    from '../services/call.service'
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
    eventsConnection: any = null
    showmap = false

    constructor(private callService: CallService) { }

    ngOnInit() { 
        this.eventsConnection = this.callService.getIncommingCalls()
            .subscribe( incomming => {
                this.showmap = false

                this.incommingCall = <Incomming>incomming
                
                this.modal.open()
                this.showMap()


                setTimeout(()=>{
                    this.modal.close()
                    this.showmap = false
                }, 90 * 1000)

            })
    }

    ngOnDestroy(){
        this.eventsConnection.unsubscribe()
    }

    //Workaround to fix issue with modal and map
    //Map needs to be rendered after modal is fully loaded
    showMap() {
        if(this.incommingCall.workshop != null && 
           this.incommingCall.workshop.hasOwnProperty('address') && 
           this.incommingCall.workshop.address.hasOwnProperty('location')) {

            setTimeout(() => {
                this.showmap = true
            }, 500)
            
        }
    }

}