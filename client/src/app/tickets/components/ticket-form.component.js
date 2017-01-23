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
var ticket_service_1 = require("../services/ticket.service");
var workshop_service_1 = require("../../workshops/services/workshop.service");
var router_1 = require("@angular/router");
var ticket_1 = require("../ticket");
var TicketFormComponent = (function () {
    function TicketFormComponent(fb, ticketService, workshopService, router, route) {
        this.ticketService = ticketService;
        this.workshopService = workshopService;
        this.router = router;
        this.route = route;
        this.ticket = new ticket_1.Ticket('', false);
        this.workshop = { name: '' };
        this.title = 'Nueva Incidencia';
        this.form = fb.group({
            description: ['', forms_1.Validators.required],
            completed: ['', forms_1.Validators.required]
        });
    }
    TicketFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.workshopService
                .getWorkshop(params['workshop_id'])
                .subscribe(function (workshop) { return _this.workshop = workshop; });
        });
    };
    TicketFormComponent.prototype.onSubmit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var workshop_id = params['workshop_id'];
            if (workshop_id) {
                var ticket = _this.form.value;
                ticket.workshop = workshop_id;
                _this.ticketService.save(ticket)
                    .subscribe(function (x) {
                    return _this.router.navigate(['/tickets']);
                });
            }
        });
    };
    return TicketFormComponent;
}());
TicketFormComponent = __decorate([
    core_1.Component({
        selector: 'ticket-form',
        templateUrl: 'app/tickets/templates/ticket-form.template.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        ticket_service_1.TicketService,
        workshop_service_1.WorkshopService,
        router_1.Router,
        router_1.ActivatedRoute])
], TicketFormComponent);
exports.TicketFormComponent = TicketFormComponent;
//# sourceMappingURL=ticket-form.component.js.map