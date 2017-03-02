import { NgModule }         from '@angular/core'
import { CommonModule }     from '@angular/common'

import { CallsCountWeekHistogramComponent } from './components/calls-count-week-histogram.component'
import { CallsCountHourHistogramComponent } from './components/calls-count-hour-histogram.component'
import { CallsLineChartComponent }          from './components/calls-line-chart.component'
import { GeneralStatsComponent }            from './components/general-stats.component'

import { ChartService } from './services/chart.service'

import { ChartsModule as ngChartsModule} from 'ng2-charts/ng2-charts';
import { SharedModule } from '../shared/shared.module'


@NgModule({
    imports: [
        CommonModule,
        ngChartsModule,
        SharedModule
    ],
    declarations: [
        CallsCountWeekHistogramComponent,
        CallsLineChartComponent,
        CallsCountHourHistogramComponent,
        GeneralStatsComponent
    ],
    exports: [
        CallsCountWeekHistogramComponent,
        CallsLineChartComponent,
        CallsCountHourHistogramComponent,
        GeneralStatsComponent
    ],

    providers: [ChartService]
})

export class ChartsModule {

}