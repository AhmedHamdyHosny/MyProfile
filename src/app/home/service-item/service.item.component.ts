import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service-item',
  moduleId: module.id,
  templateUrl: 'service.item.component.html',
  styleUrls: ['service.item.component.css']
})
export class ServiceItemComponent {
  @Input() title!:string;
  @Input() description!:string;

  constructor() {
  }
}
