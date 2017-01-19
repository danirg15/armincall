import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'doughnut-chart',
    template: `
        <div style='display:block'>
            <canvas baseChart
                    [data]="data"
                    [labels]="labels"
                    [options]="options"
                    [colors]="colours"
                    [legend]="legend"
                    [chartType]="type">
            </canvas>
        </div>
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