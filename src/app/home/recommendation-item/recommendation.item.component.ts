import { Component, Input, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-recommendation-item',
  moduleId: module.id,
  templateUrl: 'recommendation.item.component.html',
  styleUrls: ['recommendation.item.component.css'],
})
export class RecommendationItemComponent {
  @Input() recommendation: any;

  constructor() {}
}
