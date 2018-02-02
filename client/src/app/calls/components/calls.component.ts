import {Component, OnInit, OnDestroy}  from '@angular/core';
import {CallService}        from '../services/call.service'
import * as consts          from '../../config/constants'

@Component({
    templateUrl: '../templates/calls.template.html'
})
export class CallsComponent implements OnInit, OnDestroy {
    calls: any[] = []
    selectedCallIds: any[] = []
    workshopIdOfSelectedCall
    eventsConnection
    isShowingHistory = false
    consts: object = consts
    
    page = 1
    pageLimit = 10
    totalPages = 1

    constructor(private callService: CallService) { 

    }


    ngOnInit() { 
        this.loadPendingCalls()   
        this.callService.getNumberOfCalls()
                        .subscribe(n => this.totalPages = Math.ceil(n / this.pageLimit))

        this.eventsConnection = this.callService.getNewCalls()
                              .subscribe(newCall => this.calls.unshift(newCall))
    }
    
    ngOnDestroy() {
        this.eventsConnection.unsubscribe()
    }

    loadHistoryCalls() {
        this.isShowingHistory = true
        this.callService.getCalls(this.page, this.pageLimit)
                        .subscribe(calls => this.calls = calls)
    }

    loadPendingCalls() {
        this.isShowingHistory = false
        this.callService.getPendingCalls()
                        .subscribe(calls => this.calls = calls)
    }

    nextPage() {
        if(this.calls.length !== 0) {
            this.page++
            this.loadHistoryCalls()
        }
    }

    prevPage() {
        if(this.page > 1) {
            this.page--
            this.loadHistoryCalls()
        }
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
