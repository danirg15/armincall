import {Pipe, PipeTransform} from '@angular/core'
import * as moment from 'moment';
import 'moment/locale/es';


@Pipe({
    name: 'diffForHumans'
})
export class DiffForHumansPipe implements PipeTransform{

    transform(value: string, args: string[]){
         if(value)
             return moment(value, moment.ISO_8601).fromNow()
    }

}