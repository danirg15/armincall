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
var call_service_1 = require("../services/call.service");
var IncommingComponent = (function () {
    function IncommingComponent(callService) {
        this.callService = callService;
        this.incommingCall = {};
    }
    IncommingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.connection = this.callService.getIncommingCalls()
            .subscribe(function (incomming) {
            _this.modal.open();
            _this.incommingCall = incomming;
        });
    };
    IncommingComponent.prototype.ngOnDestroy = function () {
        this.connection.unsubscribe();
    };
    IncommingComponent.prototype.saveTicket = function (workshop, description) {
        console.log(description);
        console.log(workshop);
    };
    return IncommingComponent;
}());
__decorate([
    core_1.ViewChild('incommingCallModal'),
    __metadata("design:type", Object)
], IncommingComponent.prototype, "modal", void 0);
IncommingComponent = __decorate([
    core_1.Component({
        selector: 'incomming',
        template: "\n        <modal #incommingCallModal \n                title=\"Llamada entrante\"\n                modalClass=\"modal-lg\"\n                [hideCloseButton]=\"false\"\n                [closeOnEscape]=\"true\"\n                [closeOnOutsideClick]=\"true\"\n        >\n\n            <modal-header>\n                <h2 class=\"text-center\" *ngIf=\"incommingCall.workshop\">\n                    {{incommingCall.workshop?.name}}\n                    <small>{{incommingCall.number}}</small>\n                </h2>\n                <h2 class=\"text-center\" *ngIf=\"!incommingCall.workshop\">\n                    {{incommingCall.number}}\n                </h2>\n\n            </modal-header>\n\n            <modal-content>\n\n                <div class=\"row\">\n                    <div class=\"col-md-5\">  \n                        <form class=\"form-horizontal\">\n                            <div class=\"form-group\">\n                                <label class=\"col-lg-3 control-label\">Contacto:</label>\n                                <div class=\"col-lg-9\">\n                                    <input type=\"text\" class=\"form-control\" readonly \n                                    value=\"{{incommingCall.workshop?.contact}}\">\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <label class=\"col-lg-3 control-label\">Distribuidor:</label>\n                                <div class=\"col-lg-9\">\n                                    <input type=\"text\" class=\"form-control\" readonly value=\"Ramirez\">\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <label class=\"col-lg-3 control-label\">Direcci\u00F3n:</label>\n                                <div class=\"col-lg-9\">\n                                    <input type=\"text\" class=\"form-control\" readonly value=\"Ramirez\">\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n\n                    <div class=\"col-md-offset-2 col-md-5\">  \n                        <div *ngIf=\"incommingCall.workshop\">\n                            <div class=\"form-group\">\n                                <label><u>Nueva Incidencia</u></label>\n                                <textarea #description class=\"form-control\" rows=\"3\"></textarea>\n                            </div>\n                            <button class=\"btn btn-primary btn-sm\"\n                                     (click)=\"saveTicket(incommingCall.workshop, description.value)\">\n                                     Guardar\n                            </button>      \n                        </div>\n                    </div>\n\n                </div>\n                \n                <br>\n\n                <div class=\"panel panel-warning\">\n                    <div class=\"panel-heading\">\n                        <h3 class=\"panel-title\">Incidencias Activas</h3>\n                    </div>\n                    <div class=\"panel-body\">\n                        <table class=\"table table-striped table-hover \">\n                            <thead>\n                                <tr>\n                                    <th>Fecha/Hora</th>\n                                    <th>Descripci\u00F3n</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor=\"let ticket of incommingCall.tickets\">\n                                    <td>{{ticket.createdAt | diffForHumans}}</td>\n                                    <td>{{ticket.description}}</td>\n                                </tr>\n                            </tbody>\n                        </table> \n                    </div>\n                </div>\n\n            </modal-content>\n\n            <modal-footer>\n            </modal-footer>\n\n        </modal>\n    \n    \n    \n    "
    }),
    __metadata("design:paramtypes", [call_service_1.CallService])
], IncommingComponent);
exports.IncommingComponent = IncommingComponent;
//# sourceMappingURL=incomming.component.js.map