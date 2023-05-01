import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  moduleId: module.id,
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class HomeComponent {

  brandList = [
    'https://arter.bslthemes.com/wp-content/uploads/2020/09/brand-1-464x512.png',
    'https://arter.bslthemes.com/wp-content/uploads/2020/09/brand-2-458x512.png',
    'https://arter.bslthemes.com/wp-content/uploads/2020/09/brand-3-456x512.png',
    'https://arter.bslthemes.com/wp-content/uploads/2020/09/brand-1-464x512.png',
  ];

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

  services: any[] = [
    {
      title: 'Web Development',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.',
    },
    {
      title: 'UI/UX Design',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.',
    },
    {
      title: 'Sound Design',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.',
    },
    {
      title: 'Game Design',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.',
    },
    {
      title: 'Advertising',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.',
    },
    // {
    //   title: "Photography",
    //   description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus."
    // },
  ];

  constructor() {}
}
