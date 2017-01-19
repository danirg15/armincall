import { NgModule }         from '@angular/core'
import { CommonModule }     from '@angular/common'

import { DoughnutChartComponent }   from './components/doughnut-chart.component'
import { LineChartComponent }       from './components/line-chart.component'

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
        DoughnutChartComponent,
        LineChartComponent
    ],
    exports: [
        DoughnutChartComponent,
        LineChartComponent
    ],

    providers: [ChartService]
})

export class ChartsModule {

}