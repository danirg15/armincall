"use strict";
var BasicValidators = (function () {
    function BasicValidators() {
    }
    BasicValidators.email = function (control) {
        var regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var valid = regEx.test(control.value);
        return valid ? null : { email: true };
    };
    BasicValidators.phone = function (control) {
        var regEx = /^(\d+)(,\s*\d+)*$/;
        var valid = regEx.test(control.value);
        return valid ? null : { phone: true };
    };
    BasicValidators.time = function (control) {
        var regEx = /([01]\d|2[0-3]):([0-5]\d)/;
        var valid = regEx.test(control.value);
        return valid ? null : { time: true };
    };
    BasicValidators.date = function (control) {
        var regEx = /^\d{2}[./-]\d{2}[./-]\d{4}$/;
        var valid = regEx.test(control.value);
        return valid ? null : { date: true };
    };
    return BasicValidators;
}());
exports.BasicValidators = BasicValidators;
//# sourceMappingURL=basicValidators.js.map