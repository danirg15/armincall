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
var forms_1 = require("@angular/forms");
var basicValidators_1 = require("../../shared/validators/basicValidators");
var reminder_service_1 = require("../services/reminder.service");
var router_1 = require("@angular/router");
var ReminderFormComponent = (function () {
    function ReminderFormComponent(fb, reminderService, router) {
        this.reminderService = reminderService;
        this.router = router;
        this.form = fb.group({
            description: ['', forms_1.Validators.required],
            date: ['', forms_1.Validators.compose([forms_1.Validators.required, basicValidators_1.BasicValidators.date])],
            time: ['', forms_1.Validators.compose([forms_1.Validators.required, basicValidators_1.BasicValidators.time])]
        });
    }
    ReminderFormComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.form.value);
        console.log(JSON.stringify(this.form.value));
        this.reminderService.save(this.form.value)
            .subscribe(function (x) {
            return _this.router.navigate(['reminders']);
        });
    };
    return ReminderFormComponent;
}());
ReminderFormComponent = __decorate([
    core_1.Component({
        selector: 'reminder-form',
        templateUrl: 'app/reminders/templates/reminder-form.template.html',
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, reminder_service_1.ReminderService, router_1.Router])
], ReminderFormComponent);
exports.ReminderFormComponent = ReminderFormComponent;
//# sourceMappingURL=reminder-form.component.js.map