import { NgModule }      from '@angular/core'
import { CommonModule }  from '@angular/common'
import { HttpModule }    from '@angular/http'
import { RouterModule }  from '@angular/router'
import { SharedModule }  from '../shared/shared.module'
import { ModalModule }   from 'ng2-modal'

import { CallsComponent }   from './components/calls.component'
import { CallService }      from './services/call.service'



@NgModule({
    imports: [
        CommonModule, 
        HttpModule, 
        RouterModule,
        ModalModule, 
        SharedModule
    ],
    declarations: [CallsComponent],
    exports: [CallsComponent],
    providers: [CallService]
})
export class CallsModule {

}