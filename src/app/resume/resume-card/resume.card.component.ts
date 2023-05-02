import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Lightbox } from 'ngx-lightbox';
import { RecommendationItemComponent } from 'src/app/home/recommendation-item/recommendation.item.component';
import { RecommendationPopupComponent } from '../recommendation-popup/recommendation.popup.component';

@Component({
  selector: 'app-resume-card',
  moduleId: module.id,
  templateUrl: 'resume.card.component.html',
  styleUrls: ['resume.card.component.css'],
})
export class ResumeCardComponent {
  @Input() resumeItem: any;
  isEducation = false;

  constructor(private lightbox: Lightbox, private dialog: MatDialog) {}

  onCardLinkClick() {
    if (this.resumeItem.linkText == null) {
      return;
    }
    if (this.resumeItem.linkType == 'image') {
      this.openLightBox(this.resumeItem);
    } else if (
      this.resumeItem.linkType == 'popup' &&
      this.resumeItem.recommendation
    ) {
      this.openRecommendationPopup();
    }else if (
      this.resumeItem.linkType == 'site' &&
      this.resumeItem.linkUrl
    ) {
      window.open(this.resumeItem.linkUrl, "_blank")
    }
  }

  openLightBox(resumeItem: any): void {
    this.lightbox.open(
      [
        {
          src: resumeItem.certificate,
          thumb: resumeItem.certificate,
          caption: resumeItem.place,
        },
      ],
      0,
      {
        showZoom: true,
        centerVertically: true,
        showImageNumberLabel: true,
      }
    );
  }

  openRecommendationPopup() {
    this.dialog.open(RecommendationPopupComponent, {
      data: {
        recommendation: this.resumeItem.recommendation,
      },
      panelClass: 'dialog-responsive',
    });
  }
}
