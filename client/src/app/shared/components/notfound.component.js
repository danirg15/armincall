"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    return NotFoundComponent;
}());
NotFoundComponent = __decorate([
    core_1.Component({
        styles: ["\n            .container {\n                text-align: center;\n                display: table-cell;\n                vertical-align: middle;\n            }\n\n            .content {\n                text-align: center;\n                display: inline-block;\n            }\n\n            .title {\n                font-size: 72px;\n                margin-bottom: 40px;\n            }\n    "],
        template: "\n        <div class=\"container\">\n            <div class=\"content\">\n                <span class=\"title lead\"> <strong> Oh!</strong> Page Not Found.</span>\n            </div>\n        </div>\n    "
    })
], NotFoundComponent);
exports.NotFoundComponent = NotFoundComponent;
//# sourceMappingURL=notfound.component.js.map