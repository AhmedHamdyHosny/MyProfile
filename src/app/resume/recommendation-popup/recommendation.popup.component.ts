import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RecommendationItemComponent } from 'src/app/home/recommendation-item/recommendation.item.component';

@Component({
  selector: 'app-recommendation-popup',
  moduleId: module.id,
  templateUrl: 'recommendation.popup.component.html',
  styleUrls: ['recommendation.popup.component.css'],
})
export class RecommendationPopupComponent {
  constructor(
    private dialogRef: MatDialogRef<RecommendationPopupComponent, any>,
     @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  closePopup() {
    this.dialogRef.close();
  }
}
