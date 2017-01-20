import { Component, OnInit }    from '@angular/core';
import { ReminderService }      from '../services/reminder.service'

@Component({
    templateUrl: '../templates/reminders.template.html'
})
export class RemindersComponent implements OnInit {
    reminders: any[]

    constructor(private reminderService: ReminderService) { 

    }

    ngOnInit() { 
        this.reminderService.getAll()
                            .subscribe( reminders => this.reminders = reminders)
    }

    delete(reminder){
        if(!confirm('Estas seguro que deseas eliminar'))
            return

        var i = this.reminders.indexOf(reminder)
        this.reminders.splice(i, 1)

        this.reminderService.delete(reminder)
                            .subscribe(null,
                            err => {
                                alert('Error al eliminar')
                                this.reminders.splice(i, 0, reminder)   
                            })
    }


}