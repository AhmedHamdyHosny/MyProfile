import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImageGalleryDialogComponent } from 'src/app/shared/image-gallery-dialog/image.gallery.dialog.component';

@Component({
  selector: 'app-gallery-item',
  moduleId: module.id,
  templateUrl: 'gallery.item.component.html',
  styleUrls: ['gallery.item.component.css'],
})
export class GalleryItemComponent {
  @Input() galleryItem: any;

  constructor(private dialog: MatDialog) {}

  openGalleryDialog() {
    // this.dialog.open(ImageGalleryDialogComponent, {
    //   data: null,
    //   autoFocus: false,
    // });
  }
}
