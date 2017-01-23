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
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
require("rxjs/add/operator/map");
var Rx_1 = require("rxjs/Rx");
var HttpServices = (function () {
    function HttpServices(http, router) {
        this.http = http;
        this.router = router;
    }
    HttpServices.prototype.buildHeaders = function () {
        this.headers = new http_1.Headers();
        this.headers.append("Content-Type", "application/json");
        this.headers.append("Authorization", localStorage.getItem('token'));
    };
    HttpServices.prototype.checkStatus = function (err) {
        if (err.status === 401) {
            this.router.navigate(['/login']);
            return Rx_1.Observable.throw(new Error(err.status));
        }
    };
    HttpServices.prototype.get = function (uri) {
        var _this = this;
        this.buildHeaders();
        return this.http.get(uri, { headers: this.headers })
            .map(function (res) { return res.json(); })
            .catch(function (err) {
            return _this.checkStatus(err);
        });
    };
    HttpServices.prototype.post = function (uri, data) {
        var _this = this;
        this.buildHeaders();
        return this.http.post(uri, JSON.stringify(data), { headers: this.headers })
            .map(function (res) { return res.json(); })
            .catch(function (err) {
            return _this.checkStatus(err);
        });
    };
    HttpServices.prototype.put = function (uri, data) {
        var _this = this;
        this.buildHeaders();
        return this.http.put(uri, JSON.stringify(data), { headers: this.headers })
            .map(function (res) { return res.json(); })
            .catch(function (err) {
            return _this.checkStatus(err);
        });
    };
    HttpServices.prototype.delete = function (uri) {
        var _this = this;
        this.buildHeaders();
        return this.http.delete(uri, { headers: this.headers })
            .map(function (res) { return res.json(); })
            .catch(function (err) {
            return _this.checkStatus(err);
        });
    };
    return HttpServices;
}());
HttpServices = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, router_1.Router])
], HttpServices);
exports.HttpServices = HttpServices;
//# sourceMappingURL=http.services.js.map