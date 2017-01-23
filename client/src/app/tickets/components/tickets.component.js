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
var ticket_service_1 = require("../services/ticket.service");
var TicketsComponent = (function () {
    function TicketsComponent(ticketService) {
        this.ticketService = ticketService;
        this.linkingAllowed = false;
        this.tickets = [];
        this.selectedTickets = []; //should be Ticket Object
    }
    TicketsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ticketService.getPendingTickets(null)
            .subscribe(function (tickets) { return _this.tickets = tickets; });
    };
    TicketsComponent.prototype.select = function ($event, call) {
        if ($event.target.checked) {
            this.selectedTickets.push(call);
        }
        else {
            var index = this.selectedTickets.indexOf(call);
            this.selectedTickets.splice(index, 1);
        }
        console.log(this.selectedTickets);
        this.checkLinking();
    };
    TicketsComponent.prototype.checkLinking = function () {
        if (this.selectedTickets.length > 0)
            this.linkingAllowed = true;
        else
            this.linkingAllowed = false;
    };
    TicketsComponent.prototype.delete = function (ticket) {
        console.log(ticket);
    };
    return TicketsComponent;
}());
TicketsComponent = __decorate([
    core_1.Component({
        template: "\n        <nav-bar></nav-bar>\n\n        <div class=\"container\" >\n\n        <div class=\"page-header\">\n            <h2>Incidencias</h2>\n        </div>\n\n        <button class=\"btn btn-primary btn-sm pull-right\" [disabled]=\"!linkingAllowed\">Asociar Llamadas</button> <br><br>\n\n        <ul class=\"nav nav-tabs\">\n            <li class=\"active\"><a href=\"#home\" data-toggle=\"tab\" aria-expanded=\"true\">Incidencias Pendientes</a></li>\n            <li class=\"\"><a href=\"#profile\" data-toggle=\"tab\" aria-expanded=\"false\">Historial</a></li>\n        </ul>\n\n\n        <br>\n\n        <table class=\"table table-striped table-hover \">\n            <thead>\n                <tr>\n                    <th></th>\n                    <th>Taller</th>\n                    <th>Categor\u00EDa</th>\n                    <th>Descripci\u00F3n</th>\n                    <th>Fecha/Hora</th>\n                    <th>Acci\u00F3n</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let ticket of tickets\">\n                    <td>\n                        <div class=\"checkbox\">\n                            <label>\n                                <input type=\"checkbox\" value=\"\" (change)=\"select($event, ticket)\" />\n                            </label>\n                        </div>\n                    </td>\n                    <td> \n                        <a [routerLink]=\"['/workshops', ticket.workshop._id]\"> \n                            {{ ticket.workshop.name }} \n                        </a> \n                    </td>\n                    <td>{{ ticket.category }}</td>\n                    <td>{{ ticket.description }}</td>\n                    <td>{{ ticket.createdAt | diffForHumans }}</td>\n                    <td>\n                        <a class=\"btn btn-primary btn-sm\" [routerLink]=\"['/tickets', ticket._id]\" >\n                            <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n                        </a>\n                        &nbsp;\n                        <a class=\"btn btn-warning btn-sm\" (click)=\"delete(ticket)\">\n                            Descartar\n                        </a>\n                    </td>\n                </tr>\n            </tbody>\n        </table> \n        \n        </div>\n    \n    ",
    }),
    __metadata("design:paramtypes", [ticket_service_1.TicketService])
], TicketsComponent);
exports.TicketsComponent = TicketsComponent;
//# sourceMappingURL=tickets.component.js.map