import { Router, RouterModule } from '@angular/router'

import {DashboardComponent} from './dashboard/components/dashboard.component'
import {CallsComponent}     from './calls/components/calls.component'
import {DemosComponent}     from './demos/components/demos.component'
import {TicketsComponent}   from './tickets/components/tickets.component'
import {WorkshopsComponent} from './workshops/components/workshops.component'
import {RemindersComponent} from './reminders/components/reminders.component'
import {WorkshopFormComponent} from './workshops/components/workshop-form.component' 
import {DemoFormComponent} from './demos/components/demo-form.component'
import {ReminderFormComponent} from './reminders/components/reminder-form.component'
import {NotFoundComponent}  from './shared/components/notfound.component'

export const routing = RouterModule.forRoot([ //const helps to avoid accidently modifications from other parts of the app

    { path: '',  redirectTo: 'dashboard', pathMatch: 'full'},
    
    { path: 'dashboard',           component: DashboardComponent},
    { path: 'workshops',           component: WorkshopsComponent},
    { path: 'workshops/new',       component: WorkshopFormComponent},
    { path: 'workshops/:id',       component: WorkshopFormComponent},
    { path: 'calls',               component: CallsComponent},
    { path: 'tickets',             component: TicketsComponent},
    { path: 'demos',               component: DemosComponent},
    { path: 'demos/new',           component: DemoFormComponent},
    { path: 'reminders',           component: RemindersComponent},
    { path: 'reminders/new',       component: ReminderFormComponent},
    { path: '**',                  component: NotFoundComponent}

])

