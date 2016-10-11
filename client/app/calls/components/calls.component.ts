import {Component, OnInit, OnDestroy, ViewChild}  from '@angular/core';
import {CallService}        from '../services/call.service'

@Component({
    templateUrl: 'app/calls/templates/calls.template.html'
})
export class CallsComponent implements OnInit, OnDestroy {
    calls: any[] = []
    selectedCalls: any[] = []
    connection;
    incommingCall = {}
    
    @ViewChild('incommingCallModal') modal;

    constructor(private callService: CallService) { 
        
    }


    ngOnInit() { 
       // this.modal.open()

        this.callService.getPendingCalls()
                        .subscribe(calls => this.calls = calls)

        this.connection = this.callService.getNewCalls()
                              .subscribe(newCall => this.calls.push(newCall))

        this.callService.getIncommingCalls()
                        .subscribe( incomming => {
                            this.modal.open()

                            this.incommingCall = incomming

                            setTimeout(() => {
                                this.modal.close()
                            }, 10000)
                        })
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
