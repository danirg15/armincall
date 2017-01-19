import {Component, OnInit, OnDestroy}  from '@angular/core';
import {CallService}        from '../services/call.service'

@Component({
    templateUrl: '../templates/calls.template.html'
})
export class CallsComponent implements OnInit, OnDestroy {
    calls: any[] = []
    selectedCallIds: any[] = []
    workshopIdOfSelectedCall
    connection
    
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
            this.selectedCallIds.push(call._id)
            this.workshopIdOfSelectedCall = call.workshop._id
        }
        else{
            var index = this.selectedCallIds.indexOf(call._id)
            this.selectedCallIds.splice(index, 1)
        }
        console.log(this.selectedCallIds)
    }

    discard(call){
        if(!confirm('¿Estas seguro que deseas descartar esta llamada?')) 
            return

        var i = this.calls.indexOf(call)
        this.calls.splice(i, 1)

        var c = call
        c.isValidated = true

        if(c.workshop) 
            c.workshop = c.workshop._id

        this.callService.updateCall(c)
                        .subscribe(null, err => {
                            alert('Error al eliminar')
                            this.calls.splice(i, 0, call) 
                        })
        }   
    }
