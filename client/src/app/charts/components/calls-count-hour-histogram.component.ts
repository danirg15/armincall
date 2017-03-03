import { Component, OnInit } from '@angular/core';
import { ChartService } from '../services/chart.service'


@Component({
  selector: 'calls-count-hour-histogram',
  template: `
    <div style="display: block">
        <canvas baseChart
                [datasets]="barChartData"
                [labels]="barChartLabels"
                [options]="barChartOptions"
                [legend]="barChartLegend"
                [chartType]="barChartType"></canvas>
    </div>
  `
})
export class CallsCountHourHistogramComponent implements OnInit{
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
          label: 'Llamadas entre horas'
      }
    ];

    constructor(private chartService: ChartService) {

    }


    ngOnInit() {
        this.chartService.getCallsCountHourHistogram().subscribe( data => {
            this.barChartLabels = data.tags
            this.barChartData[0].data = data.count
        })
    }

    
  
 
  
}