import { NgModule } from '@angular/core';

import { LoginComponent }   from './components/login.component';
import { AuthService }      from './services/auth.service'
import { AuthGuard }        from '../guards/auth-guard.service'

@NgModule({
    imports: [],
    exports: [LoginComponent],
    declarations: [LoginComponent],
    providers: [AuthService, AuthGuard],
})
export class AuthModule { }
