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
var http_services_1 = require("../../shared/services/http.services");
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
var TicketService = (function () {
    function TicketService(http) {
        this.http = http;
        this.url = "/api/tickets/";
    }
    TicketService.prototype.save = function (ticket) {
        return this.http.post(this.url, ticket);
    };
    TicketService.prototype.updateTicket = function (id, ticket) {
        return this.http.put(this.url + id, ticket);
    };
    TicketService.prototype.getPendingTickets = function (workshopId) {
        var url = this.url;
        if (workshopId)
            url += '?completed=false&workshop=' + workshopId;
        else
            url += '?completed=false';
        return this.http.get(url);
    };
    return TicketService;
}());
TicketService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_services_1.HttpServices])
], TicketService);
exports.TicketService = TicketService;
//# sourceMappingURL=ticket.service.js.map