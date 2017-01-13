import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { SharedModule } from '../shared/shared.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ModalModule }   from 'ng2-modal'

import { TicketFormComponent } from './components/ticket-form.component'
import { TicketsComponent } from './components/tickets.component'
import { TicketsOfWorkshopComponent } from './components/tickets-of-workshop.component'

import { WorkshopsModule } from '../workshops/workshops.module'

import { TicketService } from './services/ticket.service'


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        ModalModule,
        WorkshopsModule
    ],
    declarations: [
        TicketsComponent,
        TicketFormComponent,
        TicketsOfWorkshopComponent
    ],
    exports: [
        TicketsComponent,
        TicketFormComponent,
        TicketsOfWorkshopComponent
    ],
    providers: [
        TicketService
    ]
})

export class TicketsModule {


}