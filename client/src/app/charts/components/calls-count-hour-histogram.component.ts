import { Component, OnChanges, Input } from '@angular/core';
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
export class CallsCountHourHistogramComponent implements OnChanges{
    @Input('time-period') time_period = 'year'

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
          label: 'Llamadas acumuladas por franja horaria'
      }
    ];

    constructor(private chartService: ChartService) {

    }


    ngOnChanges() {
        if(this.time_period != undefined) {
            this.chartService.getCallsCountHourHistogram(this.time_period).subscribe( data => {
                this.barChartLabels = data.tags
                this.barChartData[0].data = data.count
            })
        }
    }

    
  
 
  
}