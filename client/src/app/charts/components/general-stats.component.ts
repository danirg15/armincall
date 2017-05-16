import { Component, OnChanges, Input } from '@angular/core';
import { ChartService } from '../services/chart.service'


@Component({
    selector: 'general-stats',
    template: `
        <ul class="list-group">
            <li class="list-group-item justify-content-between">
                Número de llamadas
                <span class="badge badge-primary badge-pill" style="font-size: 0.9rem;">
                    {{ calls_count }}
                </span>
            </li>
            <li class="list-group-item justify-content-between">
                Tiempo medio de llamada
                <span class="badge badge-primary badge-pill" style="font-size: 0.9rem;"> 
                    {{ calls_avg_time | durationForHumans }}
                </span>
            </li>
        </ul>
    `
})
export class GeneralStatsComponent implements OnChanges {
    @Input('time-period') time_period = 'year'
    calls_count = 0
    calls_avg_time = 0

    constructor(private chartService: ChartService) { }

    ngOnChanges() { 
        if(this.time_period != undefined) {
            this.loadChartData(this.time_period)
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