"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var shared_module_1 = require("../shared/shared.module");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var demos_component_1 = require("./components/demos.component");
var demo_form_component_1 = require("./components/demo-form.component");
var demo_service_1 = require("./services/demo.service");
var DemosModule = (function () {
    function DemosModule() {
    }
    return DemosModule;
}());
DemosModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            router_1.RouterModule,
            forms_1.ReactiveFormsModule,
            shared_module_1.SharedModule
        ],
        declarations: [
            demos_component_1.DemosComponent,
            demo_form_component_1.DemoFormComponent
        ],
        exports: [
            demos_component_1.DemosComponent,
            demo_form_component_1.DemoFormComponent
        ],
        providers: [demo_service_1.DemoService]
    })
], DemosModule);
exports.DemosModule = DemosModule;
//# sourceMappingURL=demos.module.js.map