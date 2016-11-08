import { Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service'

@Component({
    template: `
        <div class="page-header">
            <h2>Demos</h2>
        </div>

        <a routerLink="/demos/new" class="btn btn-primary btn-sm pull-right">Nueva Demo</a> <br><br>

        <table class="table table-striped table-hover ">
            <thead>
                <tr>
                    <th>Taller</th>
                    <th>Contacto</th>
                    <th>Teléfono</th>
                    <th>Descripción</th>
                    <th>Fecha/Hora</th>
                    <th>Acción</th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let demo of demos">
                    <td>{{demo.name }} ({{demo.distributor}})</td>
                    <td>{{demo.contact}}</td>
                    <td>{{demo.phone}}</td>
                    <td>{{demo.description}}</td>
                    <td>
                        {{demo.time}} {{demo.date}} 
                        ({{demo.ISODate | diffForHumans}})
                    </td>
                    <td>
                        <a class="btn btn-danger btn-sm" (click)="delete(demo)">
                            <i  class="fa fa-trash-o" aria-hidden="true"></i>
                        </a>
                    </td>
                </tr>
            </tbody>
        </table> 

    `
})
export class DemosComponent implements OnInit {
    demos: any[]

    
    constructor(private demoService: DemoService) { 

    }

    ngOnInit() { 
        this.demoService.getAll()
                        .subscribe( demos => this.demos = demos)
    }


    delete(demo){
        if(!confirm('Estas seguro que deseas eliminar'))
            return

        var i = this.demos.indexOf(demo)
        this.demos.splice(i, 1)

        this.demoService.delete(demo)
                        .subscribe(null,
                        err => {
                            alert('Error al eliminar')
                            this.demos.splice(i, 0, demo)   
                        })
        
    }

}