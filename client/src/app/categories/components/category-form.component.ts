import { Component, OnInit }        from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { BasicValidators }          from '../../shared/validators/basicValidators'
import { CategoryService }              from '../services/category.service'
import { Router, ActivatedRoute }   from '@angular/router';


@Component({
    selector: 'category-form',
    templateUrl: '../templates/category-form.template.html',
})
export class CategoryFormComponent implements OnInit {
    form: FormGroup
    title = 'Nueva Categoría'
    category = {'name': ''}

    constructor(fb: FormBuilder, 
                private categoryService: CategoryService, 
                private router: Router,
                private route: ActivatedRoute) {

        this.form = fb.group({
            name:  ['', Validators.required]       
        })

    }

    ngOnInit(){
        this.route.params.subscribe( params => {
            let id = params['category_id']
            if(id){
                this.categoryService.getOne(id)
                                    .subscribe(category => this.category = category)
                this.title = 'Editar Categoría'
            }
        })   
    }

    onSubmit(){
        this.route.params.subscribe( params => {
            let id = params['category_id']

            if(id){
                this.categoryService.update(id, this.form.value)
                                .subscribe(x =>
                                    this.router.navigate(['categories'])
                                )
            }
            else{
                this.categoryService.save(this.form.value)
                                .subscribe(x =>
                                    this.router.navigate(['categories'])
                                )
            }
        })   
    }


}