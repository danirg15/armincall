import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
    name: 'formattedPhone'
})
export class FormattedPhonePipe implements PipeTransform{


    transform(value: string, args: string[]){
         if(value)
             return value.slice(0, 3) + ' ' + value.slice(3, 6) + ' ' + value.slice(6, 9) 
    }

}