import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-project-detail',
  moduleId: module.id,
  templateUrl: 'project.detail.component.html',
  styleUrls: ['project.detail.component.css']
})
export class ProjectDetailComponent {

  projectImages = [
    'https://arter.bslthemes.com/wp-content/uploads/2020/09/work-1.jpg',
    'https://arter.bslthemes.com/wp-content/uploads/2020/09/work-3.jpg',
    'https://arter.bslthemes.com/wp-content/uploads/2020/09/work-4.jpg',
    'https://arter.bslthemes.com/wp-content/uploads/2020/09/work-12.jpg',
  ];

  projectImagesCarouselOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    margin: 10,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      500: {
        items: 2,
      },
      600: {
        items: 2,
      },
      740: {
        items: 2,
      },
    },
    nav: true,
  };

  recommendationsCarouselOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    margin: 10,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      500: {
        items: 2,
      },
      600: {
        items: 3,
      },
      740: {
        items: 3,
      },
    },
    nav: true,
  };

  recommendations: any[] = [
    {
      name: 'Paul Trueman',
      image:
        'https://arter.bslthemes.com/wp-content/uploads/2020/09/testimonial-2-280x280.jpg',
      position: 'Template author',
      review:
        "Working with Artur has been a pleasure. Better yet - I alerted them of a minor issue before going to sleep. The issue was fixed the next morning. I couldn't ask for better support. Thank you Artur! This is easily a 5 star freelancer.",
      rating: 4,
    },
    {
      name: 'Paul Trueman',
      image:
        'https://arter.bslthemes.com/wp-content/uploads/2020/09/testimonial-1-280x280.jpg',
      position: 'Template author',
      review:
        "Working with Artur has been a pleasure. Better yet - I alerted them of a minor issue before going to sleep. The issue was fixed the next morning. I couldn't ask for better support. Thank you Artur! This is easily a 5 star freelancer.",
      rating: 5,
    },
    {
      name: 'Paul Trueman',
      image:
        'https://arter.bslthemes.com/wp-content/uploads/2020/09/testimonial-2-280x280.jpg',
      position: 'Template author',
      review:
        "Working with Artur has been a pleasure. Better yet - I alerted them of a minor issue before going to sleep. The issue was fixed the next morning. I couldn't ask for better support. Thank you Artur! This is easily a 5 star freelancer.",
      rating: 3,
    },
    {
      name: 'Paul Trueman',
      image:
        'https://arter.bslthemes.com/wp-content/uploads/2020/09/testimonial-1-280x280.jpg',
      position: 'Template author',
      review:
        "Working with Artur has been a pleasure. Better yet - I alerted them of a minor issue before going to sleep. The issue was fixed the next morning. I couldn't ask for better support. Thank you Artur! This is easily a 5 star freelancer.",
      rating: 5,
    },
  ];
  
  constructor() {
  }
}
