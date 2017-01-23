"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var nav_bar_component_1 = require("./components/nav-bar.component");
var notfound_component_1 = require("./components/notfound.component");
var panel_component_1 = require("./components/panel.component");
var shared_service_1 = require("./services/shared.service");
var http_services_1 = require("./services/http.services");
var auth_service_1 = require("../auth/services/auth.service");
var diffForHumans_pipe_1 = require("./pipes/diffForHumans.pipe");
var durationForHumans_pipe_1 = require("./pipes/durationForHumans.pipe");
var replaceSubstring_pipe_1 = require("./pipes/replaceSubstring.pipe");
var ng2_popover_1 = require("ng2-popover");
var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            router_1.RouterModule,
            ng2_popover_1.PopoverModule
        ],
        declarations: [
            nav_bar_component_1.NavBarComponent,
            notfound_component_1.NotFoundComponent,
            panel_component_1.PanelComponent,
            diffForHumans_pipe_1.DiffForHumansPipe,
            durationForHumans_pipe_1.DurationForHumansPipe,
            replaceSubstring_pipe_1.ReplaceSubstringPipe
        ],
        exports: [
            nav_bar_component_1.NavBarComponent,
            notfound_component_1.NotFoundComponent,
            panel_component_1.PanelComponent,
            diffForHumans_pipe_1.DiffForHumansPipe,
            durationForHumans_pipe_1.DurationForHumansPipe,
            replaceSubstring_pipe_1.ReplaceSubstringPipe,
        ],
        providers: [shared_service_1.SharedServices, http_services_1.HttpServices, auth_service_1.AuthService]
    })
], SharedModule);
exports.SharedModule = SharedModule;
//# sourceMappingURL=shared.module.js.map