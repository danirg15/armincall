import { Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service'

@Component({
    templateUrl: '../templates/demos.template.html'
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