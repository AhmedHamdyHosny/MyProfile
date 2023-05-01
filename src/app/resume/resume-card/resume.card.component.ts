import { Component, Input } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-resume-card',
  moduleId: module.id,
  templateUrl: 'resume.card.component.html',
  styleUrls: ['resume.card.component.css'],
})
export class ResumeCardComponent {
  @Input() resumeItem: any;
  isEducation = false;

  constructor(private lightbox: Lightbox) {}

  onCardLinkClick() {
    if (this.resumeItem.link == null) {
      return;
    }
    if (this.resumeItem.linkType == 'image') {
      this.openLightBox(this.resumeItem);
    } else if (this.resumeItem.linkType == 'popup') {
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


  
}
