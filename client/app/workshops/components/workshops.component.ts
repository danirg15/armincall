import { Component, OnInit } from '@angular/core';
import {WorkshopService} from '../services/workshop.service'
import {ActivatedRoute} from '@angular/router';

//import {ReplacePipe} from '../../shared/pipes/replace.pipe'

@Component({
    template: `
        <div class="page-header">
            <h2>Talleres</h2>
        </div>

        <a routerLink="/workshops/new" class="btn btn-primary btn-sm pull-right">Nuevo Taller</a> <br><br>

        <table class="table table-striped table-hover ">
            <thead>
                <tr>
                    <th>Taller</th>
                    <th>Distribuidor</th>
                    <th>Teléfono</th>
                    <th>Contacto</th>
                    <th>Acción</th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let workshop of workshops">
                    <td>{{workshop.name}}</td>
                    <td>{{workshop.distributor}}</td>
                    <td> 
                        <span *ngFor="let p of workshop.phone"> {{ p }} <br> </span>
                    </td>
                    <td>{{workshop.contact}}</td>
                    <td>
                        <a class="btn btn-primary btn-sm" [routerLink]="['/workshops', workshop._id]">
                            <i class="fa fa-search" aria-hidden="true"></i>
                        </a>
                        <a class="btn btn-primary btn-sm" [routerLink]="['/tickets/new', workshop._id]">
                            <i class="fa fa-pencil-square-o" aria-hidden="true"></i>Abrir Incidencia
                        </a>
                    </td>
                    
                </tr>
            </tbody>
        </table> 
        
    `
})
export class WorkshopsComponent implements OnInit {
    workshops: any[]
    
    constructor(
        private workshopService: WorkshopService, 
        private route: ActivatedRoute) { 

    }

    ngOnInit() { 
        this.route.params.subscribe( params => {
            var keyword = params['q']
                        
            if(keyword){
                this.workshopService.search(keyword)
                                    .subscribe( workshops => this.workshops = workshops)
            }
            else{
                this.workshopService.getAll()
                                    .subscribe( workshops => this.workshops = workshops)
            }
        }) 
    }

}