import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  moduleId: module.id,
  templateUrl: 'resume.component.html',
  styleUrls: ['resume.component.css']
})
export class ResumeComponent {
  educationList: any[] = [
    {
      place: "University of Toronto",
      position: "Student",
      fromDate: new Date("2015/1/1"),
      toDate: new Date("2018/3/4"),
      description: "Bachelor's Degree in Computer Science ABC Technical Institute, Jefferson, Missouri",
      certificate: "https://beshley.com/import/arter/01/uploads/2020/09/certificate.jpg",
      link: "DIPLOME",
      linkType: 'image', 
    },
    {
      place: "Programming Course",
      position: "Student",
      fromDate: new Date("2016/7/1"),
      toDate: new Date("2016/9/4"),
      description: "Coursework - Git, WordPress, Javascript, iOS, Android.",
      link: null,
    },
    {
      place: "Web developer courses",
      position: "Student",
      fromDate: new Date("2017/11/1"),
      toDate: new Date("2018/2/4"),
      description: "Converted Photoshop layouts to web pages using HTML, CSS, and JavaScript",
      certificate: "https://beshley.com/import/arter/01/uploads/2020/09/certificate.jpg",
      link: "LICENCE",
      linkType: 'image', 
    },
    {
      place: "Academy of Art University",
      position: "Student",
      fromDate: new Date("2010/4/1"),
      toDate: new Date("2020/8/4"),
      description: "Ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum.",
      certificate: "https://beshley.com/import/arter/01/uploads/2020/09/certificate.jpg",
      link: "CERTIFICATE",
      linkType: 'image', 
    },
  ];

  workHistoryList: any[] = [
    {
      place: "Envato",
      position: "Template Author",
      fromDate: new Date("2019/1/1"),
      toDate: new Date("2020/9/4"),
      description: "Created Professional WordPress Themes & Templates for Personal and Creative Websites.",

    },
    {
      place: "ABC Studio",
      position: "Front-End Developer",
      fromDate: new Date("2020/10/1"),
      toDate: new Date("2021/6/4"),
      description: "Collaborate with creative and development teams on the execution of ideas.",
      link: "RECOMMENDATION",
      linkType: 'popup', 
      remommendateion: {},
    },
    {
      place: "Digital Web Studio",
      position: "Senior Developer",
      fromDate: new Date("2021/11/1"),
      toDate: new Date("2022/2/4"),
      description: "Optimize your website and apps performance using latest technology.",
      remommendateion: {},
      link: "RECOMMENDATION",
      linkType: 'popup', 
    },
    {
      place: "SoftService company",
      position: "UI Developer",
      fromDate: new Date("2022/4/1"),
      toDate: new Date("2023/8/4"),
      description: "Collaborate with creative and development teams on the execution of ideas.",
    },
  ];
  constructor() {
  }
}
