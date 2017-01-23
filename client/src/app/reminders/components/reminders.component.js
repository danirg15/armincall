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
var reminder_service_1 = require("../services/reminder.service");
var RemindersComponent = (function () {
    function RemindersComponent(reminderService) {
        this.reminderService = reminderService;
    }
    RemindersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.reminderService.getAll()
            .subscribe(function (reminders) { return _this.reminders = reminders; });
    };
    RemindersComponent.prototype.delete = function (reminder) {
        var _this = this;
        if (!confirm('Estas seguro que deseas eliminar'))
            return;
        var i = this.reminders.indexOf(reminder);
        this.reminders.splice(i, 1);
        this.reminderService.delete(reminder)
            .subscribe(null, function (err) {
            alert('Error al eliminar');
            _this.reminders.splice(i, 0, reminder);
        });
    };
    return RemindersComponent;
}());
RemindersComponent = __decorate([
    core_1.Component({
        template: "\n        <nav-bar></nav-bar>\n\n        <div class=\"container\">\n\n        <div class=\"page-header\">\n            <h2>Recordatorios</h2>\n        </div>\n\n        <a routerLink=\"/reminders/new\" class=\"btn btn-primary btn-sm pull-right\">Nuevo Recordatorio</a><br><br>\n\n        <table class=\"table table-striped table-hover \">\n            <thead>\n                <tr>\n                    <th>Descripci\u00F3n</th>\n                    <th>Fecha/Hora</th>\n                    <th>Acci\u00F3n</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let reminder of reminders\">\n                    <td>{{reminder.description}}</td>\n                    <td>\n                        {{reminder.time}} {{reminder.date}} \n                        ({{reminder.ISODate | diffForHumans }})\n                    <td>\n            \n                    <td>\n                        <a class=\"btn btn-danger btn-sm\" (click)=\"delete(reminder)\">\n                            <i  class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\n                        </a>\n                    </td>\n                    \n                </tr>\n            </tbody>\n        </table> \n\n        </div>\n    "
    }),
    __metadata("design:paramtypes", [reminder_service_1.ReminderService])
], RemindersComponent);
exports.RemindersComponent = RemindersComponent;
//# sourceMappingURL=reminders.component.js.map