import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'panel',
    styles: [`
        .panel {
            cursor: pointer   
        }
        
        .panel-body {
            padding: 12px;
            color: white;
        }

        .panel-footer {
            padding: 2px;
            color: white;
            opacity: 0.9;
            filter: alpha(opacity=90);
        }

        .counter{
            font-size: 3.5rem;
            font-weight: bold;
        }

        .icon {
            opacity: 0.3;
            filter: alpha(opacity=30);
        }

        span {
            font-size: 1.5rem
        }
    `],
    template: `

        
            <div class="col-md-3">

                <div class="panel panel-default">
                    <div class="panel-body" [ngStyle]="{'background-color': panelColor}">

                        <div class="row">
                            <div class="col-sm-8">
                                <span class="counter">{{counter}}</span><br>
                                <span class="lead">{{title}}</span>
                            </div>
                            <div class="col-sm-4">
                                <i class="icon" [ngClass]="icon" aria-hidden="true"></i>
                            </div>
                        </div>

                    </div>
                    <div class="panel-footer" [ngStyle]="{'background-color': panelColor}"> 
                        <div class="text-center">
                            Ver detalle <i class="fa fa-info-circle" aria-hidden="true"></i>
                        </div> 
                    </div>
                </div>

            </div>
        
    `
    
})
export class PanelComponent implements OnInit {
    //red #e84c3d
    //blue #1395fd
    //green #1abc9c
    //yellow #f39c11

    @Input() title = "Panel"
    @Input() counter = 5
    @Input('panel-color') panelColor = "#1395fd"
    @Input('fa-icon') icon = "fa fa-users fa-4x pull-right"

    constructor() { }

    ngOnInit() { 
    }

}