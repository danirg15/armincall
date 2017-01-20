import { Component, OnInit }        from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { BasicValidators }          from '../../shared/validators/basicValidators'
import { DemoService }              from '../services/demo.service'
import { SharedServices }           from '../../shared/services/shared.service'
import { Router }                   from '@angular/router';


@Component({
    selector: 'demo-form',
    templateUrl: '../templates/demo-form.template.html',
})
export class DemoFormComponent implements OnInit {
    distributors: any[]
    form: FormGroup

    constructor(fb: FormBuilder, 
                private sharedServices: SharedServices,
                private demoService: DemoService, 
                private router: Router) {

        this.form = fb.group({
            name:           ['', Validators.required],
            distributor:    ['', Validators.required],
            contact:        [''],
            phone:          [''],
            date:           ['', Validators.compose([Validators.required, BasicValidators.date])],
            time:           ['', Validators.compose([Validators.required, BasicValidators.time])],
            description:    ['']
        })

    }

    ngOnInit(){
        this.sharedServices.getDistributors()
                           .subscribe( distributors => this.distributors = distributors)
    }

    onSubmit(){
        this.demoService.save(this.form.value)
                        .subscribe(x =>
                            this.router.navigate(['demos'])
                        )
    }


}