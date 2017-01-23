"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var demo_service_1 = require("../services/demo.service");
var DemosComponent = (function () {
    function DemosComponent(demoService) {
        this.demoService = demoService;
    }
    DemosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.demoService.getAll()
            .subscribe(function (demos) { return _this.demos = demos; });
    };
    DemosComponent.prototype.delete = function (demo) {
        var _this = this;
        if (!confirm('Estas seguro que deseas eliminar'))
            return;
        var i = this.demos.indexOf(demo);
        this.demos.splice(i, 1);
        this.demoService.delete(demo)
            .subscribe(null, function (err) {
            alert('Error al eliminar');
            _this.demos.splice(i, 0, demo);
        });
    };
    return DemosComponent;
}());
DemosComponent = __decorate([
    core_1.Component({
        template: "\n        <nav-bar></nav-bar>\n\n        <div class=\"container\">\n\n        <div class=\"page-header\">\n            <h2>Demos</h2>\n        </div>\n\n        <a routerLink=\"/demos/new\" class=\"btn btn-primary btn-sm pull-right\">Nueva Demo</a> <br><br>\n\n        <table class=\"table table-striped table-hover \">\n            <thead>\n                <tr>\n                    <th>Taller</th>\n                    <th>Contacto</th>\n                    <th>Tel\u00E9fono</th>\n                    <th>Descripci\u00F3n</th>\n                    <th>Fecha/Hora</th>\n                    <th>Acci\u00F3n</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let demo of demos\">\n                    <td>{{demo.name }} ({{demo.distributor}})</td>\n                    <td>{{demo.contact}}</td>\n                    <td>{{demo.phone}}</td>\n                    <td>{{demo.description}}</td>\n                    <td>\n                        {{demo.time}} {{demo.date}} \n                        ({{demo.ISODate | diffForHumans}})\n                    </td>\n                    <td>\n                        <a class=\"btn btn-danger btn-sm\" (click)=\"delete(demo)\">\n                            <i  class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\n                        </a>\n                    </td>\n                </tr>\n            </tbody>\n        </table> \n\n        </div>\n\n    "
    }),
    __metadata("design:paramtypes", [demo_service_1.DemoService])
], DemosComponent);
exports.DemosComponent = DemosComponent;
//# sourceMappingURL=demos.component.js.map