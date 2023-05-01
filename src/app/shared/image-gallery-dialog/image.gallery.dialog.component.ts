import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-image-gallery-dialog',
  moduleId: module.id,
  templateUrl: 'image.gallery.dialog.component.html',
  styleUrls: ['image.gallery.dialog.component.css'],
})
export class ImageGalleryDialogComponent {
  imageObject = [
    {
      image:
        'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/5.jpg',
      thumbImage:
        'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/5.jpg',
      title: 'Hummingbirds are amazing creatures',
    },
    {
      image:
        'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/9.jpg',
      thumbImage:
        'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/9.jpg',
    },
    {
      image:
        'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/4.jpg',
      thumbImage:
        'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/4.jpg',
      title: 'Example with title.',
    },
    {
      image:
        'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/7.jpg',
      thumbImage:
        'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/7.jpg',
      title: 'Hummingbirds are amazing creatures',
    },
    {
      image:
        'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/1.jpg',
      thumbImage:
        'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/1.jpg',
    },
    {
      image:
        'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/2.jpg',
      thumbImage:
        'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/2.jpg',
      title: 'Example two with title.',
    },
  ];

  constructor(@Inject(MAT_DIALOG_DATA) data: any) {}
}
