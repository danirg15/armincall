import { NgModule }             from '@angular/core'
import { CommonModule }         from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule }         from '@angular/router'
import { SharedModule }         from '../shared/shared.module'
 
import { CategoriesComponent }      from './components/categories.component'
import { CategoryFormComponent }    from './components/category-form.component'

import { CategoryService }          from './services/category.service'


@NgModule({
    imports: [
        CommonModule, 
        FormsModule,
        RouterModule,
        ReactiveFormsModule,
        SharedModule
    ],
    declarations: [
        CategoriesComponent,
        CategoryFormComponent
    ],
    exports: [
       CategoriesComponent,
       CategoryFormComponent
    ],
    providers: [CategoryService]
})

export class CategoriesModule {

}