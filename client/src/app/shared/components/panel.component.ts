import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'panel',
    styles: [`
        .card {
            cursor: pointer;
            color: white;
            border-color: white;
        }
    
        .footer {
            padding: 2px;
            color: white;
            background-color: rgba(255, 255, 255, 0.24);
        }

        .counter{
            font-size: 2.5rem;
            font-weight: bold;
        }

        .icon {
            opacity: 0.3;
            filter: alpha(opacity=30);
            font-size: 4.0rem;
        }

        .title {
            font-size: 1.4rem
        }

        .card-block {
            padding: 0.8rem 1.0rem;
        }

    `],
    templateUrl: '../templates/panel.template.html' 
    
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
    @Input() info = ""

    constructor() { }

    ngOnInit() { 
    }

}