import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recommendation-item',
  moduleId: module.id,
  templateUrl: 'recommendation.item.component.html',
  styleUrls: ['recommendation.item.component.css']
})
export class RecommendationItemComponent {
  @Input() recommendation: any;
  constructor() {
  }
}
