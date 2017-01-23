"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var ReplaceSubstringPipe = (function () {
    function ReplaceSubstringPipe() {
    }
    ReplaceSubstringPipe.prototype.transform = function (value, args) {
        // var test = value.join();
        // console.log(test)
        // test = test.replace(',', '<br>')
        return 'tester';
        // if(args && args[0] && args[1] && value){
        //     return value.replace(args[0], args[1])
        // }
        // return "fuck"
    };
    return ReplaceSubstringPipe;
}());
ReplaceSubstringPipe = __decorate([
    core_1.Pipe({
        name: 'replace'
    })
], ReplaceSubstringPipe);
exports.ReplaceSubstringPipe = ReplaceSubstringPipe;
//# sourceMappingURL=replaceSubstring.pipe.js.map