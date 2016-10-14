import { Component, OnInit } from '@angular/core';
import { ChartService } from '../services/chart.service'

@Component({
    selector: 'line-chart',
    template: `
        <div class="text-center">
            <input type="radio" 
                   name="radio1" 
                   value="6" 
                   (change)="newChartData($event)" checked> Últimos 6 meses &nbsp;
            
            <input type="radio" 
                   name="radio1" 
                   value="12" 
                   (change)="newChartData($event)"> Último anio &nbsp;
        </div>

        <div style='display:block'>
            <canvas baseChart
                    [datasets]="lineChartData"
                    [labels]="lineChartLabels"
                    [options]="lineChartOptions"
                    [colors]="lineChartColours"
                    [legend]="lineChartLegend"
                    [chartType]="lineChartType">
            </canvas>
        </div>
    `

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
        this.loadChartData(1)
    }

    newChartData(e){
        if(e.target.checked){
            this.loadChartData(e.target.value)
        }
    }

    loadChartData(n_months){
        this.chartService.getAll(n_months).subscribe( data => {
            this.lineChartLabels = data.tags
            this.lineChartData[0].data = data.counts
        })
    }

}