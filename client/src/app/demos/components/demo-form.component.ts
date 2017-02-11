import { Component, OnInit }        from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { BasicValidators }          from '../../shared/validators/basicValidators'
import { DemoService }              from '../services/demo.service'
import { SharedServices }           from '../../shared/services/shared.service'
import { Router, ActivatedRoute }   from '@angular/router';
import { Demo }                     from '../demo'


@Component({
    selector: 'demo-form',
    templateUrl: '../templates/demo-form.template.html',
})
export class DemoFormComponent implements OnInit {
    distributors: any[]
    form: FormGroup
    title = 'Nueva Demo'
    demo = new Demo();

    constructor(fb: FormBuilder, 
                private sharedServices: SharedServices,
                private demoService: DemoService, 
                private router: Router,
                private route: ActivatedRoute) {

        this.form = fb.group({
            workshop_name:  ['', Validators.required],
            distributor:    ['', Validators.required],
            contact:        [''],
            phone:          [''],
            date:           ['', Validators.compose([Validators.required, BasicValidators.date])],
            time:           ['', Validators.compose([Validators.required, BasicValidators.time])],
            description:    [''],
            comments:       ['']
        })

    }

    ngOnInit(){
        this.route.params.subscribe( params => {
            let id = params['demo_id']

            if(id){
                this.demoService.getDemo(id)
                                    .subscribe(demo => this.demo = demo)
                this.title = 'Editar Demo'
            }

            this.sharedServices.getDistributors()
                            .subscribe(distributors => this.distributors = distributors)
        })   
    }

    onSubmit(){
        this.route.params.subscribe( params => {
            let id = params['demo_id']

            if(id){
                this.demoService.updateDemo(id, this.form.value)
                                .subscribe(x =>
                                    this.router.navigate(['demos'])
                                )
            }
            else{
                this.demoService.save(this.form.value)
                                .subscribe(x =>
                                    this.router.navigate(['demos'])
                                )
            }
        })   
    }


}