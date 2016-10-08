import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { AppComponent }     from './app.component';

import { CallsModule }      from './calls/calls.module'
import { DemosModule }      from './demos/demos.module'
import { RemindersModule }  from './reminders/reminders.module'
import { SharedModule }     from './shared/shared.module'
import { TicketsModule }    from './tickets/tickets.module'
import { WorkshopsModule }  from './workshops/workshops.module'

import { DashboardModule }  from './dashboard/dashboard.module'
//import { NavBarComponent }    from './shared/components/nav-bar.component'
import { routing }          from './app.routing';
 


@NgModule({
  imports:  [ 
    BrowserModule, 
    CallsModule,
    DemosModule,
    RemindersModule,
    SharedModule,
    TicketsModule,
    WorkshopsModule,
    DashboardModule,
    routing 
  ],
  declarations: [ 
    AppComponent 
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
