import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'doughnut-chart',
    template: `
        <base-chart class="chart"
                [data]="data"
                [labels]="labels"
                [options]="options"
                [colors]="colours"
                [legend]="legend"
                [chartType]="type">
        </base-chart>
    `
})
export class DoughnutChartComponent implements OnInit {
    labels:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
    data:number[] = [350, 450, 100];
    type:string = 'doughnut';
    legend:boolean = true;

    options:any = {
        animation: false,
        responsive: true
    };
    
    constructor() { }

    ngOnInit() { }


}