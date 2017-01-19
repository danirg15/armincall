import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'

import { LoginComponent }   from './components/login.component';
import { AuthService }      from './services/auth.service'
import { AuthGuard }        from '../guards/auth-guard.service'

import { SharedModule }     from '../shared/shared.module'

@NgModule({
    imports: [
        SharedModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule
    ],
    exports: [LoginComponent],
    declarations: [LoginComponent],
    providers: [AuthService, AuthGuard],
})
export class AuthModule { }
