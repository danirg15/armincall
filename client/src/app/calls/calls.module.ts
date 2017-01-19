import { NgModule }      from '@angular/core'
import { CommonModule }  from '@angular/common'
import { RouterModule }  from '@angular/router'
import { SharedModule }  from '../shared/shared.module'
import { ModalModule }   from 'ng2-modal'
import { TicketsModule } from '../tickets/tickets.module'
import { CallsComponent }       from './components/calls.component'
import { IncommingComponent }   from './components/incomming.component'
import { CallService }          from './services/call.service'

@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        ModalModule, 
        SharedModule,
        TicketsModule
    ],
    declarations: [CallsComponent, IncommingComponent],
    exports: [CallsComponent],
    providers: [CallService]
})
export class CallsModule {

}