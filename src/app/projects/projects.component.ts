import { Component } from '@angular/core';
import { IAlbum, Lightbox } from 'ngx-lightbox';

export enum ProjectType {
  web = 'Web',
  mobile = 'Mobile',
  aspNetCore = 'Asp.Net Core',
}

@Component({
  selector: 'app-projects',
  moduleId: module.id,
  templateUrl: 'projects.component.html',
  styleUrls: ['projects.component.css'],
})
export class ProjectsComponent {
  filterType: string = '';
  projects: any[] = [
    {
      image:
        'https://arter.bslthemes.com/wp-content/uploads/2020/09/work-1.jpg',
      title: 'Fitness Trainer UI Card',
      description:
        'My job is simple and sophisticated, so it is possible to describe.',
      type: ProjectType.aspNetCore,
    },
    {
      image:
        'https://arter.bslthemes.com/wp-content/uploads/2020/09/work-2.jpg',
      title: 'VIE Visiting Print Card',
      description: 'Modern design and a lack of love dilettantism.',
      type: ProjectType.mobile,
    },
    {
      image:
        'https://arter.bslthemes.com/wp-content/uploads/2020/09/work-3.jpg',
      title: 'Yellow Paper Print',
      description: 'Designers do not only image-makers, but also dreamers.',
      type: ProjectType.web,
    },
    {
      image:
        'https://arter.bslthemes.com/wp-content/uploads/2020/09/work-4.jpg',
      title: 'Simple Visiting UI Card',
      description: 'Modern design and a lack of love dilettantism.',
      type: ProjectType.web,
    },
    {
      image:
        'https://arter.bslthemes.com/wp-content/uploads/2020/09/work-5.jpg',
      title: 'Flow Focus Sketch Design',
      description: 'For me, the design — it is the quality of life.',
      type: ProjectType.mobile,
    },
    {
      image:
        'https://arter.bslthemes.com/wp-content/uploads/2020/09/work-6.jpg',
      title: 'Сardboard Сup Mockup',
      description: 'Minimalism has reached a certain critical point.',
      type: ProjectType.mobile,
    },
    {
      image:
        'https://arter.bslthemes.com/wp-content/uploads/2020/09/work-7.jpg',
      title: 'Simple Bottle Logo',
      description: "If it's cheap and good.",
      type: ProjectType.web,
    },
    {
      image:
        'https://arter.bslthemes.com/wp-content/uploads/2020/09/work-8-scaled-1.jpg',
      title: 'Black Cup UI Design',
      description: 'Good design has little to do with trends.',
      type: ProjectType.mobile,
    },
  ];

  filterProjects: any[] = [];

  constructor(private lightbox: Lightbox) {}

  ngOnInit(): void {
    this.filterProjects = this.projects;
  }

  openLightBox(index: number): void {
    let albums: IAlbum[] = this.filterProjects.map((e) => {
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

  filterProjectList(filterType: string) {
    this.filterType = filterType;
    if (filterType == '' || filterType.toLowerCase() == 'all') {
      this.filterProjects = this.projects;
    } else {
      this.filterProjects = this.projects.filter((val) => {
        return val.type == filterType;
      });
    }
  }
}
