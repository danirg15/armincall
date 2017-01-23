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
var http_services_1 = require("../../shared/services/http.services");
var core_1 = require("@angular/core");
var WorkshopService = (function () {
    function WorkshopService(http) {
        this.http = http;
        this.url = "/api/workshops/";
    }
    WorkshopService.prototype.save = function (workshop) {
        return this.http.post(this.url, workshop);
    };
    WorkshopService.prototype.getWorkshop = function (id) {
        return this.http.get(this.url + id);
    };
    WorkshopService.prototype.getAll = function () {
        return this.http.get(this.url);
    };
    WorkshopService.prototype.updateWorkshop = function (id, workshop) {
        return this.http.put(this.url + id, workshop);
    };
    WorkshopService.prototype.search = function (keyword) {
        return this.http.get(this.url + '?q=' + keyword);
    };
    return WorkshopService;
}());
WorkshopService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_services_1.HttpServices])
], WorkshopService);
exports.WorkshopService = WorkshopService;
//# sourceMappingURL=workshop.service.js.map