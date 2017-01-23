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
var ng2_modal_1 = require("ng2-modal");
var ticket_form_component_1 = require("./components/ticket-form.component");
var tickets_component_1 = require("./components/tickets.component");
var tickets_of_workshop_component_1 = require("./components/tickets-of-workshop.component");
var workshops_module_1 = require("../workshops/workshops.module");
var ticket_service_1 = require("./services/ticket.service");
var TicketsModule = (function () {
    function TicketsModule() {
    }
    return TicketsModule;
}());
TicketsModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            router_1.RouterModule,
            shared_module_1.SharedModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            ng2_modal_1.ModalModule,
            workshops_module_1.WorkshopsModule
        ],
        declarations: [
            tickets_component_1.TicketsComponent,
            ticket_form_component_1.TicketFormComponent,
            tickets_of_workshop_component_1.TicketsOfWorkshopComponent
        ],
        exports: [
            tickets_component_1.TicketsComponent,
            ticket_form_component_1.TicketFormComponent,
            tickets_of_workshop_component_1.TicketsOfWorkshopComponent
        ],
        providers: [
            ticket_service_1.TicketService
        ]
    })
], TicketsModule);
exports.TicketsModule = TicketsModule;
//# sourceMappingURL=tickets.module.js.map