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
var workshop_service_1 = require("../services/workshop.service");
var router_1 = require("@angular/router");
//import {ReplacePipe} from '../../shared/pipes/replace.pipe'
var WorkshopsComponent = (function () {
    function WorkshopsComponent(workshopService, route) {
        this.workshopService = workshopService;
        this.route = route;
    }
    WorkshopsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var keyword = params['q'];
            if (keyword) {
                _this.workshopService.search(keyword)
                    .subscribe(function (workshops) { return _this.workshops = workshops; });
            }
            else {
                _this.workshopService.getAll()
                    .subscribe(function (workshops) { return _this.workshops = workshops; });
            }
        });
    };
    return WorkshopsComponent;
}());
WorkshopsComponent = __decorate([
    core_1.Component({
        template: "\n        <nav-bar></nav-bar>\n\n        <div class=\"container\">\n\n        <div class=\"page-header\">\n            <h2>Talleres</h2>\n        </div>\n\n        <a routerLink=\"/workshops/new\" class=\"btn btn-primary btn-sm pull-right\">Nuevo Taller</a> <br><br>\n\n        <table class=\"table table-striped table-hover \">\n            <thead>\n                <tr>\n                    <th>Taller</th>\n                    <th>Distribuidor</th>\n                    <th>Tel\u00E9fono</th>\n                    <th>Contacto</th>\n                    <th>Acci\u00F3n</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let workshop of workshops\">\n                    <td>{{workshop.name}}</td>\n                    <td>{{workshop.distributor}}</td>\n                    <td> \n                        <span *ngFor=\"let p of workshop.phone\"> {{ p }} <br> </span>\n                    </td>\n                    <td>{{workshop.contact}}</td>\n                    <td>\n                        <a class=\"btn btn-primary btn-sm\" [routerLink]=\"['/workshops', workshop._id]\">\n                            <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n                        </a>\n                        <a class=\"btn btn-primary btn-sm\" [routerLink]=\"['/tickets/new', workshop._id]\">\n                            <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>Abrir Incidencia\n                        </a>\n                    </td>\n                    \n                </tr>\n            </tbody>\n        </table> \n        \n        </div>\n    "
    }),
    __metadata("design:paramtypes", [workshop_service_1.WorkshopService,
        router_1.ActivatedRoute])
], WorkshopsComponent);
exports.WorkshopsComponent = WorkshopsComponent;
//# sourceMappingURL=workshops.component.js.map