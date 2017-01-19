import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { BasicValidators } from '../../shared/validators/basicValidators'
import { ReminderService } from '../services/reminder.service'
import { Router } from '@angular/router';

@Component({
    selector: 'reminder-form',
    templateUrl: 'app/reminders/templates/reminder-form.template.html',
})
export class ReminderFormComponent {
    
    form: FormGroup
    
    constructor(fb: FormBuilder, private reminderService: ReminderService, private router: Router) { 
        this.form = fb.group({
            description: ['', Validators.required],
            date: ['', Validators.compose([Validators.required, BasicValidators.date])],
            time: ['', Validators.compose([Validators.required, BasicValidators.time])]
        })
    }

    onSubmit(){
        console.log(this.form.value)
        console.log(JSON.stringify(this.form.value))

        this.reminderService.save(this.form.value)
                            .subscribe(x =>
                                this.router.navigate(['reminders'])
                            )
    }

}