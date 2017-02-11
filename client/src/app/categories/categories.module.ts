import { NgModule }             from '@angular/core'
import { CommonModule }         from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule }         from '@angular/router'

//import { DemosComponent }       from './components/demos.component'
//import { DemoFormComponent }    from './components/demo-form.component'

import { CategoryService }          from './services/category.service'


@NgModule({
    imports: [
        CommonModule, 
        FormsModule,
        RouterModule,
        ReactiveFormsModule,
    ],
    declarations: [
        
    ],
    exports: [
       
    ],
    providers: [CategoryService]
})

export class CategoriesModule {

}