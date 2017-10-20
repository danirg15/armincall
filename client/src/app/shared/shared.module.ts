import { NgModule }                 from '@angular/core'
import { CommonModule }             from '@angular/common'
import { RouterModule }             from '@angular/router'
import { AgmCoreModule }            from '@agm/core';

import { NavBarComponent }          from './components/nav-bar.component'
import { NotFoundComponent }        from './components/notfound.component'
import { PanelComponent }           from './components/panel.component'
import { GoBackComponent }          from './components/go-back.component'
import { MapComponent }          from './components/map.component'


import { SharedServices }           from './services/shared.service'
import { HttpServices }             from './services/http.services'
import { AuthService }              from '../auth/services/auth.service'

import { DiffForHumansPipe }        from './pipes/diffForHumans.pipe'
import { DurationForHumansPipe }    from './pipes/durationForHumans.pipe'
import { HumanizeDatePipe }         from './pipes/humanizeDate.pipe'
import { FormattedPhonePipe }       from './pipes/formattedPhone.pipe'


@NgModule({
    imports: [
        CommonModule, 
        RouterModule,    
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyCc7Ddn819UFyZxZCjlQyNiCPMoUO_FTNM'
        })
    ],
    declarations: [
        NavBarComponent, 
        NotFoundComponent, 
        PanelComponent,
        GoBackComponent,
        MapComponent,

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
        FormattedPhonePipe,
        MapComponent

    ],
    providers:[SharedServices, HttpServices, AuthService]
})
export class SharedModule {

}
