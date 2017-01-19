import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
    name: 'replace'
})

export class ReplaceSubstringPipe implements PipeTransform{

    transform(value: string, args: string[]){

        // var test = value.join();

        // console.log(test)

        // test = test.replace(',', '<br>')

        return 'tester';


        // if(args && args[0] && args[1] && value){
        //     return value.replace(args[0], args[1])
        // }
        
        // return "fuck"
    }

}