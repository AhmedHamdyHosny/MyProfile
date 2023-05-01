import { Component, OnInit } from '@angular/core';
import { IAlbum, Lightbox } from 'ngx-lightbox';

export enum GalleryItemType {
  webTemplate = 'WebTemplate',
  uiElements = 'UiElements',
  logos = 'Logos',
  drawings = 'Drawings',
}

@Component({
  selector: 'app-gallery',
  moduleId: module.id,
  templateUrl: 'gallery.component.html',
  styleUrls: ['gallery.component.css'],
})
export class GalleryComponent implements OnInit {
  filterType: string = '';
  galleryItems: any[] = [
    {
      image:
        'https://arter.bslthemes.com/wp-content/uploads/2020/09/work-1.jpg',
      title: 'Fitness Trainer UI Card',
      description:
        'My job is simple and sophisticated, so it is possible to describe.',
      type: GalleryItemType.webTemplate,
    },
    {
      image:
        'https://arter.bslthemes.com/wp-content/uploads/2020/09/work-2.jpg',
      title: 'VIE Visiting Print Card',
      description: 'Modern design and a lack of love dilettantism.',
      type: GalleryItemType.uiElements,
    },
    {
      image:
        'https://arter.bslthemes.com/wp-content/uploads/2020/09/work-3.jpg',
      title: 'Yellow Paper Print',
      description: 'Designers do not only image-makers, but also dreamers.',
      type: GalleryItemType.uiElements,
    },
    {
      image:
        'https://arter.bslthemes.com/wp-content/uploads/2020/09/work-4.jpg',
      title: 'Simple Visiting UI Card',
      description: 'Modern design and a lack of love dilettantism.',
      type: GalleryItemType.logos,
    },
    {
      image:
        'https://arter.bslthemes.com/wp-content/uploads/2020/09/work-5.jpg',
      title: 'Flow Focus Sketch Design',
      description: 'For me, the design — it is the quality of life.',
      type: GalleryItemType.logos,
    },
    {
      image:
        'https://arter.bslthemes.com/wp-content/uploads/2020/09/work-6.jpg',
      title: 'Сardboard Сup Mockup',
      description: 'Minimalism has reached a certain critical point.',
      type: GalleryItemType.logos,
    },
    {
      image:
        'https://arter.bslthemes.com/wp-content/uploads/2020/09/work-7.jpg',
      title: 'Simple Bottle Logo',
      description: "If it's cheap and good.",
      type: GalleryItemType.drawings,
    },
    {
      image:
        'https://arter.bslthemes.com/wp-content/uploads/2020/09/work-8-scaled-1.jpg',
      title: 'Black Cup UI Design',
      description: 'Good design has little to do with trends.',
      type: GalleryItemType.drawings,
    },
  ];

  filterGalleryItems: any[] = [];

  constructor(private lightbox: Lightbox) {}

  ngOnInit(): void {
    this.filterGalleryItems = this.galleryItems;
  }

  openLightBox(index: number): void {
    let albums: IAlbum[] = this.filterGalleryItems.map((e) => {
      return {
        src: e.image,
        thumb: e.image,
        caption: e.title,
      };
    });
    this.lightbox.open(albums, index, {
      showZoom: true,
      centerVertically: true,
      showImageNumberLabel: true,
    });
  }

  filterGallery(filterType: string) {
    this.filterType = filterType;
    if (filterType == '' || filterType.toLowerCase() == 'all') {
      this.filterGalleryItems = this.galleryItems;
    } else {
      this.filterGalleryItems = this.galleryItems.filter((val) => {
        return val.type == filterType;
      });
    }
  }
}
