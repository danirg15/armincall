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
var demo_service_1 = require("../services/demo.service");
var shared_service_1 = require("../../shared/services/shared.service");
var router_1 = require("@angular/router");
var DemoFormComponent = (function () {
    function DemoFormComponent(fb, sharedServices, demoService, router) {
        this.sharedServices = sharedServices;
        this.demoService = demoService;
        this.router = router;
        this.form = fb.group({
            name: ['', forms_1.Validators.required],
            distributor: ['', forms_1.Validators.required],
            contact: [''],
            phone: [''],
            date: ['', forms_1.Validators.compose([forms_1.Validators.required, basicValidators_1.BasicValidators.date])],
            time: ['', forms_1.Validators.compose([forms_1.Validators.required, basicValidators_1.BasicValidators.time])],
            description: ['']
        });
    }
    DemoFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sharedServices.getDistributors()
            .subscribe(function (distributors) { return _this.distributors = distributors; });
    };
    DemoFormComponent.prototype.onSubmit = function () {
        var _this = this;
        this.demoService.save(this.form.value)
            .subscribe(function (x) {
            return _this.router.navigate(['demos']);
        });
    };
    return DemoFormComponent;
}());
DemoFormComponent = __decorate([
    core_1.Component({
        selector: 'demo-form',
        templateUrl: 'app/demos/templates/demo-form.template.html',
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        shared_service_1.SharedServices,
        demo_service_1.DemoService,
        router_1.Router])
], DemoFormComponent);
exports.DemoFormComponent = DemoFormComponent;
//# sourceMappingURL=demo-form.component.js.map