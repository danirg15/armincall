import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { SharedModule } from '../shared/shared.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { ReminderFormComponent } from './components/reminder-form.component'
import { RemindersComponent } from './components/reminders.component'

import { ReminderService } from './services/reminder.service'

@NgModule({
    imports: [
        CommonModule, 
        FormsModule,
        RouterModule,
        ReactiveFormsModule,
        SharedModule
    ],
    declarations: [
        RemindersComponent, 
        ReminderFormComponent
    ],
    exports: [
        RemindersComponent, 
        ReminderFormComponent
    ],
    providers: [ReminderService]
})

export class RemindersModule {

}