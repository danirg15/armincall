"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var moment = require("moment");
require("moment/locale/es");
var DurationForHumansPipe = (function () {
    function DurationForHumansPipe() {
    }
    DurationForHumansPipe.prototype.transform = function (value, args) {
        //const timing = (args && args[0]) ? args[0] : 'seconds'
        if (value)
            return moment.duration(parseInt(value), 'seconds').humanize();
    };
    return DurationForHumansPipe;
}());
DurationForHumansPipe = __decorate([
    core_1.Pipe({
        name: 'durationForHumans'
    })
], DurationForHumansPipe);
exports.DurationForHumansPipe = DurationForHumansPipe;
//# sourceMappingURL=durationForHumans.pipe.js.map