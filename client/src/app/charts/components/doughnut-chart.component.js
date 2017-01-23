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
    return DoughnutChartComponent;
}());
DoughnutChartComponent = __decorate([
    core_1.Component({
        selector: 'doughnut-chart',
        template: "\n        <div style='display:block'>\n            <canvas baseChart\n                    [data]=\"data\"\n                    [labels]=\"labels\"\n                    [options]=\"options\"\n                    [colors]=\"colours\"\n                    [legend]=\"legend\"\n                    [chartType]=\"type\">\n            </canvas>\n        </div>\n    "
    }),
    __metadata("design:paramtypes", [])
], DoughnutChartComponent);
exports.DoughnutChartComponent = DoughnutChartComponent;
//# sourceMappingURL=doughnut-chart.component.js.map