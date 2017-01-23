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
var router_1 = require("@angular/router");
var basicValidators_1 = require("../../shared/validators/basicValidators");
var workshop_service_1 = require("../services/workshop.service");
var shared_service_1 = require("../../shared/services/shared.service");
var workshop_1 = require("../workshop");
var WorkshopFormComponent = (function () {
    function WorkshopFormComponent(fb, workshopService, sharedServices, router, route) {
        this.workshopService = workshopService;
        this.sharedServices = sharedServices;
        this.router = router;
        this.route = route;
        this.workshop = new workshop_1.Workshop();
        this.title = 'Nuevo Taller';
        this.form = fb.group({
            name: ['', forms_1.Validators.required],
            cif: [''],
            contact: [''],
            address: fb.group({
                description: ['']
            }),
            distributor: ['', forms_1.Validators.required],
            email: ['', basicValidators_1.BasicValidators.email],
            phone: ['', forms_1.Validators.compose([forms_1.Validators.required,
                    basicValidators_1.BasicValidators.phone])]
        });
    }
    WorkshopFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id;
        this.route.params.subscribe(function (params) {
            id = params['id'];
            if (id) {
                _this.workshopService.getWorkshop(id)
                    .subscribe(function (workshop) { return _this.workshop = workshop; });
                _this.title = 'Editar Taller';
            }
            _this.sharedServices.getDistributors()
                .subscribe(function (distributors) { return _this.distributors = distributors; });
        });
    };
    WorkshopFormComponent.prototype.onSubmit = function () {
        var _this = this;
        var id;
        this.form.value.phone = this.form.value.phone.split(',');
        this.route.params.subscribe(function (params) {
            id = params['id'];
            if (id) {
                _this.workshopService.updateWorkshop(id, _this.form.value)
                    .subscribe(null, function (err) { return alert('Error al guardar'); });
            }
            else {
                _this.workshopService.save(_this.form.value)
                    .subscribe(null);
            }
            _this.router.navigate(['/workshops']);
        });
    };
    return WorkshopFormComponent;
}());
WorkshopFormComponent = __decorate([
    core_1.Component({
        selector: 'workshop-form',
        templateUrl: 'app/workshops/templates/workshop-form.template.html',
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        workshop_service_1.WorkshopService,
        shared_service_1.SharedServices,
        router_1.Router,
        router_1.ActivatedRoute])
], WorkshopFormComponent);
exports.WorkshopFormComponent = WorkshopFormComponent;
//# sourceMappingURL=workshop-form.component.js.map