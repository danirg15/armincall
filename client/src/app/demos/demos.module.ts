import { NgModule }             from '@angular/core'
import { CommonModule }         from '@angular/common'
import { SharedModule }         from '../shared/shared.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule }         from '@angular/router'

import { DemosComponent }       from './components/demos.component'
import { DemoFormComponent }    from './components/demo-form.component'

import { DemoService }          from './services/demo.service'



@NgModule({
    imports: [
        CommonModule, 
        FormsModule,
        RouterModule,
        ReactiveFormsModule,
        SharedModule,
    ],
    declarations: [
        DemosComponent, 
        DemoFormComponent
    ],
    exports: [
        DemosComponent, 
        DemoFormComponent
    ],
    providers: [DemoService]
})

export class DemosModule {

}