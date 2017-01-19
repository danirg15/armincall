import {Pipe, PipeTransform} from '@angular/core'
import * as moment from 'moment';
import 'moment/locale/es';


@Pipe({
    name: 'durationForHumans'
})

export class DurationForHumansPipe implements PipeTransform{

    transform(value: string, args: string[]){
        //const timing = (args && args[0]) ? args[0] : 'seconds'

        if(value)
            return moment.duration(parseInt(value), 'seconds').humanize()
    }

}