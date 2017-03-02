import { Component, OnInit } from '@angular/core';
import { ChartService } from '../services/chart.service'


@Component({
  selector: 'calls-count-week-histogram',
  template: `
    <div style="display: block">
        <canvas baseChart
                [datasets]="barChartData"
                [labels]="barChartLabels"
                [options]="barChartOptions"
                [legend]="barChartLegend"
                [chartType]="barChartType"
                (chartHover)="chartHovered($event)"
                (chartClick)="chartClicked($event)"></canvas>
    </div>
  `
})
export class CallsCountWeekHistogramComponent implements OnInit{
    public barChartOptions:any = {
      scaleShowVerticalLines: false,
      responsive: true
    };

    public barChartLabels:string[] = [];
    public barChartType:string = 'bar';
    public barChartLegend:boolean = true;

    public barChartData:any[] = [
      {
          data: [], 
          label: 'Llamadas por día'
      }
    ];

    constructor(private chartService: ChartService) {

    }


    ngOnInit() {
        this.chartService.getCallsCountWeekHistogram().subscribe( data => {
            this.barChartLabels = data.tags
            this.barChartData[0].data = data.count
        })
    }

    
  
 
  
}