import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { SharedModule } from '../shared/shared.module'

import { WorkshopsComponent } from './components/workshops.component'
import { WorkshopFormComponent } from './components/workshop-form.component'

import { WorkshopService } from './services/workshop.service'


@NgModule({
    imports: [
        CommonModule, 
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule
    ],
    declarations: [
        WorkshopsComponent, 
        WorkshopFormComponent
    ],
    exports: [
        WorkshopsComponent, 
        WorkshopFormComponent
    ],
    providers: [WorkshopService]
})

export class WorkshopsModule {

}