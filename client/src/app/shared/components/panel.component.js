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
    return PanelComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], PanelComponent.prototype, "title", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], PanelComponent.prototype, "counter", void 0);
__decorate([
    core_1.Input('panel-color'),
    __metadata("design:type", Object)
], PanelComponent.prototype, "panelColor", void 0);
__decorate([
    core_1.Input('fa-icon'),
    __metadata("design:type", Object)
], PanelComponent.prototype, "icon", void 0);
PanelComponent = __decorate([
    core_1.Component({
        selector: 'panel',
        styles: ["\n        .panel {\n            cursor: pointer   \n        }\n        \n        .panel-body {\n            padding: 12px;\n            color: white;\n        }\n\n        .panel-footer {\n            padding: 2px;\n            color: white;\n            opacity: 0.9;\n            filter: alpha(opacity=90);\n        }\n\n        .counter{\n            font-size: 3.5rem;\n            font-weight: bold;\n        }\n\n        .icon {\n            opacity: 0.3;\n            filter: alpha(opacity=30);\n        }\n\n        span {\n            font-size: 1.5rem\n        }\n    "],
        template: "\n\n        \n            <div class=\"col-md-3\">\n\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-body\" [ngStyle]=\"{'background-color': panelColor}\">\n\n                        <div class=\"row\">\n                            <div class=\"col-sm-8\">\n                                <span class=\"counter\">{{counter}}</span><br>\n                                <span class=\"lead\">{{title}}</span>\n                            </div>\n                            <div class=\"col-sm-4\">\n                                <i class=\"icon\" [ngClass]=\"icon\" aria-hidden=\"true\"></i>\n                            </div>\n                        </div>\n\n                    </div>\n                    <div class=\"panel-footer\" [ngStyle]=\"{'background-color': panelColor}\"> \n                        <div class=\"text-center\">\n                            Ver detalle <i class=\"fa fa-info-circle\" aria-hidden=\"true\"></i>\n                        </div> \n                    </div>\n                </div>\n\n            </div>\n        \n    "
    }),
    __metadata("design:paramtypes", [])
], PanelComponent);
exports.PanelComponent = PanelComponent;
//# sourceMappingURL=panel.component.js.map