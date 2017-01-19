import {Pipe, PipeTransform} from '@angular/core'
import * as moment from 'moment';
import 'moment/locale/es';


@Pipe({
    name: 'humanizeDate'
})
export class HumanizeDatePipe implements PipeTransform{
    transform(value: string, args: string[]){
         if(value)
             return moment(value, moment.ISO_8601).format("D MMM YYYY, HH:mm");
    }

}