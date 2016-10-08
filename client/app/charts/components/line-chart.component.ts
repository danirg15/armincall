import { Component, OnInit } from '@angular/core';
import { ChartService } from '../services/chart.service'

@Component({
    selector: 'line-chart',
    template: `
    
        <base-chart class="chart"
                [datasets]="lineChartData"
                [labels]="lineChartLabels"
                [options]="lineChartOptions"
                [colors]="lineChartColours"
                [legend]="lineChartLegend"
                [chartType]="lineChartType">
        </base-chart>
    
    `,
})
export class LineChartComponent implements OnInit {
    lineChartLabels:Array<any> = [];
    
    lineChartData:Array<any> = [
        {
            data: [], 
            label: 'Llamadas'
        }
    ];

    lineChartOptions:any = {
        animation: false,
        responsive: true
    };

    lineChartColours:Array<any> = [
        { // grey
            backgroundColor: 'rgba(175, 218, 247, 0.3)',
            borderColor: 'rgba(54, 162, 235, 1)',
            pointBackgroundColor: 'rgba(54, 162, 235, 1)',
            pointBorderColor: 'white',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        }
    ];

    lineChartLegend:boolean = true;
    lineChartType:string = 'line';

    
    constructor(private chartService: ChartService) { 

    }

    ngOnInit() {
        this.chartService.getAll().subscribe( data => {
            this.lineChartLabels = data.tags
            this.lineChartData[0].data = data.counts
        })
    }

}