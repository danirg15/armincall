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
var http_services_1 = require("../../shared/services/http.services");
var router_1 = require("@angular/router");
var AuthService = (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.uri = '/api/auth/login';
        this.isLoggedIn = function () {
            return localStorage.getItem('token') ? true : false;
        };
    }
    AuthService.prototype.login = function (username, password, cb) {
        var _this = this;
        this.http.post(this.uri, { 'username': username, 'password': password })
            .subscribe(function (res) {
            if (res.token) {
                localStorage.setItem('token', res.token);
                _this.router.navigate(['/dashboard']);
            }
            else {
                cb('Ha ocurrido un error al autenticarse.');
            }
        }, function (err) {
            cb('Usuario o contraseña incorrectos!');
        });
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('token');
    };
    return AuthService;
}());
AuthService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_services_1.HttpServices, router_1.Router])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map