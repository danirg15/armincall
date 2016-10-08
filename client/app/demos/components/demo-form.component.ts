import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import {BasicValidators} from '../../shared/validators/basicValidators'
import {DemoService} from '../services/demo.service'
import {Router} from '@angular/router';


@Component({
    selector: 'demo-form',
    templateUrl: 'app/demos/templates/demo-form.template.html',
})
export class DemoFormComponent{

    form: FormGroup

    constructor(fb: FormBuilder, private demoService: DemoService, private router: Router) {

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

    onSubmit(){
        this.demoService.save(this.form.value)
                        .subscribe(x =>
                            this.router.navigate(['demos'])
                        )
    }


}