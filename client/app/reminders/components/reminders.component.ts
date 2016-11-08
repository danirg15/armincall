import { Component, OnInit } from '@angular/core';
import { ReminderService } from '../services/reminder.service'

@Component({
   
    template: `
        <div class="page-header">
            <h2>Recordatorios</h2>
        </div>

        <a routerLink="/reminders/new" class="btn btn-primary btn-sm pull-right">Nuevo Recordatorio</a><br><br>

        <table class="table table-striped table-hover ">
            <thead>
                <tr>
                    <th>Descripción</th>
                    <th>Fecha/Hora</th>
                    <th>Acción</th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let reminder of reminders">
                    <td>{{reminder.description}}</td>
                    <td>
                        {{reminder.time}} {{reminder.date}} 
                        ({{reminder.ISODate | diffForHumans }})
                    <td>
            
                    <td>
                        <a class="btn btn-danger btn-sm" (click)="delete(reminder)">
                            <i  class="fa fa-trash-o" aria-hidden="true"></i>
                        </a>
                    </td>
                    
                </tr>
            </tbody>
        </table> 
    `
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