import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule }  from '@angular/router'

import { NavBarComponent } from './components/nav-bar.component'
import { NotFoundComponent } from './components/notfound.component'
import { PanelComponent } from './components/panel.component'

import { SharedServices } from './services/shared.service'

import { DiffForHumansPipe }  from './pipes/diffForHumans.pipe'
import { DurationForHumansPipe } from './pipes/durationForHumans.pipe'
import { ReplaceSubstringPipe } from './pipes/replaceSubstring.pipe'

import { PopoverModule } from 'ng2-popover'
import { ModalModule } from 'ng2-modal'
 
@NgModule({
    imports: [
        CommonModule, 
        RouterModule,
        PopoverModule,
        ModalModule
    ],
    declarations: [
        NavBarComponent, 
        NotFoundComponent, 
        PanelComponent,

        DiffForHumansPipe,
        DurationForHumansPipe,
        ReplaceSubstringPipe
    ],
    exports: [
        NavBarComponent, 
        NotFoundComponent, 
        PanelComponent,

        DiffForHumansPipe,
        DurationForHumansPipe,
        ReplaceSubstringPipe,

    ],
    providers:[SharedServices]
})
export class SharedModule {

}
