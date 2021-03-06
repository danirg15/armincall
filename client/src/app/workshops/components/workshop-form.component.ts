import {Component, OnInit}      from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {Router, ActivatedRoute} from '@angular/router';

import {BasicValidators}    from '../../shared/validators/basicValidators'
import {WorkshopService}    from '../services/workshop.service'
import {SharedServices}     from '../../shared/services/shared.service'
import {Workshop}           from '../workshop'


@Component({
    selector: 'workshop-form',
    templateUrl: '../templates/workshop-form.template.html',
})
export class WorkshopFormComponent implements OnInit { 
    form: FormGroup
    workshop = new Workshop()
    title = 'Nuevo Taller'

    distributors: any[]
    dmss: any[] = []

    constructor(fb: FormBuilder, 
                private workshopService: WorkshopService,
                private sharedServices: SharedServices, 
                private router: Router,
                private route: ActivatedRoute){

        this.form = fb.group({
            name:           ['', Validators.required],
            cif:            [''],
            contact:        [''],
            address: fb.group({
                description: ['']
            }),
            distributor:    ['', Validators.required],
            current_dms:    [''],
            previous_dms:   [''],
            email:          ['', BasicValidators.email],
            phone:          ['', Validators.compose([Validators.required, 
                                                     BasicValidators.phone])]
        })
    }

    ngOnInit(){
        this.workshop.phone = this.route.snapshot.params['number']

        this.route.params.subscribe( params => {
            let id = params['id']

            if(id){
                this.workshopService.getWorkshop(id)
                                    .subscribe(workshop => this.workshop = workshop)
                this.title = 'Editar Taller'
            }

            this.sharedServices.getDistributors()
                            .subscribe(distributors => this.distributors = distributors)
            this.sharedServices.getDmss()
                            .subscribe(dmss => this.dmss = dmss)
        })    
    }

    onSubmit($event){      
        this.form.value.phone = this.form.value.phone.toString().split(',')

        this.route.params.subscribe( params => {
            let id = params['id']

            if(id){
                this.workshopService.updateWorkshop(id, this.form.value)
                                    .subscribe(null, err => alert('Error al guardar'))
            }
            else{
                this.workshopService.save(this.form.value)
                                    .subscribe(null)
            }

            this.router.navigate(['/workshops'])
        })       

        $event.preventDefault()
        this.workshopService.matchCallsWithWorkshops().subscribe()
    }


    



}