import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service'

@Component({
    templateUrl: '../templates/categories.template.html'
})
export class CategoriesComponent implements OnInit {
    categories: any[]

    constructor(private categoryService: CategoryService) { 

    }

    ngOnInit() { 
        this.categoryService.getAll()
                            .subscribe( categories => this.categories = categories)
    }


    delete(category){
        if(!confirm('Estas seguro que deseas eliminar'))
            return

        var i = this.categories.indexOf(category)
        this.categories.splice(i, 1)

        this.categoryService.delete(category._id)
                        .subscribe(null,
                        err => {
                            alert('Error al eliminar')
                            this.categories.splice(i, 0, category)   
                        })   
    }

}