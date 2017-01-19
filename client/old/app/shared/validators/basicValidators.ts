import { FormControl } from '@angular/forms';

export class BasicValidators {

    static email(control: FormControl){
        var regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var valid = regEx.test(control.value);
        return valid ? null : { email: true };
    }

    static phone(control: FormControl){
        var regEx = /^(\d+)(,\s*\d+)*$/;
        var valid = regEx.test(control.value);
        return valid ? null : { phone: true };
    }

    static time(control: FormControl){
        var regEx = /([01]\d|2[0-3]):([0-5]\d)/;
        var valid = regEx.test(control.value);
        return valid ? null : { time: true };
    }

    static date(control: FormControl){
        var regEx = /^\d{2}[./-]\d{2}[./-]\d{4}$/;
        var valid = regEx.test(control.value);
        return valid ? null : { date: true };
    }



}


