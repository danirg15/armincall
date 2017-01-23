"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var shared_module_1 = require("../shared/shared.module");
var ng2_modal_1 = require("ng2-modal");
var tickets_module_1 = require("../tickets/tickets.module");
var calls_component_1 = require("./components/calls.component");
var incomming_component_1 = require("./components/incomming.component");
var call_service_1 = require("./services/call.service");
var CallsModule = (function () {
    function CallsModule() {
    }
    return CallsModule;
}());
CallsModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            http_1.HttpModule,
            router_1.RouterModule,
            ng2_modal_1.ModalModule,
            shared_module_1.SharedModule,
            tickets_module_1.TicketsModule
        ],
        declarations: [calls_component_1.CallsComponent, incomming_component_1.IncommingComponent],
        exports: [calls_component_1.CallsComponent],
        providers: [call_service_1.CallService]
    })
], CallsModule);
exports.CallsModule = CallsModule;
//# sourceMappingURL=calls.module.js.map