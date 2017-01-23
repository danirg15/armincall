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
var core_1 = require('@angular/core');
var ticket_service_1 = require('../services/ticket.service');
var TicketsOfWorkshopComponent = (function () {
    function TicketsOfWorkshopComponent(ticketService) {
        this.ticketService = ticketService;
        this.workshopId = null;
        this.callIds = [];
        this.tickets = [];
        this.selectedTicketId = null;
    }
    TicketsOfWorkshopComponent.prototype.show = function () {
        var _this = this;
        this.modal.open();
        if (this.workshopId) {
            this.ticketService.getPendingTickets(this.workshopId)
                .subscribe(function (tickets) { return _this.tickets = tickets; });
        }
    };
    TicketsOfWorkshopComponent.prototype.select = function ($event) {
        this.selectedTicketId = $event.target.value;
    };
    TicketsOfWorkshopComponent.prototype.link = function () {
        this.ticketService.updateTicket(this.selectedTicketId, {
            'workshop': this.workshopId,
            'calls': this.callIds,
            'completed': true
        }).subscribe(function (x) {
            console.log(x);
        });
    };
    __decorate([
        core_1.ViewChild('ticketsModal'), 
        __metadata('design:type', Object)
    ], TicketsOfWorkshopComponent.prototype, "modal", void 0);
    __decorate([
        core_1.Input('workshop-id'), 
        __metadata('design:type', Object)
    ], TicketsOfWorkshopComponent.prototype, "workshopId", void 0);
    __decorate([
        core_1.Input('call-ids'), 
        __metadata('design:type', Array)
    ], TicketsOfWorkshopComponent.prototype, "callIds", void 0);
    TicketsOfWorkshopComponent = __decorate([
        core_1.Component({
            selector: 'workshop-tickets',
            template: "\n        <modal #ticketsModal \n                title=\"tickets\"\n                modalClass=\"modal-lg\"\n                [hideCloseButton]=\"false\"\n                [closeOnEscape]=\"true\"\n                [closeOnOutsideClick]=\"true\"\n        >\n\n            <modal-header>\n                <h2 class=\"text-center\">\n                    <small></small>\n                </h2>\n                \n            </modal-header>\n\n            <modal-content>\n                <div class=\"panel panel-warning\">\n                    <div class=\"panel-heading\">\n                        <h3 class=\"panel-title\">Incidencias Activas</h3>\n                    </div>\n                    <div class=\"panel-body\">\n                        <table class=\"table table-striped table-hover \">\n                            <thead>\n                                <tr>\n                                    <th></th>\n                                    <th>Fecha/Hora</th>\n                                    <th>Descripci\u00F3n</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor=\"let ticket of tickets\">\n                                    <td>\n                                        <div class=\"checkbox\">\n                                            <label>\n                                                <input type=\"radio\" name=\"radio\" value=\"{{ticket._id}}\" (change)=\"select($event)\" />\n                                            </label>\n                                        </div>\n                                    </td>\n                                    <td>{{ticket.createdAt}}</td>\n                                    <td>{{ticket.description}}</td>\n                                </tr>\n                            </tbody>\n                        </table> \n                    </div>\n                </div>\n\n            </modal-content>\n\n            <modal-footer>\n                <button class=\"btn btn-default\" (click)=\"ticketsModal.close()\">Cancelar</button>\n                <button class=\"btn btn-primary\" [disabled]=\"selectedTicketId == null\" (click)=\"link()\">Link</button>\n            </modal-footer>\n\n        </modal>\n    \n    "
        }), 
        __metadata('design:paramtypes', [ticket_service_1.TicketService])
    ], TicketsOfWorkshopComponent);
    return TicketsOfWorkshopComponent;
}());
exports.TicketsOfWorkshopComponent = TicketsOfWorkshopComponent;
//# sourceMappingURL=ticketsOfWorkshop.component.js.map