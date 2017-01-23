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
var forms_1 = require("@angular/forms");
var shared_module_1 = require("../shared/shared.module");
var workshops_component_1 = require("./components/workshops.component");
var workshop_form_component_1 = require("./components/workshop-form.component");
var workshop_service_1 = require("./services/workshop.service");
var WorkshopsModule = (function () {
    function WorkshopsModule() {
    }
    return WorkshopsModule;
}());
WorkshopsModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            router_1.RouterModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            shared_module_1.SharedModule
        ],
        declarations: [
            workshops_component_1.WorkshopsComponent,
            workshop_form_component_1.WorkshopFormComponent
        ],
        exports: [
            workshops_component_1.WorkshopsComponent,
            workshop_form_component_1.WorkshopFormComponent
        ],
        providers: [workshop_service_1.WorkshopService]
    })
], WorkshopsModule);
exports.WorkshopsModule = WorkshopsModule;
//# sourceMappingURL=workshops.module.js.map