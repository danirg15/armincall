import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

import { AuthService } from '../services/auth.service'



@Component({
    selector: 'login',
    templateUrl: 'app/auth/templates/login.html',
    styleUrls: ['app/auth/templates/style.css']
})
export class LoginComponent implements OnInit {
    form: FormGroup
    message = ''

    constructor(fb: FormBuilder, private authService: AuthService) {
        this.form = fb.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        })
    }

    ngOnInit() { }

    onSubmit() {
        if(this.form.valid){
            this.authService.login(this.form.value.username, this.form.value.password, (msg) => {
                this.message = msg
            })
        }
    }
}