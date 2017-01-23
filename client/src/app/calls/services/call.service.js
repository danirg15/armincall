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
var Observable_1 = require("rxjs/Observable");
var io = require("socket.io-client");
var CallService = (function () {
    function CallService(http) {
        this.http = http;
        this.url = '/api/calls';
    }
    CallService.prototype.getPendingCalls = function () {
        return this.http.get(this.url + '?isValidated=false')
            .map(function (res) { return res.json(); });
    };
    CallService.prototype.getNewCalls = function () {
        var socket = null;
        var url = 'http://localhost:5000/events/calls/new';
        var observable = new Observable_1.Observable(function (observer) {
            socket = io(url);
            socket.on('newCall', function (data) {
                observer.next(data);
            });
            return function () {
                socket.disconnect();
            };
        });
        return observable;
    };
    CallService.prototype.getIncommingCalls = function () {
        //TODO refactor duplicated code
        var socket = null;
        var url = 'http://localhost:5000/events/calls/incomming';
        var observable = new Observable_1.Observable(function (observer) {
            socket = io(url);
            socket.on('incommingCall', function (data) {
                observer.next(data);
            });
            return function () {
                socket.disconnect();
            };
        });
        return observable;
    };
    CallService.prototype.updateCall = function (call) {
        return this.http.put(this.url + '/' + call._id, call);
    };
    return CallService;
}());
CallService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_services_1.HttpServices])
], CallService);
exports.CallService = CallService;
//# sourceMappingURL=call.service.js.map