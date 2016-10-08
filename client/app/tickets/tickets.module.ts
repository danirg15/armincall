import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { SharedModule } from '../shared/shared.module'
import { FormsModule } from '@angular/forms'
 
import { TicketFormComponent } from './components/ticket-form.component'
import { TicketsComponent } from './components/tickets.component'

import { TicketService } from './services/ticket.service'


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        SharedModule,
        FormsModule
    ],
    declarations: [
        TicketsComponent,
        TicketFormComponent
    ],
    exports: [
        TicketsComponent,
        TicketFormComponent
    ],
    providers: [
        TicketService
    ]
})

export class TicketsModule {


}