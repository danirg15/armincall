"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var shared_module_1 = require("../shared/shared.module");
var forms_1 = require("@angular/forms");
var reminder_form_component_1 = require("./components/reminder-form.component");
var reminders_component_1 = require("./components/reminders.component");
var reminder_service_1 = require("./services/reminder.service");
var RemindersModule = (function () {
    function RemindersModule() {
    }
    return RemindersModule;
}());
RemindersModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            router_1.RouterModule,
            forms_1.ReactiveFormsModule,
            shared_module_1.SharedModule
        ],
        declarations: [
            reminders_component_1.RemindersComponent,
            reminder_form_component_1.ReminderFormComponent
        ],
        exports: [
            reminders_component_1.RemindersComponent,
            reminder_form_component_1.ReminderFormComponent
        ],
        providers: [reminder_service_1.ReminderService]
    })
], RemindersModule);
exports.RemindersModule = RemindersModule;
//# sourceMappingURL=reminders.module.js.map