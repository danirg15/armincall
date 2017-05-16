import { NgModule }                 from '@angular/core'
import { CommonModule }             from '@angular/common'
import { RouterModule }             from '@angular/router'

import { NavBarComponent }          from './components/nav-bar.component'
import { NotFoundComponent }        from './components/notfound.component'
import { PanelComponent }           from './components/panel.component'
import { GoBackComponent }          from './components/go-back.component'

import { SharedServices }           from './services/shared.service'
import { HttpServices }             from './services/http.services'
import { AuthService }              from '../auth/services/auth.service'

import { DiffForHumansPipe }        from './pipes/diffForHumans.pipe'
import { DurationForHumansPipe }    from './pipes/durationForHumans.pipe'
import { HumanizeDatePipe }         from './pipes/humanizeDate.pipe'
import { FormattedPhonePipe }         from './pipes/formattedPhone.pipe'


import { PopoverModule }            from 'ng2-popover'
 
@NgModule({
    imports: [
        CommonModule, 
        RouterModule,
        PopoverModule
    ],
    declarations: [
        NavBarComponent, 
        NotFoundComponent, 
        PanelComponent,
        GoBackComponent,

        DiffForHumansPipe,
        DurationForHumansPipe,
        HumanizeDatePipe,
        FormattedPhonePipe
    ],
    exports: [
        NavBarComponent, 
        NotFoundComponent, 
        PanelComponent,
        GoBackComponent,

        DiffForHumansPipe,
        DurationForHumansPipe,
        HumanizeDatePipe,
        FormattedPhonePipe

    ],
    providers:[SharedServices, HttpServices, AuthService]
})
export class SharedModule {

}
