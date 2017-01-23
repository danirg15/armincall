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
var chart_service_1 = require("../services/chart.service");
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
    return LineChartComponent;
}());
LineChartComponent = __decorate([
    core_1.Component({
        selector: 'line-chart',
        template: "\n        \n        <div class=\"text-center\">\n            <input type=\"radio\" \n                   name=\"radio1\" \n                   value=\"6\" \n                   (change)=\"newChartData($event)\" checked> \u00DAltimos 6 meses &nbsp;\n            \n            <input type=\"radio\" \n                   name=\"radio1\" \n                   value=\"12\" \n                   (change)=\"newChartData($event)\"> \u00DAltimo a\u00F1o &nbsp;\n        </div>\n        \n\n        <div style='display:block'>\n            <canvas baseChart\n                    [datasets]=\"lineChartData\"\n                    [labels]=\"lineChartLabels\"\n                    [options]=\"lineChartOptions\"\n                    [colors]=\"lineChartColours\"\n                    [legend]=\"lineChartLegend\"\n                    [chartType]=\"lineChartType\">\n            </canvas>\n        </div>\n    "
    }),
    __metadata("design:paramtypes", [chart_service_1.ChartService])
], LineChartComponent);
exports.LineChartComponent = LineChartComponent;
//# sourceMappingURL=line-chart.component.js.map