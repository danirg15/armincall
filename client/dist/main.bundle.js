webpackJsonp([0,4],{

/***/ 1101:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 1101;


/***/ },

/***/ 1102:
/***/ function(module, exports) {

/* (ignored) */

/***/ },

/***/ 1103:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(485);


/***/ },

/***/ 128:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_http_services__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



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
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_http_services__["a" /* HttpServices */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_http_services__["a" /* HttpServices */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === 'function' && _b) || Object])
    ], AuthService);
    return AuthService;
    var _a, _b;
}());
//# sourceMappingURL=/Users/dani/Projects/ArminCall/client/src/auth.service.js.map

/***/ },

/***/ 129:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_http_services__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TicketService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


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
    TicketService.prototype.getAll = function () {
        return this.http.get(this.url);
    };
    TicketService.prototype.getOne = function (id) {
        return this.http.get(this.url + '/' + id);
    };
    TicketService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__shared_services_http_services__["a" /* HttpServices */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__shared_services_http_services__["a" /* HttpServices */]) === 'function' && _a) || Object])
    ], TicketService);
    return TicketService;
    var _a;
}());
//# sourceMappingURL=/Users/dani/Projects/ArminCall/client/src/ticket.service.js.map

/***/ },

/***/ 178:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_http_services__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return WorkshopService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WorkshopService = (function () {
    function WorkshopService(http) {
        this.http = http;
        this.url = "/api/workshops/";
    }
    WorkshopService.prototype.save = function (workshop) {
        return this.http.post(this.url, workshop);
    };
    WorkshopService.prototype.getWorkshop = function (id) {
        return this.http.get(this.url + id);
    };
    WorkshopService.prototype.getAll = function () {
        return this.http.get(this.url);
    };
    WorkshopService.prototype.updateWorkshop = function (id, workshop) {
        return this.http.put(this.url + id, workshop);
    };
    WorkshopService.prototype.search = function (keyword) {
        return this.http.get(this.url + '?q=' + keyword);
    };
    WorkshopService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__shared_services_http_services__["a" /* HttpServices */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__shared_services_http_services__["a" /* HttpServices */]) === 'function' && _a) || Object])
    ], WorkshopService);
    return WorkshopService;
    var _a;
}());
//# sourceMappingURL=/Users/dani/Projects/ArminCall/client/src/workshop.service.js.map

/***/ },

/***/ 254:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_http_services__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_socket_io_client__ = __webpack_require__(1088);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__(401);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CallService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CallService = (function () {
    function CallService(http) {
        this.http = http;
        this.url = '/api/calls';
        this.eventsBaseURL = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].socketIOBaseEndpoint;
        console.log(this.eventsBaseURL);
    }
    CallService.prototype.ngOnInit = function () {
        if (!__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].socketIOBaseEndpoint) {
            console.log("Endpoint for events not found, the application won't react to events.");
        }
    };
    CallService.prototype.getPendingCalls = function () {
        return this.http.get(this.url + '?isValidated=false');
    };
    CallService.prototype.getAll = function () {
        return this.http.get(this.url);
    };
    CallService.prototype.updateCall = function (call) {
        return this.http.put(this.url + '/' + call._id, call);
    };
    CallService.prototype.getNewCalls = function () {
        var url = this.eventsBaseURL + '/events/calls/new';
        return this.createSocketObservable(url, 'newCall');
    };
    CallService.prototype.getIncommingCalls = function () {
        var url = this.eventsBaseURL + '/events/calls/incomming';
        return this.createSocketObservable(url, 'incommingCall');
    };
    CallService.prototype.createSocketObservable = function (endpoint, event) {
        var socket = null;
        var observable = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
            socket = __WEBPACK_IMPORTED_MODULE_3_socket_io_client__(endpoint);
            socket.on(event, function (data) {
                observer.next(data);
            });
            return function () { return socket.disconnect(); };
        });
        return observable;
    };
    CallService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__shared_services_http_services__["a" /* HttpServices */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__shared_services_http_services__["a" /* HttpServices */]) === 'function' && _a) || Object])
    ], CallService);
    return CallService;
    var _a;
}());
//# sourceMappingURL=/Users/dani/Projects/ArminCall/client/src/call.service.js.map

/***/ },

/***/ 255:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_http_services__ = __webpack_require__(55);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DemoService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DemoService = (function () {
    function DemoService(http) {
        this.http = http;
        this.url = "/api/demos/";
    }
    DemoService.prototype.save = function (demo) {
        return this.http.post(this.url, demo);
    };
    DemoService.prototype.getPendingDemos = function () {
        return this.http.get(this.url + '?completed=false');
    };
    DemoService.prototype.getAll = function () {
        return this.http.get(this.url);
    };
    DemoService.prototype.markDemoAsCompleted = function (demo) {
        return this.http.put(this.url + demo._id, { 'completed': true });
    };
    DemoService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_http_services__["a" /* HttpServices */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_http_services__["a" /* HttpServices */]) === 'function' && _a) || Object])
    ], DemoService);
    return DemoService;
    var _a;
}());
//# sourceMappingURL=/Users/dani/Projects/ArminCall/client/src/demo.service.js.map

/***/ },

/***/ 256:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_http_services__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ReminderService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReminderService = (function () {
    function ReminderService(http) {
        this.http = http;
        this.url = "/api/reminders/";
    }
    ReminderService.prototype.save = function (reminder) {
        return this.http.post(this.url, reminder);
    };
    ReminderService.prototype.getAll = function () {
        return this.http.get(this.url);
    };
    ReminderService.prototype.delete = function (reminder) {
        return this.http.delete(this.url + reminder._id);
    };
    ReminderService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__shared_services_http_services__["a" /* HttpServices */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__shared_services_http_services__["a" /* HttpServices */]) === 'function' && _a) || Object])
    ], ReminderService);
    return ReminderService;
    var _a;
}());
//# sourceMappingURL=/Users/dani/Projects/ArminCall/client/src/reminder.service.js.map

/***/ },

/***/ 257:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return BasicValidators; });
var BasicValidators = (function () {
    function BasicValidators() {
    }
    BasicValidators.email = function (control) {
        var regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var valid = regEx.test(control.value);
        return valid ? null : { email: true };
    };
    BasicValidators.phone = function (control) {
        var regEx = /^(\d+)(,\s*\d+)*$/;
        var valid = regEx.test(control.value);
        return valid ? null : { phone: true };
    };
    BasicValidators.time = function (control) {
        var regEx = /([01]\d|2[0-3]):([0-5]\d)/;
        var valid = regEx.test(control.value);
        return valid ? null : { time: true };
    };
    BasicValidators.date = function (control) {
        var regEx = /^\d{2}[./-]\d{2}[./-]\d{4}$/;
        var valid = regEx.test(control.value);
        return valid ? null : { date: true };
    };
    return BasicValidators;
}());
//# sourceMappingURL=/Users/dani/Projects/ArminCall/client/src/basicValidators.js.map

/***/ },

/***/ 383:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(128);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(fb, authService) {
        this.authService = authService;
        this.message = '';
        this.form = fb.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]
        });
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.form.valid) {
            this.authService.login(this.form.value.username, this.form.value.password, function (msg) {
                _this.message = msg;
            });
        }
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'login',
            template: __webpack_require__(808),
            styles: [__webpack_require__(806)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/dani/Projects/ArminCall/client/src/login.component.js.map

/***/ },

/***/ 384:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_call_service__ = __webpack_require__(254);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CallsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CallsComponent = (function () {
    function CallsComponent(callService) {
        this.callService = callService;
        this.calls = [];
        this.selectedCallIds = [];
        this.discarButtonHidden = false;
    }
    CallsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadPendingCalls();
        this.eventsConnection = this.callService.getNewCalls()
            .subscribe(function (newCall) { return _this.calls.push(newCall); });
    };
    CallsComponent.prototype.ngOnDestroy = function () {
        this.eventsConnection.unsubscribe();
    };
    CallsComponent.prototype.loadHistoryCalls = function () {
        var _this = this;
        this.discarButtonHidden = true;
        this.callService.getAll()
            .subscribe(function (calls) { return _this.calls = calls; });
    };
    CallsComponent.prototype.loadPendingCalls = function () {
        var _this = this;
        this.discarButtonHidden = false;
        this.callService.getPendingCalls()
            .subscribe(function (calls) { return _this.calls = calls; });
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
    CallsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__(809)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_call_service__["a" /* CallService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_call_service__["a" /* CallService */]) === 'function' && _a) || Object])
    ], CallsComponent);
    return CallsComponent;
    var _a;
}());
//# sourceMappingURL=/Users/dani/Projects/ArminCall/client/src/calls.component.js.map

/***/ },

/***/ 385:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_http_services__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ChartService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChartService = (function () {
    function ChartService(http) {
        this.http = http;
        this.url = "/api/stats/calls/";
    }
    ChartService.prototype.getAll = function (n_months) {
        return this.http.get(this.url + n_months + '/months');
    };
    ChartService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__shared_services_http_services__["a" /* HttpServices */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__shared_services_http_services__["a" /* HttpServices */]) === 'function' && _a) || Object])
    ], ChartService);
    return ChartService;
    var _a;
}());
//# sourceMappingURL=/Users/dani/Projects/ArminCall/client/src/chart.service.js.map

/***/ },

/***/ 386:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_shared_service__ = __webpack_require__(97);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent(sharedServices) {
        this.sharedServices = sharedServices;
        this.badges = {
            pendingCalls: 0,
            pendingTickets: 0,
            pendingDemos: 0,
            pendingReminders: 0
        };
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sharedServices.getBadges()
            .subscribe(function (badges) { return _this.badges = badges; });
    };
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__(811)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_shared_service__["a" /* SharedServices */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_shared_service__["a" /* SharedServices */]) === 'function' && _a) || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a;
}());
//# sourceMappingURL=/Users/dani/Projects/ArminCall/client/src/dashboard.component.js.map

/***/ },

/***/ 387:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_validators_basicValidators__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_demo_service__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_shared_service__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DemoFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DemoFormComponent = (function () {
    function DemoFormComponent(fb, sharedServices, demoService, router) {
        this.sharedServices = sharedServices;
        this.demoService = demoService;
        this.router = router;
        this.form = fb.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            distributor: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            contact: [''],
            phone: [''],
            date: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__shared_validators_basicValidators__["a" /* BasicValidators */].date])],
            time: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__shared_validators_basicValidators__["a" /* BasicValidators */].time])],
            description: ['']
        });
    }
    DemoFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sharedServices.getDistributors()
            .subscribe(function (distributors) { return _this.distributors = distributors; });
    };
    DemoFormComponent.prototype.onSubmit = function () {
        var _this = this;
        this.demoService.save(this.form.value)
            .subscribe(function (x) {
            return _this.router.navigate(['demos']);
        });
    };
    DemoFormComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'demo-form',
            template: __webpack_require__(812),
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_shared_service__["a" /* SharedServices */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__shared_services_shared_service__["a" /* SharedServices */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_demo_service__["a" /* DemoService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_demo_service__["a" /* DemoService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["Router"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__angular_router__["Router"]) === 'function' && _d) || Object])
    ], DemoFormComponent);
    return DemoFormComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/dani/Projects/ArminCall/client/src/demo-form.component.js.map

/***/ },

/***/ 388:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_demo_service__ = __webpack_require__(255);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DemosComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DemosComponent = (function () {
    function DemosComponent(demoService) {
        this.demoService = demoService;
        this.discardButtonHidden = false;
    }
    DemosComponent.prototype.ngOnInit = function () {
        this.loadPendingDemos();
    };
    DemosComponent.prototype.loadPendingDemos = function () {
        var _this = this;
        this.discardButtonHidden = false;
        this.demoService.getPendingDemos()
            .subscribe(function (demos) { return _this.demos = demos; });
    };
    DemosComponent.prototype.loadDemosHistory = function () {
        var _this = this;
        this.discardButtonHidden = true;
        this.demoService.getAll()
            .subscribe(function (demos) { return _this.demos = demos; });
    };
    DemosComponent.prototype.delete = function (demo) {
        var _this = this;
        if (!confirm('Estas seguro que deseas eliminar'))
            return;
        var i = this.demos.indexOf(demo);
        this.demos.splice(i, 1);
        this.demoService.markDemoAsCompleted(demo)
            .subscribe(null, function (err) {
            alert('Error al eliminar');
            _this.demos.splice(i, 0, demo);
        });
    };
    DemosComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__(813)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_demo_service__["a" /* DemoService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_demo_service__["a" /* DemoService */]) === 'function' && _a) || Object])
    ], DemosComponent);
    return DemosComponent;
    var _a;
}());
//# sourceMappingURL=/Users/dani/Projects/ArminCall/client/src/demos.component.js.map

/***/ },

/***/ 389:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_services_auth_service__ = __webpack_require__(128);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.isLoggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__auth_services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === 'function' && _b) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());
//# sourceMappingURL=/Users/dani/Projects/ArminCall/client/src/auth-guard.service.js.map

/***/ },

/***/ 390:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return InfoBoardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InfoBoardComponent = (function () {
    function InfoBoardComponent() {
    }
    InfoBoardComponent.prototype.ngOnInit = function () {
    };
    InfoBoardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-info-board',
            template: __webpack_require__(814),
        }), 
        __metadata('design:paramtypes', [])
    ], InfoBoardComponent);
    return InfoBoardComponent;
}());
//# sourceMappingURL=/Users/dani/Projects/ArminCall/client/src/info-board.component.js.map

/***/ },

/***/ 391:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_validators_basicValidators__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_reminder_service__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ReminderFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReminderFormComponent = (function () {
    function ReminderFormComponent(fb, reminderService, router) {
        this.reminderService = reminderService;
        this.router = router;
        this.form = fb.group({
            description: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            date: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__shared_validators_basicValidators__["a" /* BasicValidators */].date])],
            time: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__shared_validators_basicValidators__["a" /* BasicValidators */].time])]
        });
    }
    ReminderFormComponent.prototype.onSubmit = function () {
        var _this = this;
        this.reminderService.save(this.form.value)
            .subscribe(function (x) {
            return _this.router.navigate(['reminders']);
        });
    };
    ReminderFormComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'reminder-form',
            template: __webpack_require__(815),
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_reminder_service__["a" /* ReminderService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_reminder_service__["a" /* ReminderService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"]) === 'function' && _c) || Object])
    ], ReminderFormComponent);
    return ReminderFormComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/dani/Projects/ArminCall/client/src/reminder-form.component.js.map

/***/ },

/***/ 392:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_reminder_service__ = __webpack_require__(256);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return RemindersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RemindersComponent = (function () {
    function RemindersComponent(reminderService) {
        this.reminderService = reminderService;
    }
    RemindersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.reminderService.getAll()
            .subscribe(function (reminders) { return _this.reminders = reminders; });
    };
    RemindersComponent.prototype.delete = function (reminder) {
        var _this = this;
        if (!confirm('Estas seguro que deseas eliminar'))
            return;
        var i = this.reminders.indexOf(reminder);
        this.reminders.splice(i, 1);
        this.reminderService.delete(reminder)
            .subscribe(null, function (err) {
            alert('Error al eliminar');
            _this.reminders.splice(i, 0, reminder);
        });
    };
    RemindersComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__(816)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_reminder_service__["a" /* ReminderService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_reminder_service__["a" /* ReminderService */]) === 'function' && _a) || Object])
    ], RemindersComponent);
    return RemindersComponent;
    var _a;
}());
//# sourceMappingURL=/Users/dani/Projects/ArminCall/client/src/reminders.component.js.map

/***/ },

/***/ 393:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            styles: ["\n            .container {\n                text-align: center;\n                display: table-cell;\n                vertical-align: middle;\n            }\n\n            .content {\n                text-align: center;\n                display: inline-block;\n            }\n\n            .title {\n                font-size: 72px;\n                margin-bottom: 40px;\n            }\n    "],
            template: "\n        <div class=\"container\">\n            <div class=\"content\">\n                <span class=\"title lead\"> <strong> Oh!</strong> Page Not Found.</span>\n            </div>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());
//# sourceMappingURL=/Users/dani/Projects/ArminCall/client/src/notfound.component.js.map

/***/ },

/***/ 394:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_ticket_service__ = __webpack_require__(129);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TicketDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TicketDetailComponent = (function () {
    function TicketDetailComponent(route, ticketService) {
        this.route = route;
        this.ticketService = ticketService;
        this.ticket = {
            'workshop': {},
            'calls': []
        };
    }
    TicketDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var id = params['id'];
            _this.ticketService
                .getOne(id)
                .subscribe(function (ticket) { return _this.ticket = ticket; });
        });
    };
    TicketDetailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ticket-detail',
            template: __webpack_require__(818)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_ticket_service__["a" /* TicketService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_ticket_service__["a" /* TicketService */]) === 'function' && _b) || Object])
    ], TicketDetailComponent);
    return TicketDetailComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/dani/Projects/ArminCall/client/src/ticket-detail.component.js.map

/***/ },

/***/ 395:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_ticket_service__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__workshops_services_workshop_service__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ticket__ = __webpack_require__(625);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TicketFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TicketFormComponent = (function () {
    function TicketFormComponent(fb, ticketService, workshopService, router, route) {
        this.ticketService = ticketService;
        this.workshopService = workshopService;
        this.router = router;
        this.route = route;
        this.ticket = new __WEBPACK_IMPORTED_MODULE_5__ticket__["a" /* Ticket */]('', false);
        this.workshop = { name: '' };
        this.title = 'Nueva Incidencia';
        this.form = fb.group({
            description: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            completed: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]
        });
    }
    TicketFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.workshopService
                .getWorkshop(params['workshop_id'])
                .subscribe(function (workshop) { return _this.workshop = workshop; });
        });
    };
    TicketFormComponent.prototype.onSubmit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var workshop_id = params['workshop_id'];
            if (workshop_id) {
                var ticket = _this.form.value;
                ticket.workshop = workshop_id;
                _this.ticketService.save(ticket)
                    .subscribe(function (x) {
                    return _this.router.navigate(['/tickets']);
                });
            }
        });
    };
    TicketFormComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ticket-form',
            template: __webpack_require__(819)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_ticket_service__["a" /* TicketService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_ticket_service__["a" /* TicketService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__workshops_services_workshop_service__["a" /* WorkshopService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__workshops_services_workshop_service__["a" /* WorkshopService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["ActivatedRoute"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["ActivatedRoute"]) === 'function' && _e) || Object])
    ], TicketFormComponent);
    return TicketFormComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=/Users/dani/Projects/ArminCall/client/src/ticket-form.component.js.map

/***/ },

/***/ 396:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_ticket_service__ = __webpack_require__(129);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TicketsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TicketsComponent = (function () {
    function TicketsComponent(ticketService) {
        this.ticketService = ticketService;
        this.tickets = [];
        this.selectedTickets = [];
        this.discardButtonHidden = false;
    }
    TicketsComponent.prototype.ngOnInit = function () {
        this.loadPendingTickets();
    };
    TicketsComponent.prototype.loadPendingTickets = function () {
        var _this = this;
        this.discardButtonHidden = false;
        this.ticketService.getPendingTickets(null)
            .subscribe(function (tickets) { return _this.tickets = tickets; });
    };
    TicketsComponent.prototype.loadTicketsHistory = function () {
        var _this = this;
        this.discardButtonHidden = true;
        this.ticketService.getAll()
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
    };
    TicketsComponent.prototype.setAsCompleted = function (ticket) {
        var _this = this;
        if (!confirm('¿Estas seguro que deseas resolver esta incidencia?'))
            return;
        var i = this.tickets.indexOf(ticket);
        this.tickets.splice(i, 1);
        this.ticketService.updateTicket(ticket._id, {
            'completed': true
        }).subscribe(null, function (err) {
            alert('Error al eliminar');
            _this.tickets.splice(i, 0, ticket);
        });
    };
    TicketsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__(821)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_ticket_service__["a" /* TicketService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_ticket_service__["a" /* TicketService */]) === 'function' && _a) || Object])
    ], TicketsComponent);
    return TicketsComponent;
    var _a;
}());
//# sourceMappingURL=/Users/dani/Projects/ArminCall/client/src/tickets.component.js.map

/***/ },

/***/ 397:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_modal__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_ticket_form_component__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_tickets_component__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_ticket_detail_component__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_tickets_of_workshop_component__ = __webpack_require__(624);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__workshops_workshops_module__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_ticket_service__ = __webpack_require__(129);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TicketsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var TicketsModule = (function () {
    function TicketsModule() {
    }
    TicketsModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"],
                __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_5_ng2_modal__["ModalModule"],
                __WEBPACK_IMPORTED_MODULE_10__workshops_workshops_module__["a" /* WorkshopsModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__components_tickets_component__["a" /* TicketsComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_ticket_form_component__["a" /* TicketFormComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_tickets_of_workshop_component__["a" /* TicketsOfWorkshopComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_ticket_detail_component__["a" /* TicketDetailComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_9__components_tickets_of_workshop_component__["a" /* TicketsOfWorkshopComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__services_ticket_service__["a" /* TicketService */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], TicketsModule);
    return TicketsModule;
}());
//# sourceMappingURL=/Users/dani/Projects/ArminCall/client/src/tickets.module.js.map

/***/ },

/***/ 398:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_validators_basicValidators__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_workshop_service__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_shared_service__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__workshop__ = __webpack_require__(626);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return WorkshopFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var WorkshopFormComponent = (function () {
    function WorkshopFormComponent(fb, workshopService, sharedServices, router, route) {
        this.workshopService = workshopService;
        this.sharedServices = sharedServices;
        this.router = router;
        this.route = route;
        this.workshop = new __WEBPACK_IMPORTED_MODULE_6__workshop__["a" /* Workshop */]();
        this.title = 'Nuevo Taller';
        this.form = fb.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            cif: [''],
            contact: [''],
            address: fb.group({
                description: ['']
            }),
            distributor: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            email: ['', __WEBPACK_IMPORTED_MODULE_3__shared_validators_basicValidators__["a" /* BasicValidators */].email],
            phone: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_3__shared_validators_basicValidators__["a" /* BasicValidators */].phone])]
        });
    }
    WorkshopFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.workshop.phone = this.route.snapshot.params['number'];
        this.route.params.subscribe(function (params) {
            var id = params['id'];
            if (id) {
                _this.workshopService.getWorkshop(id)
                    .subscribe(function (workshop) { return _this.workshop = workshop; });
                _this.title = 'Editar Taller';
            }
            _this.sharedServices.getDistributors()
                .subscribe(function (distributors) { return _this.distributors = distributors; });
        });
    };
    WorkshopFormComponent.prototype.onSubmit = function ($event) {
        var _this = this;
        this.form.value.phone = this.form.value.phone.toString().split(',');
        this.route.params.subscribe(function (params) {
            var id = params['id'];
            if (id) {
                _this.workshopService.updateWorkshop(id, _this.form.value)
                    .subscribe(null, function (err) { return alert('Error al guardar'); });
            }
            else {
                _this.workshopService.save(_this.form.value)
                    .subscribe(null);
            }
            _this.router.navigate(['/workshops']);
        });
        $event.preventDefault();
    };
    WorkshopFormComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'workshop-form',
            template: __webpack_require__(822),
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_workshop_service__["a" /* WorkshopService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_workshop_service__["a" /* WorkshopService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__shared_services_shared_service__["a" /* SharedServices */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__shared_services_shared_service__["a" /* SharedServices */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === 'function' && _e) || Object])
    ], WorkshopFormComponent);
    return WorkshopFormComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=/Users/dani/Projects/ArminCall/client/src/workshop-form.component.js.map

/***/ },

/***/ 399:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_workshop_service__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return WorkshopsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WorkshopsComponent = (function () {
    function WorkshopsComponent(workshopService, route) {
        this.workshopService = workshopService;
        this.route = route;
    }
    WorkshopsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var keyword = params['q'];
            if (keyword) {
                _this.workshopService.search(keyword)
                    .subscribe(function (workshops) { return _this.workshops = workshops; });
            }
            else {
                _this.workshopService.getAll()
                    .subscribe(function (workshops) { return _this.workshops = workshops; });
            }
        });
    };
    WorkshopsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__(823)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_workshop_service__["a" /* WorkshopService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_workshop_service__["a" /* WorkshopService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === 'function' && _b) || Object])
    ], WorkshopsComponent);
    return WorkshopsComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/dani/Projects/ArminCall/client/src/workshops.component.js.map

/***/ },

/***/ 400:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_workshops_component__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_workshop_form_component__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_workshop_service__ = __webpack_require__(178);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return WorkshopsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var WorkshopsModule = (function () {
    function WorkshopsModule() {
    }
    WorkshopsModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__components_workshops_component__["a" /* WorkshopsComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_workshop_form_component__["a" /* WorkshopFormComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_5__components_workshops_component__["a" /* WorkshopsComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_workshop_form_component__["a" /* WorkshopFormComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__services_workshop_service__["a" /* WorkshopService */]]
        }), 
        __metadata('design:paramtypes', [])
    ], WorkshopsModule);
    return WorkshopsModule;
}());
//# sourceMappingURL=/Users/dani/Projects/ArminCall/client/src/workshops.module.js.map

/***/ },

/***/ 401:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false,
    socketIOBaseEndpoint: 'http://localhost:5000'
};
//# sourceMappingURL=/Users/dani/Projects/ArminCall/client/src/environment.js.map

/***/ },

/***/ 484:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 484;


/***/ },

/***/ 485:
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(627);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(578);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(608);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/dani/Projects/ArminCall/client/src/main.js.map

/***/ },

/***/ 55:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(825);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HttpServices; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HttpServices = (function () {
    function HttpServices(http, router) {
        this.http = http;
        this.router = router;
    }
    HttpServices.prototype.buildHeaders = function () {
        this.headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Headers */]();
        this.headers.append("Content-Type", "application/json");
        this.headers.append("Authorization", localStorage.getItem('token'));
    };
    HttpServices.prototype.checkStatus = function (err) {
        if (err.status === 401) {
            this.router.navigate(['/login']);
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["Observable"].throw(new Error(err.status));
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
    HttpServices = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === 'function' && _b) || Object])
    ], HttpServices);
    return HttpServices;
    var _a, _b;
}());
//# sourceMappingURL=/Users/dani/Projects/ArminCall/client/src/http.services.js.map

/***/ },

/***/ 56:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_nav_bar_component__ = __webpack_require__(619);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_notfound_component__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_panel_component__ = __webpack_require__(620);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_shared_service__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_http_services__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__auth_services_auth_service__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pipes_diffForHumans_pipe__ = __webpack_require__(621);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pipes_durationForHumans_pipe__ = __webpack_require__(622);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pipes_humanizeDate_pipe__ = __webpack_require__(623);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_popover__ = __webpack_require__(801);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_popover___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_ng2_popover__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SharedModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"],
                __WEBPACK_IMPORTED_MODULE_12_ng2_popover__["PopoverModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__components_nav_bar_component__["a" /* NavBarComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components_notfound_component__["a" /* NotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_panel_component__["a" /* PanelComponent */],
                __WEBPACK_IMPORTED_MODULE_9__pipes_diffForHumans_pipe__["a" /* DiffForHumansPipe */],
                __WEBPACK_IMPORTED_MODULE_10__pipes_durationForHumans_pipe__["a" /* DurationForHumansPipe */],
                __WEBPACK_IMPORTED_MODULE_11__pipes_humanizeDate_pipe__["a" /* HumanizeDatePipe */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__components_nav_bar_component__["a" /* NavBarComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components_notfound_component__["a" /* NotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_panel_component__["a" /* PanelComponent */],
                __WEBPACK_IMPORTED_MODULE_9__pipes_diffForHumans_pipe__["a" /* DiffForHumansPipe */],
                __WEBPACK_IMPORTED_MODULE_10__pipes_durationForHumans_pipe__["a" /* DurationForHumansPipe */],
                __WEBPACK_IMPORTED_MODULE_11__pipes_humanizeDate_pipe__["a" /* HumanizeDatePipe */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__services_shared_service__["a" /* SharedServices */], __WEBPACK_IMPORTED_MODULE_7__services_http_services__["a" /* HttpServices */], __WEBPACK_IMPORTED_MODULE_8__auth_services_auth_service__["a" /* AuthService */]]
        }), 
        __metadata('design:paramtypes', [])
    ], SharedModule);
    return SharedModule;
}());
//# sourceMappingURL=/Users/dani/Projects/ArminCall/client/src/shared.module.js.map

/***/ },

/***/ 607:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: "\n        <router-outlet></router-outlet>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/dani/Projects/ArminCall/client/src/app.component.js.map

/***/ },

/***/ 608:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(607);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__calls_calls_module__ = __webpack_require__(611);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__demos_demos_module__ = __webpack_require__(617);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__reminders_reminders_module__ = __webpack_require__(618);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_shared_module__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__tickets_tickets_module__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__workshops_workshops_module__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__auth_auth_module__ = __webpack_require__(610);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__dashboard_dashboard_module__ = __webpack_require__(616);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_routing__ = __webpack_require__(609);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__info_board_info_board_component__ = __webpack_require__(390);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["RouterModule"],
                __WEBPACK_IMPORTED_MODULE_14__app_routing__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_6__calls_calls_module__["a" /* CallsModule */],
                __WEBPACK_IMPORTED_MODULE_7__demos_demos_module__["a" /* DemosModule */],
                __WEBPACK_IMPORTED_MODULE_8__reminders_reminders_module__["a" /* RemindersModule */],
                __WEBPACK_IMPORTED_MODULE_9__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_10__tickets_tickets_module__["a" /* TicketsModule */],
                __WEBPACK_IMPORTED_MODULE_11__workshops_workshops_module__["a" /* WorkshopsModule */],
                __WEBPACK_IMPORTED_MODULE_13__dashboard_dashboard_module__["a" /* DashboardModule */],
                __WEBPACK_IMPORTED_MODULE_12__auth_auth_module__["a" /* AuthModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_15__info_board_info_board_component__["a" /* InfoBoardComponent */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/dani/Projects/ArminCall/client/src/app.module.js.map

/***/ },

/***/ 609:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_components_login_component__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_components_dashboard_component__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__calls_components_calls_component__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tickets_components_tickets_component__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tickets_components_ticket_form_component__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tickets_components_ticket_detail_component__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__workshops_components_workshops_component__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__workshops_components_workshop_form_component__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__demos_components_demos_component__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__demos_components_demo_form_component__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__reminders_components_reminders_component__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__reminders_components_reminder_form_component__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_components_notfound_component__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__info_board_info_board_component__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__guards_auth_guard_service__ = __webpack_require__(389);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return routing; });
















var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forRoot([
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_1__auth_components_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'info-board',
        component: __WEBPACK_IMPORTED_MODULE_14__info_board_info_board_component__["a" /* InfoBoardComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard_service__["a" /* AuthGuard */]]
    },
    {
        path: 'dashboard',
        component: __WEBPACK_IMPORTED_MODULE_2__dashboard_components_dashboard_component__["a" /* DashboardComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard_service__["a" /* AuthGuard */]]
    },
    {
        path: 'workshops',
        component: __WEBPACK_IMPORTED_MODULE_7__workshops_components_workshops_component__["a" /* WorkshopsComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard_service__["a" /* AuthGuard */]]
    },
    {
        path: 'workshops/new',
        component: __WEBPACK_IMPORTED_MODULE_8__workshops_components_workshop_form_component__["a" /* WorkshopFormComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard_service__["a" /* AuthGuard */]]
    },
    {
        path: 'workshops/:id',
        component: __WEBPACK_IMPORTED_MODULE_8__workshops_components_workshop_form_component__["a" /* WorkshopFormComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard_service__["a" /* AuthGuard */]]
    },
    {
        path: 'calls',
        component: __WEBPACK_IMPORTED_MODULE_3__calls_components_calls_component__["a" /* CallsComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard_service__["a" /* AuthGuard */]]
    },
    {
        path: 'tickets',
        component: __WEBPACK_IMPORTED_MODULE_4__tickets_components_tickets_component__["a" /* TicketsComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard_service__["a" /* AuthGuard */]]
    },
    {
        path: 'tickets/:id',
        component: __WEBPACK_IMPORTED_MODULE_6__tickets_components_ticket_detail_component__["a" /* TicketDetailComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard_service__["a" /* AuthGuard */]]
    },
    {
        path: 'tickets/new/:workshop_id',
        component: __WEBPACK_IMPORTED_MODULE_5__tickets_components_ticket_form_component__["a" /* TicketFormComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard_service__["a" /* AuthGuard */]]
    },
    {
        path: 'demos',
        component: __WEBPACK_IMPORTED_MODULE_9__demos_components_demos_component__["a" /* DemosComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard_service__["a" /* AuthGuard */]]
    },
    {
        path: 'demos/new',
        component: __WEBPACK_IMPORTED_MODULE_10__demos_components_demo_form_component__["a" /* DemoFormComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard_service__["a" /* AuthGuard */]]
    },
    {
        path: 'reminders',
        component: __WEBPACK_IMPORTED_MODULE_11__reminders_components_reminders_component__["a" /* RemindersComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard_service__["a" /* AuthGuard */]]
    },
    {
        path: 'reminders/new',
        component: __WEBPACK_IMPORTED_MODULE_12__reminders_components_reminder_form_component__["a" /* ReminderFormComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard_service__["a" /* AuthGuard */]]
    },
    {
        path: '**',
        component: __WEBPACK_IMPORTED_MODULE_13__shared_components_notfound_component__["a" /* NotFoundComponent */]
    }
]);
//# sourceMappingURL=/Users/dani/Projects/ArminCall/client/src/app.routing.js.map

/***/ },

/***/ 610:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_login_component__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__guards_auth_guard_service__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__ = __webpack_require__(56);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AuthModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AuthModule = (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["RouterModule"]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_4__components_login_component__["a" /* LoginComponent */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__components_login_component__["a" /* LoginComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_6__guards_auth_guard_service__["a" /* AuthGuard */]],
        }), 
        __metadata('design:paramtypes', [])
    ], AuthModule);
    return AuthModule;
}());
//# sourceMappingURL=/Users/dani/Projects/ArminCall/client/src/auth.module.js.map

/***/ },

/***/ 611:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_modal__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tickets_tickets_module__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_calls_component__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_incomming_component__ = __webpack_require__(612);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_call_service__ = __webpack_require__(254);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CallsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var CallsModule = (function () {
    function CallsModule() {
    }
    CallsModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_4_ng2_modal__["ModalModule"],
                __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_5__tickets_tickets_module__["a" /* TicketsModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_6__components_calls_component__["a" /* CallsComponent */], __WEBPACK_IMPORTED_MODULE_7__components_incomming_component__["a" /* IncommingComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_6__components_calls_component__["a" /* CallsComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_8__services_call_service__["a" /* CallService */]]
        }), 
        __metadata('design:paramtypes', [])
    ], CallsModule);
    return CallsModule;
}());
//# sourceMappingURL=/Users/dani/Projects/ArminCall/client/src/calls.module.js.map

/***/ },

/***/ 612:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_call_service__ = __webpack_require__(254);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return IncommingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IncommingComponent = (function () {
    function IncommingComponent(callService) {
        this.callService = callService;
        this.incommingCall = {};
    }
    IncommingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.eventsConnection = this.callService.getIncommingCalls()
            .subscribe(function (incomming) {
            _this.modal.open();
            _this.incommingCall = incomming;
        });
    };
    IncommingComponent.prototype.ngOnDestroy = function () {
        this.eventsConnection.unsubscribe();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('incommingCallModal'), 
        __metadata('design:type', Object)
    ], IncommingComponent.prototype, "modal", void 0);
    IncommingComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'incomming',
            template: __webpack_require__(810)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_call_service__["a" /* CallService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_call_service__["a" /* CallService */]) === 'function' && _a) || Object])
    ], IncommingComponent);
    return IncommingComponent;
    var _a;
}());
//# sourceMappingURL=/Users/dani/Projects/ArminCall/client/src/incomming.component.js.map

/***/ },

/***/ 613:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_doughnut_chart_component__ = __webpack_require__(614);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_line_chart_component__ = __webpack_require__(615);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_chart_service__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_charts_ng2_charts__ = __webpack_require__(800);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_charts_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__ = __webpack_require__(56);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ChartsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ChartsModule = (function () {
    function ChartsModule() {
    }
    ChartsModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_5_ng2_charts_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__components_doughnut_chart_component__["a" /* DoughnutChartComponent */],
                __WEBPACK_IMPORTED_MODULE_3__components_line_chart_component__["a" /* LineChartComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__components_doughnut_chart_component__["a" /* DoughnutChartComponent */],
                __WEBPACK_IMPORTED_MODULE_3__components_line_chart_component__["a" /* LineChartComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__services_chart_service__["a" /* ChartService */]]
        }), 
        __metadata('design:paramtypes', [])
    ], ChartsModule);
    return ChartsModule;
}());
//# sourceMappingURL=/Users/dani/Projects/ArminCall/client/src/charts.module.js.map

/***/ },

/***/ 614:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DoughnutChartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DoughnutChartComponent = (function () {
    function DoughnutChartComponent() {
        this.labels = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
        this.data = [350, 450, 100];
        this.type = 'doughnut';
        this.legend = true;
        this.options = {
            animation: false,
            responsive: true
        };
    }
    DoughnutChartComponent.prototype.ngOnInit = function () { };
    DoughnutChartComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'doughnut-chart',
            template: "\n        <div style='display:block'>\n            <canvas baseChart\n                    [data]=\"data\"\n                    [labels]=\"labels\"\n                    [options]=\"options\"\n                    [colors]=\"colours\"\n                    [legend]=\"legend\"\n                    [chartType]=\"type\">\n            </canvas>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], DoughnutChartComponent);
    return DoughnutChartComponent;
}());
//# sourceMappingURL=/Users/dani/Projects/ArminCall/client/src/doughnut-chart.component.js.map

/***/ },

/***/ 615:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_chart_service__ = __webpack_require__(385);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LineChartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LineChartComponent = (function () {
    function LineChartComponent(chartService) {
        this.chartService = chartService;
        this.lineChartLabels = [];
        this.lineChartData = [
            {
                data: [],
                label: 'Llamadas'
            }
        ];
        this.lineChartOptions = {
            animation: false,
            responsive: true
        };
        this.lineChartColours = [
            {
                backgroundColor: 'rgba(175, 218, 247, 0.3)',
                borderColor: 'rgba(54, 162, 235, 1)',
                pointBackgroundColor: 'rgba(54, 162, 235, 1)',
                pointBorderColor: 'white',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }
        ];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
    }
    LineChartComponent.prototype.ngOnInit = function () {
        this.loadChartData(6);
    };
    LineChartComponent.prototype.newChartData = function (e) {
        if (e.target.checked) {
            this.loadChartData(e.target.value);
        }
    };
    LineChartComponent.prototype.loadChartData = function (n_months) {
        var _this = this;
        this.chartService.getAll(n_months).subscribe(function (data) {
            _this.lineChartLabels = data.tags;
            _this.lineChartData[0].data = data.count;
        });
    };
    LineChartComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'line-chart',
            template: "\n        \n        <div class=\"text-center\">\n            <input type=\"radio\" \n                   name=\"radio1\" \n                   value=\"6\" \n                   (change)=\"newChartData($event)\" checked> \u00DAltimos 6 meses &nbsp;\n            \n            <input type=\"radio\" \n                   name=\"radio1\" \n                   value=\"12\" \n                   (change)=\"newChartData($event)\"> \u00DAltimo a\u00F1o &nbsp;\n        </div>\n        \n\n        <div style='display:block'>\n            <canvas baseChart\n                    [datasets]=\"lineChartData\"\n                    [labels]=\"lineChartLabels\"\n                    [options]=\"lineChartOptions\"\n                    [colors]=\"lineChartColours\"\n                    [legend]=\"lineChartLegend\"\n                    [chartType]=\"lineChartType\">\n            </canvas>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_chart_service__["a" /* ChartService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_chart_service__["a" /* ChartService */]) === 'function' && _a) || Object])
    ], LineChartComponent);
    return LineChartComponent;
    var _a;
}());
//# sourceMappingURL=/Users/dani/Projects/ArminCall/client/src/line-chart.component.js.map

/***/ },

/***/ 616:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__charts_charts_module__ = __webpack_require__(613);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_dashboard_component__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_shared_service__ = __webpack_require__(97);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DashboardModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DashboardModule = (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"],
                __WEBPACK_IMPORTED_MODULE_3__charts_charts_module__["a" /* ChartsModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__components_dashboard_component__["a" /* DashboardComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_5__components_dashboard_component__["a" /* DashboardComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_6__shared_services_shared_service__["a" /* SharedServices */]],
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardModule);
    return DashboardModule;
}());
//# sourceMappingURL=/Users/dani/Projects/ArminCall/client/src/dashboard.module.js.map

/***/ },

/***/ 617:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_demos_component__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_demo_form_component__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_demo_service__ = __webpack_require__(255);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DemosModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DemosModule = (function () {
    function DemosModule() {
    }
    DemosModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["RouterModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__components_demos_component__["a" /* DemosComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_demo_form_component__["a" /* DemoFormComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_5__components_demos_component__["a" /* DemosComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_demo_form_component__["a" /* DemoFormComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__services_demo_service__["a" /* DemoService */]]
        }), 
        __metadata('design:paramtypes', [])
    ], DemosModule);
    return DemosModule;
}());
//# sourceMappingURL=/Users/dani/Projects/ArminCall/client/src/demos.module.js.map

/***/ },

/***/ 618:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_reminder_form_component__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_reminders_component__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_reminder_service__ = __webpack_require__(256);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return RemindersModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RemindersModule = (function () {
    function RemindersModule() {
    }
    RemindersModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__components_reminders_component__["a" /* RemindersComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_reminder_form_component__["a" /* ReminderFormComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_6__components_reminders_component__["a" /* RemindersComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_reminder_form_component__["a" /* ReminderFormComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__services_reminder_service__["a" /* ReminderService */]]
        }), 
        __metadata('design:paramtypes', [])
    ], RemindersModule);
    return RemindersModule;
}());
//# sourceMappingURL=/Users/dani/Projects/ArminCall/client/src/reminders.module.js.map

/***/ },

/***/ 619:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_shared_service__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_services_auth_service__ = __webpack_require__(128);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NavBarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavBarComponent = (function () {
    function NavBarComponent(router, sharedServices, authService) {
        this.router = router;
        this.sharedServices = sharedServices;
        this.authService = authService;
        this.badges = {
            pendingCalls: 0,
            pendingTickets: 0,
            pendingDemos: 0,
            pendingReminders: 0
        };
    }
    NavBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sharedServices.getBadges()
            .subscribe(function (badges) { return _this.badges = badges; });
    };
    NavBarComponent.prototype.logout = function () {
        this.authService.logout();
        this.router.navigate(['/login']);
    };
    NavBarComponent.prototype.find = function (keyword) {
        this.router.navigate(['/workshops', { 'q': keyword }]);
    };
    NavBarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'nav-bar',
            template: __webpack_require__(817),
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_shared_service__["a" /* SharedServices */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_shared_service__["a" /* SharedServices */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__auth_services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__auth_services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object])
    ], NavBarComponent);
    return NavBarComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/dani/Projects/ArminCall/client/src/nav-bar.component.js.map

/***/ },

/***/ 620:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PanelComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PanelComponent = (function () {
    function PanelComponent() {
        //red #e84c3d
        //blue #1395fd
        //green #1abc9c
        //yellow #f39c11
        this.title = "Panel";
        this.counter = 5;
        this.panelColor = "#1395fd";
        this.icon = "fa fa-users fa-4x pull-right";
    }
    PanelComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], PanelComponent.prototype, "title", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], PanelComponent.prototype, "counter", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('panel-color'), 
        __metadata('design:type', Object)
    ], PanelComponent.prototype, "panelColor", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('fa-icon'), 
        __metadata('design:type', Object)
    ], PanelComponent.prototype, "icon", void 0);
    PanelComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'panel',
            styles: ["\n        .panel {\n            cursor: pointer   \n        }\n        \n        .panel-body {\n            padding: 12px;\n            color: white;\n        }\n\n        .panel-footer {\n            padding: 2px;\n            color: white;\n            opacity: 0.9;\n            filter: alpha(opacity=90);\n        }\n\n        .counter{\n            font-size: 3.5rem;\n            font-weight: bold;\n        }\n\n        .icon {\n            opacity: 0.3;\n            filter: alpha(opacity=30);\n        }\n\n        span {\n            font-size: 1.5rem\n        }\n    "],
            template: "\n\n        \n            <div class=\"col-md-3\">\n\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-body\" [ngStyle]=\"{'background-color': panelColor}\">\n\n                        <div class=\"row\">\n                            <div class=\"col-sm-8\">\n                                <span class=\"counter\">{{counter}}</span><br>\n                                <span class=\"lead\">{{title}}</span>\n                            </div>\n                            <div class=\"col-sm-4\">\n                                <i class=\"icon\" [ngClass]=\"icon\" aria-hidden=\"true\"></i>\n                            </div>\n                        </div>\n\n                    </div>\n                    <div class=\"panel-footer\" [ngStyle]=\"{'background-color': panelColor}\"> \n                        <div class=\"text-center\">\n                            Ver detalle <i class=\"fa fa-info-circle\" aria-hidden=\"true\"></i>\n                        </div> \n                    </div>\n                </div>\n\n            </div>\n        \n    "
        }), 
        __metadata('design:paramtypes', [])
    ], PanelComponent);
    return PanelComponent;
}());
//# sourceMappingURL=/Users/dani/Projects/ArminCall/client/src/panel.component.js.map

/***/ },

/***/ 621:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment_locale_es__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment_locale_es___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment_locale_es__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DiffForHumansPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DiffForHumansPipe = (function () {
    function DiffForHumansPipe() {
    }
    DiffForHumansPipe.prototype.transform = function (value, args) {
        if (value)
            return __WEBPACK_IMPORTED_MODULE_1_moment__(value, __WEBPACK_IMPORTED_MODULE_1_moment__["ISO_8601"]).fromNow();
    };
    DiffForHumansPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'diffForHumans'
        }), 
        __metadata('design:paramtypes', [])
    ], DiffForHumansPipe);
    return DiffForHumansPipe;
}());
//# sourceMappingURL=/Users/dani/Projects/ArminCall/client/src/diffForHumans.pipe.js.map

/***/ },

/***/ 622:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment_locale_es__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment_locale_es___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment_locale_es__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DurationForHumansPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DurationForHumansPipe = (function () {
    function DurationForHumansPipe() {
    }
    DurationForHumansPipe.prototype.transform = function (value, args) {
        //const timing = (args && args[0]) ? args[0] : 'seconds'
        if (value)
            return __WEBPACK_IMPORTED_MODULE_1_moment__["duration"](parseInt(value), 'seconds').humanize();
    };
    DurationForHumansPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'durationForHumans'
        }), 
        __metadata('design:paramtypes', [])
    ], DurationForHumansPipe);
    return DurationForHumansPipe;
}());
//# sourceMappingURL=/Users/dani/Projects/ArminCall/client/src/durationForHumans.pipe.js.map

/***/ },

/***/ 623:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment_locale_es__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment_locale_es___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment_locale_es__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HumanizeDatePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HumanizeDatePipe = (function () {
    function HumanizeDatePipe() {
    }
    HumanizeDatePipe.prototype.transform = function (value, args) {
        if (value)
            return __WEBPACK_IMPORTED_MODULE_1_moment__(value, __WEBPACK_IMPORTED_MODULE_1_moment__["ISO_8601"]).format("D MMM YYYY, HH:mm");
    };
    HumanizeDatePipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'humanizeDate'
        }), 
        __metadata('design:paramtypes', [])
    ], HumanizeDatePipe);
    return HumanizeDatePipe;
}());
//# sourceMappingURL=/Users/dani/Projects/ArminCall/client/src/humanizeDate.pipe.js.map

/***/ },

/***/ 624:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_ticket_service__ = __webpack_require__(129);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TicketsOfWorkshopComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TicketsOfWorkshopComponent = (function () {
    function TicketsOfWorkshopComponent(ticketService) {
        this.ticketService = ticketService;
        this.workshopId = null;
        this.callIds = [];
        this.tickets = [];
        this.selectedTicketId = null;
        this.ticketMarkedAsCompleted = false;
        this.descriptionOfNewTicket = "";
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
        var _this = this;
        if (this.selectedTicketId != null && this.descriptionOfNewTicket == '') {
            this.ticketService.updateTicket(this.selectedTicketId, {
                'workshop': this.workshopId,
                'calls': this.callIds,
                'completed': this.ticketMarkedAsCompleted
            }).subscribe(function (x) {
                console.log("by id");
                _this.modal.close();
            });
        }
        else if (this.selectedTicketId == null && this.descriptionOfNewTicket != '') {
            this.ticketService.save({
                'workshop': this.workshopId,
                'calls': this.callIds,
                'completed': this.ticketMarkedAsCompleted,
                'description': this.descriptionOfNewTicket
            }).subscribe(function (x) {
                console.log("by descrip");
                _this.modal.close();
            });
        }
        else {
            alert('Something went wrong!');
            return;
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('ticketsModal'), 
        __metadata('design:type', Object)
    ], TicketsOfWorkshopComponent.prototype, "modal", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('workshop-id'), 
        __metadata('design:type', Object)
    ], TicketsOfWorkshopComponent.prototype, "workshopId", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('call-ids'), 
        __metadata('design:type', Array)
    ], TicketsOfWorkshopComponent.prototype, "callIds", void 0);
    TicketsOfWorkshopComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'workshop-tickets',
            template: __webpack_require__(820)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_ticket_service__["a" /* TicketService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_ticket_service__["a" /* TicketService */]) === 'function' && _a) || Object])
    ], TicketsOfWorkshopComponent);
    return TicketsOfWorkshopComponent;
    var _a;
}());
//# sourceMappingURL=/Users/dani/Projects/ArminCall/client/src/tickets-of-workshop.component.js.map

/***/ },

/***/ 625:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Ticket; });
var Ticket = (function () {
    function Ticket(description, completed) {
        this.description = description;
        this.completed = completed;
    }
    return Ticket;
}());
//# sourceMappingURL=/Users/dani/Projects/ArminCall/client/src/ticket.js.map

/***/ },

/***/ 626:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* unused harmony export Address */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Workshop; });
var Address = (function () {
    function Address() {
    }
    return Address;
}());
var Workshop = (function () {
    function Workshop() {
        this.address = new Address();
    }
    return Workshop;
}());
//# sourceMappingURL=/Users/dani/Projects/ArminCall/client/src/workshop.js.map

/***/ },

/***/ 627:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(646);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(639);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(635);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(641);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(640);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(638);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(637);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(645);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(634);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(633);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(643);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(636);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(644);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(642);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(647);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(1100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/Users/dani/Projects/ArminCall/client/src/polyfills.js.map

/***/ },

/***/ 806:
/***/ function(module, exports) {

module.exports = "body {\n  background: #e9e9e9;\n  color: #666666;\n  font-family: 'RobotoDraft', 'Roboto', sans-serif;\n  font-size: 14px;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n/* Pen Title */\n.pen-title {\n  padding: 50px 0;\n  text-align: center;\n  letter-spacing: 2px;\n}\n.pen-title h1 {\n  margin: 0 0 20px;\n  font-size: 48px;\n  font-weight: 300;\n}\n.pen-title span {\n  font-size: 12px;\n}\n.pen-title span .fa {\n  color: #284f6f;\n}\n.pen-title span a {\n  color: #284f6f;\n  font-weight: 600;\n  text-decoration: none;\n}\n\n/* Rerun */\n.rerun {\n  margin: 0 0 30px;\n  text-align: center;\n}\n.rerun a {\n  cursor: pointer;\n  display: inline-block;\n  background: #284f6f;\n  border-radius: 3px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  padding: 10px 20px;\n  color: #ffffff;\n  text-decoration: none;\n  -webkit-transition: 0.3s ease;\n  transition: 0.3s ease;\n}\n.rerun a:hover {\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n}\n\n/* Scroll To Bottom */\n#codepen, #portfolio {\n  position: fixed;\n  bottom: 30px;\n  right: 30px;\n  background: #363636;\n  width: 56px;\n  height: 56px;\n  border-radius: 100%;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  -webkit-transition: 0.3s ease;\n  transition: 0.3s ease;\n  color: #ffffff;\n  text-align: center;\n}\n#codepen i, #portfolio i {\n  line-height: 56px;\n}\n#codepen:hover, #portfolio:hover {\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n}\n\n/* CodePen */\n#portfolio {\n  bottom: 96px;\n  right: 36px;\n  background: #284f6f;\n  width: 44px;\n  height: 44px;\n  -webkit-animation: buttonFadeInUp 1s ease;\n  animation: buttonFadeInUp 1s ease;\n}\n#portfolio i {\n  line-height: 44px;\n}\n\n/* Container */\n.container {\n  position: relative;\n  max-width: 460px;\n  width: 100%;\n  margin: 0 auto 100px;\n}\n.container.active .card:first-child {\n  background: #f2f2f2;\n  margin: 0 15px;\n}\n.container.active .card:nth-child(2) {\n  background: #fafafa;\n  margin: 0 10px;\n}\n.container.active .card.alt {\n  top: 20px;\n  right: 0;\n  width: 100%;\n  min-width: 100%;\n  height: auto;\n  border-radius: 5px;\n  padding: 60px 0 40px;\n  overflow: hidden;\n}\n.container.active .card.alt .toggle {\n  position: absolute;\n  top: 40px;\n  right: -70px;\n  box-shadow: none;\n  -webkit-transform: scale(10);\n  transform: scale(10);\n  -webkit-transition: -webkit-transform .3s ease;\n  transition: -webkit-transform .3s ease;\n  transition: transform .3s ease;\n  transition: transform .3s ease, -webkit-transform .3s ease;\n}\n.container.active .card.alt .toggle:before {\n  content: '';\n}\n.container.active .card.alt .title,\n.container.active .card.alt .input-container,\n.container.active .card.alt .button-container {\n  left: 0;\n  opacity: 1;\n  visibility: visible;\n  -webkit-transition: .3s ease;\n  transition: .3s ease;\n}\n.container.active .card.alt .title {\n  -webkit-transition-delay: .3s;\n          transition-delay: .3s;\n}\n.container.active .card.alt .input-container {\n  -webkit-transition-delay: .4s;\n          transition-delay: .4s;\n}\n.container.active .card.alt .input-container:nth-child(2) {\n  -webkit-transition-delay: .5s;\n          transition-delay: .5s;\n}\n.container.active .card.alt .input-container:nth-child(3) {\n  -webkit-transition-delay: .6s;\n          transition-delay: .6s;\n}\n.container.active .card.alt .button-container {\n  -webkit-transition-delay: .7s;\n          transition-delay: .7s;\n}\n\n/* Card */\n.card {\n  position: relative;\n  background: #ffffff;\n  border-radius: 5px;\n  padding: 60px 0 40px 0;\n  box-sizing: border-box;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  -webkit-transition: .3s ease;\n  transition: .3s ease;\n  /* Title */\n  /* Inputs */\n  /* Button */\n  /* Footer */\n  /* Alt Card */\n}\n.card:first-child {\n  background: #fafafa;\n  height: 10px;\n  border-radius: 5px 5px 0 0;\n  margin: 0 10px;\n  padding: 0;\n}\n.card .title {\n  position: relative;\n  z-index: 1;\n  border-left: 5px solid #284f6f;\n  margin: 0 0 35px;\n  padding: 10px 0 10px 50px;\n  color: #284f6f;\n  font-size: 32px;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.card .input-container {\n  position: relative;\n  margin: 0 60px 50px;\n}\n.card .input-container input {\n  outline: none;\n  z-index: 1;\n  position: relative;\n  background: none;\n  width: 100%;\n  height: 60px;\n  border: 0;\n  color: #212121;\n  font-size: 24px;\n  font-weight: 400;\n}\n.card .input-container input:focus ~ label {\n  color: #9d9d9d;\n  -webkit-transform: translate(-12%, -50%) scale(0.75);\n          transform: translate(-12%, -50%) scale(0.75);\n}\n.card .input-container input:focus ~ .bar:before, .card .input-container input:focus ~ .bar:after {\n  width: 50%;\n}\n.card .input-container input:valid ~ label {\n  color: #9d9d9d;\n  -webkit-transform: translate(-12%, -50%) scale(0.75);\n          transform: translate(-12%, -50%) scale(0.75);\n}\n.card .input-container label {\n  position: absolute;\n  top: 0;\n  left: 0;\n  color: #757575;\n  font-size: 24px;\n  font-weight: 300;\n  line-height: 60px;\n  -webkit-transition: 0.2s ease;\n  transition: 0.2s ease;\n}\n.card .input-container .bar {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  /*background: #757575;*/\n  width: 100%;\n  height: 1px;\n}\n.card .input-container .bar:before, .card .input-container .bar:after {\n  content: '';\n  position: absolute;\n  /*background: yellow;*/\n  width: 0;\n  height: 2px;\n  -webkit-transition: .2s ease;\n  transition: .2s ease;\n}\n.card .input-container .bar:before {\n  left: 50%;\n}\n.card .input-container .bar:after {\n  right: 50%;\n}\n.card .button-container {\n  margin: 0 60px;\n  text-align: center;\n}\n.card .button-container button {\n  outline: 0;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  background: 0;\n  width: 240px;\n  border: 2px solid #e3e3e3;\n  padding: 20px 0;\n  font-size: 24px;\n  font-weight: 600;\n  line-height: 1;\n  text-transform: uppercase;\n  overflow: hidden;\n  -webkit-transition: .3s ease;\n  transition: .3s ease;\n}\n.card .button-container button span {\n  position: relative;\n  z-index: 1;\n  color: #ddd;\n  -webkit-transition: .3s ease;\n  transition: .3s ease;\n}\n.card .button-container button:before {\n  content: '';\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  display: block;\n  background: #284f6f;\n  width: 30px;\n  height: 30px;\n  border-radius: 100%;\n  margin: -15px 0 0 -15px;\n  opacity: 0;\n  -webkit-transition: .3s ease;\n  transition: .3s ease;\n}\n.card .button-container button:hover, .card .button-container button:active, .card .button-container button:focus {\n  border-color: #284f6f;\n}\n.card .button-container button:hover span, .card .button-container button:active span, .card .button-container button:focus span {\n  color: #284f6f;\n}\n.card .button-container button:active span, .card .button-container button:focus span {\n  color: #ffffff;\n}\n.card .button-container button:active:before, .card .button-container button:focus:before {\n  opacity: 1;\n  -webkit-transform: scale(10);\n  transform: scale(10);\n}\n.card .footer {\n  margin: 40px 0 0;\n  color: #d3d3d3;\n  font-size: 24px;\n  font-weight: 300;\n  text-align: center;\n}\n.card .footer a {\n  color: inherit;\n  text-decoration: none;\n  -webkit-transition: .3s ease;\n  transition: .3s ease;\n}\n.card .footer a:hover {\n  color: #bababa;\n}\n.card.alt {\n  position: absolute;\n  top: 40px;\n  right: -70px;\n  z-index: 10;\n  width: 140px;\n  height: 140px;\n  background: none;\n  border-radius: 100%;\n  box-shadow: none;\n  padding: 0;\n  -webkit-transition: .3s ease;\n  transition: .3s ease;\n  /* Toggle */\n  /* Title */\n  /* Input */\n  /* Button */\n}\n.card.alt .toggle {\n  position: relative;\n  background: #284f6f;\n  width: 140px;\n  height: 140px;\n  border-radius: 100%;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  color: #ffffff;\n  font-size: 58px;\n  line-height: 140px;\n  text-align: center;\n  cursor: pointer;\n}\n.card.alt .toggle:before {\n  content: '\\f040';\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-transform: translate(0, 0);\n          transform: translate(0, 0);\n}\n.card.alt .title,\n.card.alt .input-container,\n.card.alt .button-container {\n  left: 100px;\n  opacity: 0;\n  visibility: hidden;\n}\n.card.alt .title {\n  position: relative;\n  border-color: #ffffff;\n  color: #ffffff;\n}\n.card.alt .title .close {\n  cursor: pointer;\n  position: absolute;\n  top: 0;\n  right: 60px;\n  display: inline;\n  color: #ffffff;\n  font-size: 58px;\n  font-weight: 400;\n}\n.card.alt .title .close:before {\n  content: '\\00d7';\n}\n.card.alt .input-container input {\n  color: #ffffff;\n}\n.card.alt .input-container input:focus ~ label {\n  color: #ffffff;\n}\n.card.alt .input-container input:focus ~ .bar:before, .card.alt .input-container input:focus ~ .bar:after {\n  background: #ffffff;\n}\n.card.alt .input-container input:valid ~ label {\n  color: #ffffff;\n}\n.card.alt .input-container label {\n  color: rgba(255, 255, 255, 0.8);\n}\n.card.alt .input-container .bar {\n  background: rgba(255, 255, 255, 0.8);\n}\n.card.alt .button-container button {\n  width: 100%;\n  background: #ffffff;\n  border-color: #ffffff;\n}\n.card.alt .button-container button span {\n  color: #284f6f;\n}\n.card.alt .button-container button:hover {\n  background: rgba(255, 255, 255, 0.9);\n}\n.card.alt .button-container button:active:before, .card.alt .button-container button:focus:before {\n  display: none;\n}\n\n/* Keyframes */\n@-webkit-keyframes buttonFadeInUp {\n  0% {\n    bottom: 30px;\n    opacity: 0;\n  }\n}\n@keyframes buttonFadeInUp {\n  0% {\n    bottom: 30px;\n    opacity: 0;\n  }\n}\n"

/***/ },

/***/ 808:
/***/ function(module, exports) {

module.exports = "<div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"message\">\n    <p class=\"text-center\">{{ message }}</p>\n</div>\n\n<!-- Mixins-->\n<!-- Pen Title-->\n<div class=\"pen-title\">\n  <h1>ARMIN Call</h1><span>Made <i class='fa fa-code'></i> by <a>Daniel Ramírez</a></span>\n</div>\n<div class=\"container\">\n  <div class=\"card\"></div>\n  <div class=\"card\">\n    <h1 class=\"title\">Login</h1>\n\n    <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n      <div class=\"input-container\" [class.has-error]=\"form.controls.username.touched && form.controls.username.errors\">\n          <input type=\"text\" formControlName=\"username\"/>\n          <label for=\"Username\">Usuario</label>\n          <div class=\"bar\"></div>\n\n          <div *ngIf=\"form.controls.username.touched && form.controls.username.errors\" >\n              <small class=\"text-danger\" *ngIf=\"form.controls.username.errors.required\">\n                  Debes introducir tu usuario.\n              </small>\n          </div>\n      </div>\n      <div class=\"input-container\" [class.has-error]=\"form.controls.password.touched && form.controls.password.errors\">\n          <input type=\"password\" formControlName=\"password\"/>\n          <label for=\"Password\">Contraseña</label>\n          <div class=\"bar\"></div>\n\n          <div *ngIf=\"form.controls.password.touched && form.controls.password.errors\" >\n              <small class=\"text-danger\" *ngIf=\"form.controls.password.errors.required\">\n                  Debes introducir tu contraseña.\n              </small>\n          </div>\n      </div>\n      <div class=\"button-container\">\n          <button type=\"submit\"><span>Go</span></button>\n      </div>\n<!--       <div class=\"footer\"><a href=\"#\">Forgot your password?</a></div>-->    \n    </form>\n\n\n  </div>\n\n</div>\n"

/***/ },

/***/ 809:
/***/ function(module, exports) {

module.exports = "<nav-bar></nav-bar>\n\n<div class=\"container\">\n\n    <div class=\"page-header\">\n        <h2>Llamadas</h2>\n    </div>\n\n    <button class=\"btn btn-primary btn-sm pull-right\" \n            [disabled]=\"selectedCallIds.length == 0\"\n            (click)=\"ticketsModal.show()\">        \n            Asociar Incidencia\n    </button> \n\n    <br><br>\n\n    <ul class=\"nav nav-tabs\">\n        <li class=\"active\" (click)=\"loadPendingCalls()\">\n            <a data-toggle=\"tab\" aria-expanded=\"true\">Llamadas Pendientes</a>\n        </li>\n        <li class=\"\" (click)=\"loadHistoryCalls()\">\n            <a data-toggle=\"tab\" aria-expanded=\"false\">Historial</a>\n        </li>\n    </ul>\n\n    <br><br>\n\n    <table class=\"table table-striped table-hover \">\n        <thead>\n            <tr>\n                <th [hidden]=\"discarButtonHidden\"></th>\n                <th>Taller</th>\n                <th>Emisor</th>\n                <th>Receptor</th>\n                <th>Fecha/Hora</th>\n                <th>Duración</th>\n                <th>Estado</th>\n                <th [hidden]=\"discarButtonHidden\">Acción</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let call of calls\">\n                <td [hidden]=\"discarButtonHidden\">\n                    <div class=\"checkbox\" *ngIf=\"call.workshop\">\n                        <label>\n                            <input type=\"checkbox\" value=\"\" (change)=\"select($event, call)\" />\n                        </label>\n                    </div>\n                </td>\n                <td> \n                    <div *ngIf=\"call.workshop\">\n                        <a [routerLink]=\"['/workshops', call.workshop._id]\"> \n                            {{call.workshop.name}} \n                        </a>\n                    </div>\n                </td>\n                <td>{{call.callerNumber}}</td>\n                <td>{{call.recieverNumber}}</td>\n                <td>{{call.createdAt | humanizeDate}} ({{call.date | diffForHumans}})</td>\n                <td>{{call.durationInSeconds | durationForHumans}}</td>\n                <td>\n                    \n                    <div *ngIf=\"call.status == 'Respondida'\">\n                        <a data-toggle=\"tooltip\" data-placement=\"right\" title=\"{{call.status}}\">\n                            <i class=\"fa fa-phone-square fa-2x\" \n                            style=\"color:green\"\n                            aria-hidden=\"true\"></i>\n                        </a>\n                    </div>\n\n                    <div *ngIf=\"call.status == 'No Respondida'\">\n                        <a data-toggle=\"tooltip\" data-placement=\"right\" title=\"{{call.status}}\">\n                            <i class=\"fa fa-phone-square fa-2x\" \n                            style=\"color:red\"\n                            aria-hidden=\"true\"></i>\n                        </a>\n                    </div>\n\n                    <div *ngIf=\"call.status == 'Ocupada'\">\n                        <a data-toggle=\"tooltip\" data-placement=\"right\" title=\"{{call.status}}\">\n                            <i class=\"fa fa-phone-square fa-2x\" \n                            style=\"color:#ff9800\"\n                            aria-hidden=\"true\"></i>\n                        </a>\n                    </div>\n\n                    <div *ngIf=\"call.status == 'Fallada'\">\n                        <a data-toggle=\"tooltip\" data-placement=\"right\" title=\"{{call.status}}\">\n                            <i class=\"fa fa-phone-square fa-2x\" \n                            style=\"color:grey\"\n                            aria-hidden=\"true\"></i>\n                        </a>\n                    </div>\n                    \n                </td>\n                <td [hidden]=\"discarButtonHidden\">\n                    <a class=\"btn btn-warning btn-sm\" (click)=\"discard(call)\">\n                        Descartar\n                    </a>\n                </td>\n            </tr>\n        </tbody>\n    </table> \n\n\n    <workshop-tickets #ticketsModal\n        [call-ids]=\"selectedCallIds\" \n        [workshop-id]=\"workshopIdOfSelectedCall\">\n    </workshop-tickets>\n\n    <incomming></incomming>\n\n</div>"

/***/ },

/***/ 810:
/***/ function(module, exports) {

module.exports = "<modal #incommingCallModal \n                title=\"Llamada entrante\"\n                modalClass=\"modal-lg\"\n                [hideCloseButton]=\"false\"\n                [closeOnEscape]=\"true\"\n                [closeOnOutsideClick]=\"true\"\n        >\n\n<modal-header>\n    <h2 class=\"text-center\" *ngIf=\"incommingCall.workshop\">\n        {{incommingCall.workshop?.name}}\n        <small>{{incommingCall.number}}</small>\n    </h2>\n    <h2 class=\"text-center\" *ngIf=\"!incommingCall.workshop\">\n        {{incommingCall.number}}\n    </h2>\n\n</modal-header>\n\n<modal-content>\n\n    <div class=\"row\">\n        <div class=\"col-md-5\">  \n            <form class=\"form-horizontal\">\n                <div class=\"form-group\">\n                    <label class=\"col-lg-3 control-label\">Contacto:</label>\n                    <div class=\"col-lg-9\">\n                        <input type=\"text\" class=\"form-control\" readonly \n                        value=\"{{incommingCall.workshop?.contact}}\">\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"col-lg-3 control-label\">Distribuidor:</label>\n                    <div class=\"col-lg-9\">\n                        <input type=\"text\" class=\"form-control\" readonly \n                        value=\"{{incommingCall.workshop?.distributor}}\">\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"col-lg-3 control-label\">Dirección:</label>\n                    <div class=\"col-lg-9\">\n                        <input type=\"text\" class=\"form-control\" readonly \n                        value=\"{{incommingCall.workshop?.address?.description}}\">\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"col-lg-3 control-label\">Licencia:</label>\n                    <div class=\"col-lg-9\">\n                        <input type=\"text\" class=\"form-control\" readonly \n                        value=\"ARMIN PRO, ARMIN GEST (fake)\">\n                    </div>\n                </div>\n            </form>\n        </div>\n\n        <div class=\"col-md-offset-2 col-md-5\">  \n            <div *ngIf=\"incommingCall.workshop\">\n                <a class=\"btn btn-primary btn-sm\"\n                   [routerLink]=\"['/tickets/new', incommingCall.workshop._id]\">\n                   Abrir incidencia\n                </a> \n            </div>\n            <div *ngIf=\"!incommingCall.workshop\">\n                <a class=\"btn btn-primary btn-sm\"\n                   [routerLink]=\"['/workshops/new', {'number': incommingCall.number}]\">\n                   Crear taller\n                </a> \n            </div>\n        </div>\n\n    </div>\n    \n    <br>\n\n    <div class=\"panel panel-warning\">\n        <div class=\"panel-heading\">\n            <h3 class=\"panel-title\">Incidencias Activas</h3>\n        </div>\n        <div class=\"panel-body\">\n            <table class=\"table table-striped table-hover \">\n                <thead>\n                    <tr>\n                        <th>Fecha/Hora</th>\n                        <th>Descripción</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let ticket of incommingCall.tickets\">\n                        <td>{{ticket.createdAt | diffForHumans}}</td>\n                        <td>{{ticket.description}}</td>\n                    </tr>\n                </tbody>\n            </table> \n        </div>\n    </div>\n\n</modal-content>\n\n<modal-footer>\n</modal-footer>\n\n</modal>"

/***/ },

/***/ 811:
/***/ function(module, exports) {

module.exports = "<nav-bar></nav-bar>\n\n<div class=\"container\">\n\n        <br>  \n\n        <panel  routerLink=\"/calls\" \n                [title]=\"'Llamadas'\" \n                [counter]=\"badges.pendingCalls\" \n                [panel-color]=\"'#e84c3d'\"\n                [fa-icon]=\"'fa fa-phone fa-4x'\"  \n        >\n        </panel>\n\n        <panel  routerLink=\"/tickets\" \n                [title]=\"'Incidencias'\" \n                [counter]=\"badges.pendingTickets\" \n                [panel-color]=\"'#f39c11'\"\n                [fa-icon]=\"'fa fa-exclamation-triangle fa-4x'\"\n        >\n        </panel>\n\n        <panel  routerLink=\"/demos\" \n                [title]=\"'Demos'\" \n                [counter]=\"badges.pendingDemos\" \n                [panel-color]=\"'#1395fd'\"\n                [fa-icon]=\"'fa fa-desktop fa-4x'\"\n        >\n        </panel>\n\n        <panel  routerLink=\"/reminders\" \n                [title]=\"'Recordatorios'\" \n                [counter]=\"badges.pendingReminders\" \n                [panel-color]=\"'#1abc9c'\"\n                [fa-icon]=\"'fa fa-bell fa-4x'\"  \n        >\n        </panel>\n\n\n        <!--<div class=\"row\">\n                <div class=\"col-md-12\">\n                        <div class=\"well pull-right\">\n                                <h6>Estado de sistemas</h6>\n                                <i title=\"Activo\" class=\"fa fa-square fa-1x\" aria-hidden=\"true\" style=\"color:#19a719;\"></i>&nbsp; <small>ARMIN</small>\n                                <i title=\"Inactivo\" class=\"fa fa-square fa-1x\" aria-hidden=\"true\" style=\"color:#e42e2e;\"></i>&nbsp; <small>ARMIN GEST</small>\n                        </div>\n                </div>\n        </div>-->\n\n        <p>&nbsp;</p>\n\n        <div class=\"row\">\n                <div class=\"col-md-7\">\n                        <div class=\"well\">\n                                <line-chart></line-chart>\n                        </div>\n                </div>\n                <div class=\"col-md-5\">\n                        <div class=\"well\">\n                                <doughnut-chart></doughnut-chart>\n                        </div>\n                </div>\n        </div> \n\n</div>"

/***/ },

/***/ 812:
/***/ function(module, exports) {

module.exports = "<nav-bar></nav-bar>\n\n<div class=\"container\">\n\n    <br><br>\n\n    <div class=\"well\">\n\n        <form class=\"form-horizontal\" [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n            <fieldset>\n\n                <legend>Nueva Demo</legend>\n\n                <div class=\"form-group\" [class.has-error]=\"form.controls.name.touched && form.controls.name.errors\">\n                    <label for=\"inputName\" class=\"col-lg-2 control-label\">*Taller</label>\n                    <div class=\"col-lg-10\">\n                        <input type=\"text\" class=\"form-control\" formControlName=\"name\">\n\n                        <div *ngIf=\"form.controls.name.touched && form.controls.name.errors\" >\n                            <small class=\"text-danger\" *ngIf=\"form.controls.name.errors.required\">\n                                El campo Taller es obligatorio.\n                            </small>\n                        </div>\n\n                    </div>\n                </div>\n                \n                <div class=\"form-group\" [class.has-error]=\"form.controls.distributor.touched && form.controls.distributor.errors\">\n                    <label for=\"selectDistribuidor\" class=\"col-lg-2 control-label\">*Distribuidor</label>\n                    <div class=\"col-lg-10\">\n                        <select class=\"form-control\" formControlName=\"distributor\">\n                            <option>Elegir</option>\n                            <option *ngFor=\"let distributor of distributors\" value=\"{{distributor.code}}\">\n                                {{distributor.name}}\n                            </option>\n                        </select>\n                        \n                        <div *ngIf=\"form.controls.distributor.touched && form.controls.distributor.errors\" >\n                            <small class=\"text-danger\" *ngIf=\"form.controls.distributor.errors.required\">\n                                El campo Distribudor es obligatorio.\n                            </small>\n                        </div>\n\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <label for=\"inputContacto\" class=\"col-lg-2 control-label\">Contacto</label>\n                    <div class=\"col-lg-10\">\n                        <input type=\"text\" class=\"form-control\" formControlName=\"contact\">\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <label for=\"inputTelefono\" class=\"col-lg-2 control-label\">Teléfono</label>\n                    <div class=\"col-lg-10\">\n                        <input type=\"text\" class=\"form-control\" formControlName=\"phone\">\n                    </div>\n                </div>\n\n                <div class=\"form-group\" [class.has-error]=\"form.controls.date.touched && form.controls.date.errors\">\n                    <label for=\"inputFecha\" class=\"col-lg-2 control-label\">*Fecha</label>\n                    <div class=\"col-lg-10\">\n                        <input type=\"text\" class=\"form-control\" formControlName=\"date\">\n                        \n                        <div *ngIf=\"form.controls.date.touched && form.controls.date.errors\" >\n                            <small class=\"text-danger\" *ngIf=\"form.controls.date.errors.required\">\n                                El campo Fecha es obligatorio.\n                            </small>\n                            <small class=\"text-danger\" *ngIf=\"form.controls.date.errors.date\">\n                                Fecha inválida.\n                            </small>\n                        </div>\n\n                    </div>\n                </div>\n\n                <div class=\"form-group\" [class.has-error]=\"form.controls.time.touched && form.controls.time.errors\">\n                    <label for=\"inputHora\" class=\"col-lg-2 control-label\">*Hora</label>\n                    <div class=\"col-lg-10\">\n                        <input type=\"text\" class=\"form-control\" formControlName=\"time\">\n\n                        <div *ngIf=\"form.controls.time.touched && form.controls.time.errors\" >\n                            <small class=\"text-danger\" *ngIf=\"form.controls.time.errors.required\">\n                                El campo Hora es obligatorio.\n                            </small>\n                            <small class=\"text-danger\" *ngIf=\"form.controls.time.errors.time\">\n                                Hora inválida.\n                            </small>\n                        </div>\n\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <label for=\"inputDescription\" class=\"col-lg-2 control-label\">Descripción</label>\n                    <div class=\"col-lg-10\">\n                        <textarea class=\"form-control\" formControlName=\"description\"></textarea>\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <div class=\"col-lg-10 col-lg-offset-2\">\n                        <button type=\"reset\" class=\"btn btn-default\" routerLink=\"/demos\">Cancelar</button>\n                        <button type=\"submit\" [disabled]=\"!form.valid\" class=\"btn btn-primary\">Guardar</button>\n                    </div>\n                </div>\n\n            </fieldset>\n        </form>\n\n    </div>\n</div>"

/***/ },

/***/ 813:
/***/ function(module, exports) {

module.exports = "<nav-bar></nav-bar>\n\n<div class=\"container\">\n\n<div class=\"page-header\">\n    <h2>Demos</h2>\n</div>\n\n<a routerLink=\"/demos/new\" class=\"btn btn-primary btn-sm pull-right\">\n    <i class=\"fa fa-plus\" aria-hidden=\"true\"></i> Nueva Demo\n</a> \n\n<ul class=\"nav nav-tabs\">\n    <li class=\"active\" (click)=\"loadPendingDemos()\">\n        <a  data-toggle=\"tab\" aria-expanded=\"true\">Demos Pendientes</a>\n    </li>\n    <li class=\"\" (click)=\"loadDemosHistory()\">\n        <a  data-toggle=\"tab\" aria-expanded=\"false\">Historial</a>\n    </li>\n</ul>\n\n<br><br>\n\n<table class=\"table table-striped table-hover \">\n    <thead>\n        <tr>\n            <th>Taller</th>\n            <th>Contacto</th>\n            <th>Teléfono</th>\n            <th>Descripción</th>\n            <th>Fecha/Hora</th>\n            <th [hidden]=\"discardButtonHidden\">Acción</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let demo of demos\">\n            <td>{{demo.name }} ({{demo.distributor}})</td>\n            <td>{{demo.contact}}</td>\n            <td>{{demo.phone}}</td>\n            <td>{{demo.description}}</td>\n            <td>\n                {{ demo.ISODate | humanizeDate }}\n                ({{ demo.ISODate | diffForHumans }})\n            </td>\n            <td>\n                <span [hidden]=\"discardButtonHidden\">\n                    <a class=\"btn btn-danger btn-sm\" (click)=\"delete(demo)\">\n                        <i  class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\n                    </a>\n                </span>\n            </td>\n        </tr>\n    </tbody>\n</table> \n\n</div>"

/***/ },

/***/ 814:
/***/ function(module, exports) {

module.exports = "<nav-bar></nav-bar>\n\n<div class=\"container\">\n\n  <div class=\"panel panel-default\">\n    <div class=\"panel-heading\">Desvío Incondicional</div>\n    <div class=\"panel-body\">\n\n        <div class=\"row\">\n            <div class=\"col-md-2\">\n                <h6>Activar</h6>\n            </div>\n            <div class=\"col-md-10\">\n                <h6>\n                  <span class=\"label label-primary\">*72</span> + Teléfono\n                </h6>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-md-2\">\n                <h6>Desactivar</h6>\n            </div>\n            <div class=\"col-md-10\">\n                <h6><span class=\"label label-primary\">*73</span></h6>\n            </div>\n        </div>\n        \n    </div>\n  </div>\n\n  <div class=\"panel panel-default\">\n    <div class=\"panel-heading\">Desvío Extensiones</div>\n    <div class=\"panel-body\">\n\n        <div class=\"row\">\n            <div class=\"col-md-2\">\n                <h6>Activar Madrid</h6>\n            </div>\n            <div class=\"col-md-10\">\n                <h6>\n                  <span class=\"label label-primary\">*51</span>\n                </h6>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-md-2\">\n                <h6>Activar Logroño</h6>\n            </div>\n            <div class=\"col-md-10\">\n                <h6><span class=\"label label-primary\">*52</span></h6>\n            </div>\n        </div>\n        \n    </div>\n  </div>\n\n\n\n  <h2>Example body text</h2>\n  <p>Nullam quis risus eget <a href=\"#\">urna mollis ornare</a> vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.</p>\n  <p><small>This line of text is meant to be treated as fine print.</small></p>\n  <p>The following snippet of text is <strong>rendered as bold text</strong>.</p>\n  <p>The following snippet of text is <em>rendered as italicized text</em>.</p>\n  <p>An abbreviation of the word attribute is <abbr title=\"attribute\">attr</abbr>.</p>  \n    \n</div>  "

/***/ },

/***/ 815:
/***/ function(module, exports) {

module.exports = "<nav-bar></nav-bar>\n\n<div class=\"container\">\n\n    <br><br>\n    <div class=\"well\">\n        <form class=\"form-horizontal\" [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n            <fieldset>\n\n                <legend>Nuevo Recordatorio</legend>\n\n                <div class=\"form-group\" [class.has-error]=\"form.controls.description.touched && form.controls.description.errors\">\n                    <label for=\"inputDescription\" class=\"col-lg-2 control-label\">*Descripción</label>\n                    <div class=\"col-lg-10\">\n                        <textarea class=\"form-control\" formControlName=\"description\" ></textarea>\n\n                        <div *ngIf=\"form.controls.description.touched && form.controls.description.errors\" >\n                            <small class=\"text-danger\" *ngIf=\"form.controls.description.errors.required\">\n                                El campo Descripción es obligatorio.\n                            </small>\n                        </div>\n\n                    </div>\n                </div>\n\n                <div class=\"form-group\" [class.has-error]=\"form.controls.date.touched && form.controls.date.errors\">\n                    <label for=\"inputFecha\" class=\"col-lg-2 control-label\">*Fecha</label>\n                    <div class=\"col-lg-10\">\n                        <input type=\"text\" class=\"form-control\" formControlName=\"date\">\n                        \n                        <div *ngIf=\"form.controls.date.touched && form.controls.date.errors\" >\n                            <small class=\"text-danger\" *ngIf=\"form.controls.date.errors.required\">\n                                El campo Fecha es obligatorio.\n                            </small>\n                            <small class=\"text-danger\" *ngIf=\"form.controls.date.errors.date\">\n                                Fecha inválida.\n                            </small>\n                        </div>\n\n                    </div>\n                </div>\n\n                <div class=\"form-group\" [class.has-error]=\"form.controls.time.touched && form.controls.time.errors\">\n                    <label for=\"inputHora\" class=\"col-lg-2 control-label\">*Hora</label>\n                    <div class=\"col-lg-10\">\n                        <input type=\"text\" class=\"form-control\" formControlName=\"time\">\n\n                        <div *ngIf=\"form.controls.time.touched && form.controls.time.errors\" >\n                            <small class=\"text-danger\" *ngIf=\"form.controls.time.errors.required\">\n                                El campo Hora es obligatorio.\n                            </small>\n                            <small class=\"text-danger\" *ngIf=\"form.controls.time.errors.time\">\n                                Hora inválida.\n                            </small>\n                        </div>\n\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <div class=\"col-lg-10 col-lg-offset-2\">\n                        <button type=\"reset\" class=\"btn btn-default\" routerLink=\"/reminders\" >Cancelar</button>\n                        <button type=\"submit\" [disabled]=\"!form.valid\" class=\"btn btn-primary\">Guardar</button>\n                    </div>\n                </div>\n\n            </fieldset>\n        </form>\n    </div>\n\n</div>"

/***/ },

/***/ 816:
/***/ function(module, exports) {

module.exports = "<nav-bar></nav-bar>\n\n<div class=\"container\">\n\n<div class=\"page-header\">\n    <h2>Recordatorios</h2>\n</div>\n\n<a routerLink=\"/reminders/new\" class=\"btn btn-primary btn-sm pull-right\">\n    <i class=\"fa fa-plus\" aria-hidden=\"true\"></i> Nuevo Recordatorio\n</a>\n\n<br><br>\n\n<table class=\"table table-striped table-hover \">\n    <thead>\n        <tr>\n            <th>Descripción</th>\n            <th>Fecha/Hora</th>\n            <th>Acción</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let reminder of reminders\">\n            <td>{{reminder.description}}</td>\n            \n            <td>\n                {{reminder.ISODate | humanizeDate}} \n                ({{reminder.ISODate | diffForHumans }})\n            </td>\n    \n            <td>\n                <a class=\"btn btn-danger btn-sm\" (click)=\"delete(reminder)\">\n                    <i  class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\n                </a>\n            </td>\n        </tr>\n    </tbody>\n</table> \n\n</div>"

/***/ },

/***/ 817:
/***/ function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-2\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\">ARMIN Call</a>\n    </div>\n\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-2\">\n      <ul class=\"nav navbar-nav\">\n        \n        <li routerLinkActive=\"active\">\n          <a routerLink=\"/dashboard\">Dashboard</a>\n        </li>\n\n        <li>\n          <a routerLink=\"/workshops\">Talleres</a>\n        </li>\n\n        <li class=\"dropdown\">\n          <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\">\n              Secciones \n              <span class=\"badge badge-white\">{{ badges.pendingCalls + badges.pendingTickets + badges.pendingDemos + badges.pendingReminders }}</span> \n              <span class=\"caret\"></span>\n          </a>\n          \n          <ul class=\"dropdown-menu\" role=\"menu\">\n            <li >\n              <a routerLink=\"/calls\">Llamadas \n                <span class=\"badge\">{{badges.pendingCalls}}</span>\n              </a>\n            </li>\n            <li>\n              <a routerLink=\"/tickets\">Incidencias \n                <span class=\"badge\">{{badges.pendingTickets}}</span>\n              </a>\n            </li>\n            <li>\n              <a routerLink=\"/demos\">Demos \n                <span class=\"badge\">{{badges.pendingDemos}}</span>\n              </a>\n            </li>\n            <li>\n              <a routerLink=\"/reminders\">Reminders \n                <span class=\"badge\">{{badges.pendingReminders}}</span>\n              </a>\n            </li>\n          </ul>\n\n        </li>\n      </ul>\n      <form class=\"navbar-form navbar-left\" role=\"search\">\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control\"  #search placeholder=\"Taller...\" >\n        </div>\n        \n        <button type=\"button\" (click)=\"find(search.value)\" class=\"btn btn-default\" >Buscar</button>\n\n        <a routerLink=\"/info-board\">\n          <i class=\"fa fa-info-circle\" style=\"color:white; margin-left:15px;\"></i>\n        </a>\n        \n      </form>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li>\n          <a style=\"cursor: pointer\" (click)=\"logout()\"> \n            <i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i> Cerrar sesión\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>"

/***/ },

/***/ 818:
/***/ function(module, exports) {

module.exports = "<nav-bar></nav-bar>\n\n<div class=\"container\">\n\n    <div class=\"panel panel-default\">\n        <div class=\"panel-heading\"><h5>Incidencia</h5></div>\n        <div class=\"panel-body\">\n            \n            <form class=\"form-horizontal\">\n                \n                <div class=\"form-group\">\n                    <label for=\"\" class=\"col-sm-2 control-label\"><strong>Taller</strong></label>\n                    <div class=\"col-sm-10\">\n                        <span class=\"form-control\">\n                            <a [routerLink]=\"['/workshops', ticket.workshop._id]\">\n                                {{ ticket.workshop.name }}\n                            </a>\n                        </span>\n                    </div>\n                </div>\n                \n                <div class=\"form-group\">\n                    <label for=\"\" class=\"col-sm-2 control-label\"><strong>Descripción</strong></label>\n                    <div class=\"col-sm-10\">\n                        <span class=\"form-control\">\n                            {{ ticket.category}}\n                        </span>\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <label for=\"\" class=\"col-sm-2 control-label\"><strong>Incidencia</strong></label>\n                    <div class=\"col-sm-10\">\n                        <span class=\"form-control\">\n                            {{ ticket.description }}\n                        </span>\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <label for=\"\" class=\"col-sm-2 control-label\"><strong>Creada</strong></label>\n                    <div class=\"col-sm-10\">\n                        <span class=\"form-control\">\n                            {{ ticket.createdAt | humanizeDate }}\n                        </span>\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <label for=\"\" class=\"col-sm-2 control-label\"><strong>Resuelta</strong></label>\n                    <div class=\"col-sm-10\">\n                        <span class=\"form-control\">\n                            {{ ticket.completed ? 'Si' : 'No' }} \n                            \n                            <span *ngIf=\"ticket.completed\" >\n                                ({{ ticket.updatedAt | humanizeDate }})\n                            </span>\n                            \n                        </span>\n                    </div>\n                </div>\n\n            </form>\n\n\n        </div>\n    </div>\n\n    <div class=\"panel panel-info\" *ngIf=\"ticket.calls.length > 0\">\n        <div class=\"panel-heading\">\n            <h3 class=\"panel-title\">Llamadas</h3>\n        </div>\n        <div class=\"panel-body\">\n\n            <table class=\"table table-striped table-hover \">\n                <thead>\n                    <tr>\n                        <th>Emisor</th>\n                        <th>Receptor</th>\n                        <th>Fecha/Hora</th>\n                        <th>Duración</th>\n                        <th>Estado</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let call of ticket.calls\">\n                        <td>{{call.callerNumber}}</td>\n                        <td>{{call.recieverNumber}}</td>\n                        <td>{{call.createdAt | humanizeDate}} ({{call.date | diffForHumans}})</td>\n                        <td>{{call.durationInSeconds | durationForHumans}}</td>\n                        <td>\n                        \n                            <div *ngIf=\"call.status == 'Respondida'\">\n                                <a data-toggle=\"tooltip\" data-placement=\"right\" title=\"{{call.status}}\">\n                                    <i class=\"fa fa-phone-square fa-2x\" \n                                    style=\"color:green\"\n                                    aria-hidden=\"true\"></i>\n                                </a>\n                            </div>\n\n                            <div *ngIf=\"call.status == 'No Respondida'\">\n                                <a data-toggle=\"tooltip\" data-placement=\"right\" title=\"{{call.status}}\">\n                                    <i class=\"fa fa-phone-square fa-2x\" \n                                    style=\"color:red\"\n                                    aria-hidden=\"true\"></i>\n                                </a>\n                            </div>\n\n                            <div *ngIf=\"call.status == 'Ocupada'\">\n                                <a data-toggle=\"tooltip\" data-placement=\"right\" title=\"{{call.status}}\">\n                                    <i class=\"fa fa-phone-square fa-2x\" \n                                    style=\"color:#ff9800\"\n                                    aria-hidden=\"true\"></i>\n                                </a>\n                            </div>\n\n                            <div *ngIf=\"call.status == 'Fallada'\">\n                                <a data-toggle=\"tooltip\" data-placement=\"right\" title=\"{{call.status}}\">\n                                    <i class=\"fa fa-phone-square fa-2x\" \n                                    style=\"color:grey\"\n                                    aria-hidden=\"true\"></i>\n                                </a>\n                            </div>\n\n                        </td>\n                    </tr>\n                </tbody>\n            </table> \n            \n        </div>\n    </div>\n\n\n</div>\n"

/***/ },

/***/ 819:
/***/ function(module, exports) {

module.exports = "<nav-bar></nav-bar>\n\n<div class=\"container\">\n\n  <br><br>\n\n  <div class=\"well\">\n\n    <form class=\"form-horizontal\" [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n      <fieldset>\n        <legend>{{title}}</legend>\n\n        <div class=\"row\">\n\n          <div class=\"col-md-12\">\n\n            <div class=\"form-group\">\n                <label class=\"col-lg-3 control-label\">Taller</label>\n                <div class=\"col-lg-9\">\n                    <input type=\"text\" class=\"form-control\" readonly \n                    value=\"{{workshop.name}}\">\n                </div>\n            </div>\n\n            <div class=\"form-group\" [class.has-error]=\"form.controls.description.touched && form.controls.description.errors\">\n              <label for=\"inputName\" class=\"col-lg-3 control-label\">* Descripción</label>\n              <div class=\"col-lg-9\">\n                <textarea [(ngModel)]=\"ticket.description\" type=\"text\" class=\"form-control\" formControlName=\"description\" placeholder=\"Descripción de la incidencia\"></textarea>\n\n                <div *ngIf=\"form.controls.description.touched && form.controls.description.errors\" >\n                    <small class=\"text-danger\" *ngIf=\"form.controls.description.errors.required\">\n                        El campo descripción es obligatorio.\n                    </small>\n                </div>\n\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"select\" class=\"col-lg-3 control-label\">Estado</label>\n              <div class=\"col-lg-9\">\n                <select [(ngModel)]=\"ticket.completed\" class=\"form-control\" formControlName=\"completed\">\n                  <option value=\"false\" selected>Pendiente</option>\n                  <option value=\"true\">Solucionado</option>\n                </select>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <div class=\"col-lg-9 col-lg-offset-3\">\n                <button type=\"reset\" class=\"btn btn-default\" routerLink=\"/workshops\" >Cancelar</button>\n                <button type=\"submit\" [disabled]=\"!form.valid\" class=\"btn btn-primary\">Guardar</button>\n              </div>\n            </div>\n\n          </div><!--col-->\n\n        </div><!--row-->\n        \n      </fieldset>\n    </form>\n\n  </div>\n\n</div>"

/***/ },

/***/ 820:
/***/ function(module, exports) {

module.exports = "<modal #ticketsModal \n                title=\"Incidencias\"\n                modalClass=\"modal-lg\"\n                [hideCloseButton]=\"false\"\n                [closeOnEscape]=\"true\"\n                [closeOnOutsideClick]=\"true\"\n        >\n\n<modal-header>\n    <h2 class=\"text-center\">\n        <small></small>\n    </h2>\n    \n</modal-header>\n\n<modal-content>\n\n    <ul class=\"nav nav-tabs\">\n        <li class=\"active\"><a href=\"#home\" data-toggle=\"tab\">Incidencias Activa</a></li>\n        <li><a href=\"#profile\" data-toggle=\"tab\">Crear Incidencia</a></li>\n    </ul>\n    <div id=\"myTabContent\" class=\"tab-content\">\n        <div class=\"tab-pane fade active in\" id=\"home\">\n            <br>\n            <table class=\"table table-striped table-hover \">\n                <thead>\n                    <tr>\n                        <th></th>\n                        <th>Fecha/Hora</th>\n                        <th>Descripción</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let ticket of tickets\">\n                        <td>\n                            <div class=\"checkbox\">\n                                <label>\n                                    <input type=\"radio\" name=\"radio\" value=\"{{ticket._id}}\" (change)=\"select($event)\" />\n                                </label>\n                            </div>\n                        </td>\n                        <td>{{ticket.createdAt | diffForHumans}}</td>\n                        <td>{{ticket.description}}</td>\n                    </tr>\n                </tbody>\n            </table>\n          \n        </div>\n        <div class=\"tab-pane fade\" id=\"profile\">\n            <br>\n            <form class=\"form-horizontal\">\n                <div class=\"form-group\">\n                    <label for=\"inputDescription\" class=\"col-lg-2 control-label\">Descripción</label>\n                    <div class=\"col-lg-10\">\n                        <textarea #description \n                                  class=\"form-control\" \n                                  (change)=\"descriptionOfNewTicket = description.value\">\n\n                        </textarea>\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n\n    <div class=\"checkbox pull-right\">\n        <label>\n            <input type=\"checkbox\" #check\n                (change)=\"ticketMarkedAsCompleted = check.checked\"> \n                Marcar incidencia como resuelta\n        </label>\n    </div>\n\n    <br>\n\n</modal-content>\n\n<modal-footer>\n    <button class=\"btn btn-default\" (click)=\"ticketsModal.close()\">Cancelar</button>\n    <button class=\"btn btn-primary\" \n            [disabled]=\"selectedTicketId == null &&  descriptionOfNewTicket ==''\" \n            (click)=\"link()\">\n            Link\n    </button>\n</modal-footer>\n\n</modal>"

/***/ },

/***/ 821:
/***/ function(module, exports) {

module.exports = "<nav-bar></nav-bar>\n\n<div class=\"container\" >\n\n<div class=\"page-header\">\n    <h2>Incidencias</h2>\n</div>\n\n<!--<button class=\"btn btn-primary btn-sm pull-right\" [disabled]=\"!linkingAllowed\">Asociar Llamadas</button> <br><br>-->\n\n<ul class=\"nav nav-tabs\">\n    <li class=\"active\" (click)=\"loadPendingTickets()\">\n        <a  data-toggle=\"tab\" aria-expanded=\"true\">Incidencias Pendientes</a>\n    </li>\n    <li class=\"\" (click)=\"loadTicketsHistory()\">\n        <a  data-toggle=\"tab\" aria-expanded=\"false\">Historial</a>\n    </li>\n</ul>\n\n\n<br>\n\n<table class=\"table table-striped table-hover \">\n    <thead>\n        <tr>\n            <th>Taller</th>\n            <th>Categoría</th>\n            <th>Descripción</th>\n            <th>Fecha/Hora</th>\n            <th>Acción</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let ticket of tickets\">\n            <td> \n                <a [routerLink]=\"['/workshops', ticket.workshop._id]\"> \n                    {{ ticket.workshop.name }} \n                </a> \n                &nbsp;\n                <span class=\"label label-info\" \n                      style=\"font-size: 1.1rem\"\n                      *ngIf=\"ticket.calls.length > 0\">\n                    <i class=\"fa fa-volume-control-phone\" aria-hidden=\"true\"></i> \n                    {{ ticket.calls.length }}\n                </span>\n            </td>\n            <td>{{ ticket.category }}</td>\n            <td>{{ ticket.description }}</td>\n            <td>{{ ticket.createdAt | humanizeDate }} ({{ ticket.createdAt | diffForHumans }})</td>\n            <td>\n                <a class=\"btn btn-primary btn-sm\" [routerLink]=\"['/tickets', ticket._id]\" >\n                    <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n                </a>\n                \n                &nbsp;\n\n                <span [hidden]=\"discardButtonHidden\">\n                    <a  class=\"btn btn-warning btn-sm\" \n                        (click)=\"setAsCompleted(ticket)\">\n                        Descartar\n                    </a>\n                </span>\n\n            </td>\n        </tr>\n    </tbody>\n</table> \n\n</div>"

/***/ },

/***/ 822:
/***/ function(module, exports) {

module.exports = "<nav-bar></nav-bar>\n\n<div class=\"container\">\n\n  <br><br>\n\n  <div class=\"well\">\n\n    <form class=\"form-horizontal\" [formGroup]=\"form\" (ngSubmit)=\"onSubmit($event)\">\n      <fieldset>\n        <legend>{{title}}</legend>\n\n        <div class=\"row\">\n\n          <div class=\"col-md-5\">\n            <div class=\"form-group\" [class.has-error]=\"form.controls.name.touched && form.controls.name.errors\">\n              <label for=\"inputName\" class=\"col-lg-3 control-label\">* Razón Social</label>\n              <div class=\"col-lg-9\">\n                <input [(ngModel)]=\"workshop.name\" type=\"text\" class=\"form-control\" formControlName=\"name\" placeholder=\"Razón Social\">\n\n                <div *ngIf=\"form.controls.name.touched && form.controls.name.errors\" >\n                    <small class=\"text-danger\" *ngIf=\"form.controls.name.errors.required\">\n                        El campo Razón Social es obligatorio.\n                    </small>\n                </div>\n\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"inputCIF\" class=\"col-lg-3 control-label\">CIF</label>\n              <div class=\"col-lg-9\">\n                <input [(ngModel)]=\"workshop.cif\" type=\"text\" class=\"form-control\" formControlName=\"cif\" placeholder=\"CIF\">\n              </div>\n            </div>\n\n            <div formGroupName=\"address\">\n              <div class=\"form-group\">\n                <label for=\"inputDireccion\" class=\"col-lg-3 control-label\">Dirección</label>\n                <div class=\"col-lg-9\">\n                  <input [(ngModel)]=\"workshop.address.description\" type=\"text\" class=\"form-control\" formControlName=\"description\" placeholder=\"Dirección\">\n                </div>\n              </div>\n            </div>\n\n            <div class=\"form-group\" [class.has-error]=\"form.controls.distributor.touched && form.controls.distributor.errors\">\n              <label for=\"selectDistribuidor\" class=\"col-lg-3 control-label\">* Distribuidor</label>\n              <div class=\"col-lg-9\">\n                <select [(ngModel)]=\"workshop.distributor\" class=\"form-control\" formControlName=\"distributor\">\n                  <option>Elegir</option>\n                  <option *ngFor=\"let distributor of distributors\" value=\"{{distributor.code}}\">\n                      {{distributor.name}}\n                  </option>\n                </select>\n                \n                <div *ngIf=\"form.controls.distributor.touched && form.controls.distributor.errors\" >\n                    <small class=\"text-danger\" *ngIf=\"form.controls.distributor.errors.required\">\n                        El campo Distribudor es obligatorio.\n                    </small>\n                </div>\n              </div>\n            </div>\n\n          </div><!--col-->\n\n          <div class=\"col-md-offset-1 col-md-5\">\n            <div class=\"form-group\">\n              <label for=\"inputContact\" class=\"col-lg-3 control-label\">Contacto</label>\n              <div class=\"col-lg-9\">\n                <input [(ngModel)]=\"workshop.contact\" type=\"text\" class=\"form-control\" formControlName=\"contact\" placeholder=\"Persona de Contacto\">\n              </div>\n            </div>\n\n            <div class=\"form-group\" [class.has-error]=\"form.controls.email.touched && form.controls.email.errors\">\n              <label for=\"inputEmail\" class=\"col-lg-3 control-label\">* Email</label>\n              <div class=\"col-lg-9\">\n                <input [(ngModel)]=\"workshop.email\" type=\"text\" class=\"form-control\" formControlName=\"email\" placeholder=\"Email\">\n                \n                <div *ngIf=\"form.controls.email.touched && form.controls.email.errors\">\n                    <small class=\"text-danger\" *ngIf=\"form.controls.email.errors.email\">\n                        El email es inválido.\n                    </small>\n                </div>\n                \n              </div>\n            </div>\n            <div class=\"form-group\" [class.has-error]=\"form.controls.phone.touched && form.controls.phone.errors\">\n              <label for=\"inputTelefono\" class=\"col-lg-3 control-label\">* Teléfonos</label>\n              <div class=\"col-lg-9\">\n                <input [(ngModel)]=\"workshop.phone\" type=\"text\" class=\"form-control\" formControlName=\"phone\" placeholder=\"Teléfono\">\n                <span class=\"help-block\">*Separar teléfonos por comas.</span>\n\n                <div *ngIf=\"form.controls.phone.touched && form.controls.phone.errors\" >\n                    <small class=\"text-danger\" *ngIf=\"form.controls.phone.errors.required\">\n                        El campo Telefono es obligatorio.\n                    </small>\n                    <br>\n                    <small class=\"text-danger\" *ngIf=\"form.controls.phone.errors.phone\">\n                        Los teléfonos deben estar separados por comas.\n                    </small>\n                </div>\n\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <div class=\"col-lg-9 col-lg-offset-3\">\n                <button type=\"reset\" class=\"btn btn-default\" routerLink=\"/workshops\" >Cancelar</button>\n                <button type=\"submit\" [disabled]=\"!form.valid\" class=\"btn btn-primary\">Guardar</button>\n              </div>\n            </div>\n\n          </div><!--col-->\n\n        </div><!--row-->\n        \n      </fieldset>\n    </form>\n\n  </div>\n\n</div>"

/***/ },

/***/ 823:
/***/ function(module, exports) {

module.exports = "<nav-bar></nav-bar>\n\n<div class=\"container\">\n\n<div class=\"page-header\">\n    <h2>Talleres</h2>\n</div>\n\n<a routerLink=\"/workshops/new\" class=\"btn btn-primary btn-sm pull-right\">\n    <i class=\"fa fa-plus\" aria-hidden=\"true\"></i> Nuevo Taller\n</a> \n\n<br><br>\n\n<table class=\"table table-striped table-hover \">\n    <thead>\n        <tr>\n            <th>Taller</th>\n            <th>Distribuidor</th>\n            <th>Teléfono</th>\n            <th>Contacto</th>\n            <th>Acción</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let workshop of workshops\">\n            <td>{{workshop.name}}</td>\n            <td>{{workshop.distributor}}</td>\n            <td> \n                <span *ngFor=\"let p of workshop.phone\"> {{ p }} <br> </span>\n            </td>\n            <td>{{workshop.contact}}</td>\n            <td>\n                <a class=\"btn btn-primary btn-sm\" [routerLink]=\"['/workshops', workshop._id]\">\n                    <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n                </a>\n                <a class=\"btn btn-primary btn-sm\" [routerLink]=\"['/tickets/new', workshop._id]\">\n                    <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>Abrir Incidencia\n                </a>\n            </td>\n            \n        </tr>\n    </tbody>\n</table> \n\n</div>"

/***/ },

/***/ 97:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_http_services__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SharedServices; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SharedServices = (function () {
    function SharedServices(http) {
        this.http = http;
    }
    SharedServices.prototype.getBadges = function () {
        var url = '/api/badges';
        return this.http.get(url);
    };
    SharedServices.prototype.getDistributors = function () {
        var url = '/api/distributors';
        return this.http.get(url);
    };
    SharedServices = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_http_services__["a" /* HttpServices */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_http_services__["a" /* HttpServices */]) === 'function' && _a) || Object])
    ], SharedServices);
    return SharedServices;
    var _a;
}());
//# sourceMappingURL=/Users/dani/Projects/ArminCall/client/src/shared.service.js.map

/***/ }

},[1103]);
//# sourceMappingURL=main.bundle.map