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
var CallsComponent = (function () {
    function CallsComponent(callService) {
        this.callService = callService;
        this.calls = [];
        this.selectedCallIds = [];
    }
    CallsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.callService.getPendingCalls()
            .subscribe(function (calls) { return _this.calls = calls; });
        this.connection = this.callService.getNewCalls()
            .subscribe(function (newCall) { return _this.calls.push(newCall); });
    };
    CallsComponent.prototype.ngOnDestroy = function () {
        this.connection.unsubscribe();
    };
    CallsComponent.prototype.select = function ($event, call) {
        if ($event.target.checked) {
            this.selectedCallIds.push(call._id);
            this.workshopIdOfSelectedCall = call.workshop._id;
        }
        else {
            var index = this.selectedCallIds.indexOf(call._id);
            this.selectedCallIds.splice(index, 1);
        }
        console.log(this.selectedCallIds);
    };
    CallsComponent.prototype.discard = function (call) {
        var _this = this;
        if (!confirm('¿Estas seguro que deseas descartar esta llamada?'))
            return;
        var i = this.calls.indexOf(call);
        this.calls.splice(i, 1);
        var c = call;
        c.isValidated = true;
        if (c.workshop)
            c.workshop = c.workshop._id;
        this.callService.updateCall(c)
            .subscribe(null, function (err) {
            alert('Error al eliminar');
            _this.calls.splice(i, 0, call);
        });
    };
    return CallsComponent;
}());
CallsComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/calls/templates/calls.template.html'
    }),
    __metadata("design:paramtypes", [call_service_1.CallService])
], CallsComponent);
exports.CallsComponent = CallsComponent;
//# sourceMappingURL=calls.component.js.map