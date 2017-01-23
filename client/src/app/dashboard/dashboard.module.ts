import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common'

import { RouterModule }         from '@angular/router'
import { ChartsModule }         from '../charts/charts.module'
import { SharedModule }         from '../shared/shared.module'
import { CallsModule }          from '../calls/calls.module'

import { DashboardComponent }   from './components/dashboard.component';
import { SharedServices }       from '../shared/services/shared.service'

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ChartsModule, 
        SharedModule,
        CallsModule
    ],
    declarations: [DashboardComponent],
    exports: [DashboardComponent],
    providers: [SharedServices],
})
export class DashboardModule { }
