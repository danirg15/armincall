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
require("rxjs/add/operator/map");
var ReminderService = (function () {
    function ReminderService(http) {
        this.http = http;
        this.url = "/api/reminders/";
    }
    ReminderService.prototype.save = function (reminder) {
        return this.http.post(this.url, reminder);
    };
    ReminderService.prototype.getAll = function () {
        return this.http.get(this.url);
    };
    ReminderService.prototype.delete = function (reminder) {
        return this.http.delete(this.url + reminder._id);
    };
    return ReminderService;
}());
ReminderService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_services_1.HttpServices])
], ReminderService);
exports.ReminderService = ReminderService;
//# sourceMappingURL=reminder.service.js.map