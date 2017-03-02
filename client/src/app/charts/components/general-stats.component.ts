import { Component, OnInit } from '@angular/core';
import { ChartService } from '../services/chart.service'


@Component({
    selector: 'general-stats',
    template: `
        <div class="text-center">
                <input type="radio" 
                        name="radio1" 
                        value="day" 
                        (change)="newChartData($event)"
                        checked> Hoy &nbsp;
                
                <input type="radio" 
                        name="radio1" 
                        value="week"
                        (change)="newChartData($event)"> Esta semana &nbsp;

                <input type="radio" 
                        name="radio1" 
                        value="month"
                        (change)="newChartData($event)"> Este mes &nbsp;

                <input type="radio" 
                        name="radio1" 
                        value="year"
                        (change)="newChartData($event)"> Este año &nbsp;
        </div>

        <br>

        <ul class="list-group">
                <li class="list-group-item">
                        <span class="badge">{{ calls_count }}</span>
                        Número de llamadas
                </li>
                <li class="list-group-item">
                        <span class="badge">{{ calls_avg_time | durationForHumans }}</span>
                        Tiempo medio de llamada
                </li>
        </ul>
    `
})
export class GeneralStatsComponent implements OnInit {
    calls_count = 0
    calls_avg_time = 0

    constructor(private chartService: ChartService) { }

    ngOnInit() { 
        this.loadChartData('day')
    }

    newChartData(e){
        if(e.target.checked){
            this.loadChartData(e.target.value)
        }
    }

    loadChartData(word_time){
        this.chartService.getCallsCount(word_time).subscribe( data => {
            this.calls_count = data.count
        })

        this.chartService.getCallsAvgTime(word_time).subscribe( data => {
            this.calls_avg_time = data.avg
        })
    }



}