import { NgModule }      from '@angular/core'
import { CommonModule }  from '@angular/common'
import { RouterModule }  from '@angular/router'
import { SharedModule }  from '../shared/shared.module'
import { ModalModule }   from 'ng2-modal'
import { TicketsModule } from '../tickets/tickets.module'
import { CallsComponent }       from './components/calls.component'
import { IncommingComponent }   from './components/incomming.component'
import { CallService }          from './services/call.service'
import {Ng2PaginationModule} from 'ng2-pagination'


@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        ModalModule, 
        SharedModule,
        TicketsModule,
        Ng2PaginationModule
    ],
    declarations: [CallsComponent, IncommingComponent],
    exports: [CallsComponent, IncommingComponent],
    providers: [CallService]
})
export class CallsModule {

}