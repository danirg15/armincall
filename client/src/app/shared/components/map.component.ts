import { Component, Input } from '@angular/core';

@Component({
  selector: 'map',
  templateUrl: '../templates/map.template.html',
  styleUrls: ['../styles/map.component.css']
})
export class MapComponent {
  title: string = 'My first AGM project';
  @Input() lat: number = 40.3936076;
  @Input() lng: number = -3.6784621;

  
}