import { Router, RouterModule } from '@angular/router'

import { LoginComponent }         from './auth/components/login.component'
import { DashboardComponent }     from './dashboard/components/dashboard.component'
import { CallsComponent }         from './calls/components/calls.component'
import { TicketsComponent }       from './tickets/components/tickets.component'
import { TicketFormComponent }    from './tickets/components/ticket-form.component'
import { TicketDetailComponent }  from './tickets/components/ticket-detail.component'
import { WorkshopsComponent }     from './workshops/components/workshops.component'
import { WorkshopFormComponent }  from './workshops/components/workshop-form.component' 
import { DemosComponent }         from './demos/components/demos.component'
import { DemoFormComponent }      from './demos/components/demo-form.component'
import { RemindersComponent }     from './reminders/components/reminders.component'
import { ReminderFormComponent }  from './reminders/components/reminder-form.component'
import { NotFoundComponent }      from './shared/components/notfound.component'
import { InfoBoardComponent }   from './info-board/info-board.component';

import {AuthGuard}              from './guards/auth-guard.service'

export const routing = RouterModule.forRoot([ //const helps to avoid accidently modifications from other parts of the app
    { 
        path: '',  
        redirectTo: 'dashboard', 
        pathMatch: 'full'
    },
    { 
        path: 'login',           
        component: LoginComponent
    },
    { 
        path: 'info-board',           
        component: InfoBoardComponent,
        canActivate: [AuthGuard]
    },
    { 
        path: 'dashboard',           
        component: DashboardComponent,
        canActivate: [AuthGuard]
    },
    { 
        path: 'workshops',           
        component: WorkshopsComponent,
        canActivate: [AuthGuard]
    },
    { 
        path: 'workshops/new',       
        component: WorkshopFormComponent,
        canActivate: [AuthGuard]
    },
    { 
        path: 'workshops/:id',       
        component: WorkshopFormComponent,
        canActivate: [AuthGuard]
    },
    { 
        path: 'calls',               
        component: CallsComponent,
        canActivate: [AuthGuard]
    },
    { 
        path: 'tickets',             
        component: TicketsComponent,
        canActivate: [AuthGuard]
    },
    { 
        path: 'tickets/:id',             
        component: TicketDetailComponent,
        canActivate: [AuthGuard]
    },
    { 
        path: 'tickets/new/:workshop_id',             
        component: TicketFormComponent,
        canActivate: [AuthGuard]
    },
    { 
        path: 'demos',               
        component: DemosComponent,
        canActivate: [AuthGuard]
    },
    { 
        path: 'demos/new',           
        component: DemoFormComponent,
        canActivate: [AuthGuard]
    },
    { 
        path: 'demos/new/:demo_id',           
        component: DemoFormComponent,
        canActivate: [AuthGuard]
    },
    { 
        path: 'reminders',           
        component: RemindersComponent,
        canActivate: [AuthGuard]
    },
    { 
        path: 'reminders/new',       
        component: ReminderFormComponent,
        canActivate: [AuthGuard]
    },
    { 
        path: '**',                  
        component: NotFoundComponent
    }

])

