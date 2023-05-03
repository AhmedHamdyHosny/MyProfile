import { Component } from '@angular/core';
import { IAlbum, Lightbox } from 'ngx-lightbox';

export class Project {
  image: string | undefined;
  title: string | undefined;
  description: string | undefined;
  projectLink: string| undefined;
  languages: ProjectLangauge[] = [];
}

export enum ProjectLangauge {
  mvc = 'MVC',
  netCore = '.Net Core',
  vueJs = 'Vue JS',
  angular = 'Angular',
  javaAndroid = 'Java Android',
  angularJS = 'AngularJS',
  api = 'API',
  aspNet = 'Asp.net',
  html = 'HTML5',
  net = '.Net',
  cSharp = 'C#',
}

@Component({
  selector: 'app-projects',
  moduleId: module.id,
  templateUrl: 'projects.component.html',
  styleUrls: ['projects.component.css'],
})
export class ProjectsComponent {
  filterType: ProjectLangauge | null = null;
  ProjectLangauge = ProjectLangauge;
  projects: Project[] = [
    {
      image:
        'https://arter.bslthemes.com/wp-content/uploads/2020/09/work-1.jpg',
      title: 'Derayah',
      description: 'Trading System',
      languages: [ProjectLangauge.mvc, ProjectLangauge.netCore, ProjectLangauge.vueJs],
      projectLink: undefined,
    },
    {
      image:
        'https://arter.bslthemes.com/wp-content/uploads/2020/09/work-2.jpg',
      title: 'Afaqy IC',
      description: 'Internal system to organize the operations and information inside the company',
      languages: [ProjectLangauge.mvc, ProjectLangauge.netCore, ProjectLangauge.angular, ProjectLangauge.javaAndroid],
      projectLink: undefined,
    },
    {
      image:
        'https://arter.bslthemes.com/wp-content/uploads/2020/09/work-3.jpg',
      title: 'nagwa.com',
      description: 'Chestnut is E-Learning Web Application that provides digital educational materials that are tailored to several national curricula',
      languages: [ProjectLangauge.mvc],
      projectLink: undefined,
    },
    {
      image:
        'https://arter.bslthemes.com/wp-content/uploads/2020/09/work-4.jpg',
      title: 'Shipment',
      description: 'Mobile applications contain 2 modules [Driver android App] tracking the driver, [Client Android/IOS App] provide services to clien',
      languages: [ProjectLangauge.api, ProjectLangauge.javaAndroid, ProjectLangauge.angularJS],
      projectLink: undefined,
    },
    {
      image:
        'https://arter.bslthemes.com/wp-content/uploads/2020/09/work-5.jpg',
      title: 'Honda EVHC',
      description: 'It’s mobile application and Administration web-based application for management vehicle maintenance',
      languages: [ProjectLangauge.aspNet, ProjectLangauge.html],
      projectLink: undefined,
    },
    {
      image:
        'https://arter.bslthemes.com/wp-content/uploads/2020/09/work-6.jpg',
      title: 'Honda E-communication',
      description: 'It’s an android application for support employees',
      languages:[ProjectLangauge.javaAndroid],
      projectLink: undefined,
    },
    {
      image:
        'https://arter.bslthemes.com/wp-content/uploads/2020/09/work-7.jpg',
      title: 'Security Framework',
      description: "It’s framework that can integrate with and web application and handle all user security permissions",
      languages:[ProjectLangauge.net],
      projectLink: undefined,
    },
    {
      image:
        'https://arter.bslthemes.com/wp-content/uploads/2020/09/work-8-scaled-1.jpg',
      title: 'Meeting Room Management',
      description: 'it contains 2 parts web application that manage the room and meeting and android application that show the meetings and meeting details on each room',
      languages:[ProjectLangauge.net, ProjectLangauge.javaAndroid],
      projectLink: undefined,
    },
    {
      image:
        'https://arter.bslthemes.com/wp-content/uploads/2020/09/work-7.jpg',
      title: 'Honda Training Management System Web Application ',
      description: "It’s web application that provide training courses service to technicians This project for (Honda Motor Company, Ltd)",
      languages:[ProjectLangauge.net],
      projectLink: 'https://www.honda-tms.com',
    },
    {
      image:
        'https://arter.bslthemes.com/wp-content/uploads/2020/09/work-7.jpg',
      title: 'Honda Qualified Service Personnel Web Application',
      description: "It’s web application that provide exam and certification to qualified technicians This project for (Honda Motor Company, Ltd",
      languages:[ProjectLangauge.net],
      projectLink: 'http://www.honda-hqsp.com/',
    },
    {
      image:
        'https://arter.bslthemes.com/wp-content/uploads/2020/09/work-7.jpg',
      title: 'Weather Mobile App',
      description: "It’s an Android App for get current Weather information and weather forecast for next 3 days",
      languages:[ProjectLangauge.javaAndroid],
      projectLink: undefined,
    },
    {
      image:
        'https://arter.bslthemes.com/wp-content/uploads/2020/09/work-7.jpg',
      title: 'Textraod Website',
      description: "It’s a Scientific Magazine website that publish scientific papers , development for Professor of Microbiology College of Pharmacy-King Saud university.",
      languages:[ProjectLangauge.net],
      projectLink: 'http://www.textroad.com',
    },
    {
      image:
        'https://arter.bslthemes.com/wp-content/uploads/2020/09/work-7.jpg',
      title: 'Faculty Central Library Website',
      description: "Is a website that provide information about books that exist in Faculty of Agriculture – Ain Shams University",
      languages:[ProjectLangauge.net],
      projectLink: 'http://www.agshamslib.info',
    },
    {
      image:
        'https://arter.bslthemes.com/wp-content/uploads/2020/09/work-7.jpg',
      title: 'Hisad Website',
      description: "Is a website that provide news about the events that occurs in Faculty of Agriculture – Ain Shams University",
      languages:[ProjectLangauge.net],
      projectLink: 'http://www.hisad.net',
    },
    {
      image:
        'https://arter.bslthemes.com/wp-content/uploads/2020/09/work-7.jpg',
      title: 'Magazine Website',
      description: "Website for Faculty of Education – Ain shams University that provide information and client registration",
      languages:[ProjectLangauge.net],
      projectLink: 'http://www.asucma.net',
    },
    {
      image:
        'https://arter.bslthemes.com/wp-content/uploads/2020/09/work-7.jpg',
      title: 'Social Network Analysis',
      description: "System that analysis social websites content and users relationships to community Discovery and expert finding. Faculty of Computer and Information Technology – Cairo University",
      languages:[ProjectLangauge.cSharp],
      projectLink: undefined,
    },
  ];

  filterProjects: Project[] = [];

  constructor(private lightbox: Lightbox) {}

  ngOnInit(): void {
    this.filterProjects = this.projects;
  }

  openLightBox(index: number): void {
    let albums: IAlbum[] = this.filterProjects.map((e) => {
      return {
        src: e.image!,
        thumb: e.image!,
        caption: e.title,
      };
    });
    this.lightbox.open(albums, index, {
      showZoom: true,
      centerVertically: true,
      showImageNumberLabel: true,
    });
  }

  filterProjectList(filterType: ProjectLangauge | null) {
    this.filterType = filterType;
    if (!filterType || filterType.toLowerCase() == 'all') {
      this.filterProjects = this.projects;
    } else {
      this.filterProjects = this.projects.filter((val) => {
        return val.languages.includes(filterType);
      });
    }
  }
}
