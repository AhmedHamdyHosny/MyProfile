import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  moduleId: module.id,
  templateUrl: 'resume.component.html',
  styleUrls: ['resume.component.css'],
})
export class ResumeComponent {
  hardSkillsCollapsed = true;
  educationList: any[] = [
    {
      title: 'Bachelor in Computer Science',
      position: 'Student',
      date: 'July 2011',
      description:
        'Institute of Computer Information & Technology for Aviation & Aerospace (ICITAA) 2007-2011 - National Civil Aviation for Training Organization (NCATO) and Ain Shams University',
      certificate: '',
      link: 'DIPLOME',
      linkType: 'image',
    },
    {
      title: 'Grant of the Ministry of Communications (MCIT)',
      position: 'Student',
      date: 'June 2014',
      description:
        'Join to Grant of the Ministry of Communication (MCIT) in ORASCOM Training and Technology in Java Mobile Application Development Track. In the period from November 20, 2013 to June 15, 2014. ',
      linkText: null,
    },
    {
      title: 'Programming Language: (266 hrs)',
      position: 'Student',
      description:
        'Java SE 7, Object–Oriented Analysis and UML, Java EE 6 & ADF',
      certificate: '',
      // linkText: "CERTIFICATE",
      // linkType: 'image',
    },
    {
      title: 'Knowledge Base: (35 hrs)',
      position: 'Student',
      description: 'Database Concepts, Object Oriented Concepts',
      certificate: '',
      // linkText: "CERTIFICATE",
      // linkType: 'image',
    },
    {
      title: 'Pre Technical Courses: (77 hrs)',
      position: 'Student',
      description: 'HTML, CSS, Java script, XML',
      certificate: '',
      // linkText: "CERTIFICATE",
      // linkType: 'image',
    },

    {
      title: 'Database Courses: (91 hrs)',
      position: 'Student',
      description: 'Oracle database 11g SQL, Oracle database 11g PL/SQL',
      certificate: '',
      // linkText: "CERTIFICATE",
      // linkType: 'image',
    },
    {
      title: 'Mobile Technology: (168 hrs)',
      position: 'Student',
      description: 'Java ME, Java for Android',
      certificate: '',
      // linkText: "CERTIFICATE",
      // linkType: 'image',
    },
    {
      title: 'Soft Skills: (70 hrs)',
      position: 'Student',
      description: 'Communication Skills, Presentation Skills, Managing time',
      certificate:
        'https://beshley.com/import/arter/01/uploads/2020/09/certificate.jpg',
      linkText: 'LICENCE',
      linkType: 'image',
    },
  ];

  workHistoryList: any[] = [
    {
      title:
        'Institute of Computer and Information Technology for Aviation and Aerospace',
      position: 'Teaching Assistant',
      date: 'Sep 2011 - Feb 2012',
      description:
        'Lab Demonstrator for Courses (Introduction to Information System, Logic Design, Probability and Statistics, Software Engineering)',
    },
    {
      title: 'Faculty of Computer and Information Science, Cairo University',
      position: 'Researcher Assistant, software engineer',
      date: 'Mar 2013 – Jan 2014',
      description:
        'Job Roles: \nAssistant to Dr. Khalid El Bahnasy (Assistant Professor in Information System Department – FCIS – Ain Shams university) and Dr. Abeer El Korany (Assistant Professor in Computer Science Department – Cairo university) In develop social network analysis projects that analyze both link and content of social network in order to community discovery and expert identification.\nAchievements:\nCommunity discovery, expert finding',
      // linkText: "RECOMMENDATION",
      // linkType: 'popup',
      // recommendation: {
      //   name: 'Paul Trueman',
      //   image:
      //     'https://arter.bslthemes.com/wp-content/uploads/2020/09/testimonial-2-280x280.jpg',
      //   position: 'Template author',
      //   review:
      //     "Working with Artur has been a pleasure. Better yet - I alerted them of a minor issue before going to sleep. The issue was fixed the next morning. I couldn't ask for better support. Thank you Artur! This is easily a 5 star freelancer.",
      //   rating: 4,
      // },
    },
    {
      title: 'Faculty of Agriculture - Ain Shams University ',
      position: 'Software Developer (Freelancer)',
      date: 'Jun 2013 – Jun 2014',
      description: '',
      // recommendation: {
      //   name: 'Paul Trueman',
      //   image:
      //     'https://arter.bslthemes.com/wp-content/uploads/2020/09/testimonial-1-280x280.jpg',
      //   position: 'Template author',
      //   review:
      //     "Working with Artur has been a pleasure. Better yet - I alerted them of a minor issue before going to sleep. The issue was fixed the next morning. I couldn't ask for better support. Thank you Artur! This is easily a 5 star freelancer.",
      //   rating: 5,
      // },
      // linkText: "RECOMMENDATION",
      // linkType: 'popup',
    },
    {
      title:
        'Software House - Faculty of Computers and Information - Ain Shams University',
      date: 'Aug 2011 – Feb 2012',
      position: 'Software Developer',
      description: '',
    },
    {
      title: 'Freelancer',
      date: 'Mar 2013 – August 2014',
      position: 'Software Developer (Freelancer)',
      description: '',
    },
    {
      title: 'Technosignage company',
      date: 'Aug 2014 – Sept 2015',
      position: 'Software Developer (Full Stack Developer)',
      description: '',
      linkText: 'VISIT SITE',
      linkType: 'site',
      linkUrl: 'https://technosignage.com/',
    },
    {
      title: 'Nabasoft company',
      date: 'Sept 2015 – Feb 2016',
      position: 'Software Developer (Mobile)',
      description: '',
      linkText: 'VISIT SITE',
      linkType: 'site',
      linkUrl: 'http://www.nabasoft.com/',
    },
    {
      title: 'Nagwa company',
      date: 'Feb 2016 – Oct 2016',
      position: 'Software Developer',
      description: '',
      linkText: 'VISIT SITE',
      linkType: 'site',
      linkUrl: 'https://www.nagwa.com/',
    },
    {
      title: 'Afaqy IT company',
      date: 'Dec 2016 – Jul 2020',
      position: 'Full Stack Software Developer',
      description: '',
      linkText: 'VISIT SITE',
      linkType: 'site',
      linkUrl: 'https://afaqy.com/',
    },
    {
      title: 'Advansys-esc',
      date: 'Nov 2020 – Present',
      position: 'Senior Full Stack Software Developer',
      description: '',
      linkText: 'VISIT SITE',
      linkType: 'site',
      linkUrl: 'https://www.advansys-esc.com/',
    },
  ];

  moreHardSkills: any[] = [
    //Programming Languages and Techniques:
    {
      name: 'C# Desktop Applications',
      percentage: 100,
    },
    {
      name: 'J2SE',
      percentage: 100,
    },
    {
      name: 'J2ME',
      percentage: 100,
    },
    {
      name: 'SQL & PL/SQL',
      percentage: 100,
    },
    {
      name: 'JavaScript',
      percentage: 100,
    },
    {
      name: 'JQuery',
      percentage: 100,
    },
    {
      name: 'Angular',
      percentage: 100,
    },
    {
      name: 'ReactJs',
      percentage: 100,
    },
    {
      name: 'VueJs',
      percentage: 100,
    },
    //web tech
    {
      name: 'ASP.NET',
      percentage: 100,
    },
    {
      name: 'JQuery',
      percentage: 100,
    },
    {
      name: 'CSS',
      percentage: 100,
    },
    {
      name: 'HTML5',
      percentage: 100,
    },
    {
      name: 'Ionic',
      percentage: 100,
    },
    {
      name: 'JavaScript',
      percentage: 100,
    },
    {
      name: 'Telerik',
      percentage: 100,
    },
    {
      name: 'MVC',
      percentage: 100,
    },
    {
      name: 'Angular JS',
      percentage: 100,
    },
    //Database Management Systems:
    {
      name: 'Oracle 11g',
      percentage: 100,
    },
    {
      name: 'SQL Server All Versions',
      percentage: 100,
    },
    {
      name: 'Microsoft Access',
      percentage: 100,
    },
    //Development tools
    {
      name: 'Android Studio',
      percentage: 100,
    },
    {
      name: 'Visual studio All Versions',
      percentage: 100,
    },
    {
      name: 'JDeveloper',
      percentage: 100,
    },
    {
      name: 'Net Beans',
      percentage: 100,
    },
    {
      name: ' Intel XDK',
      percentage: 100,
    },
  ];

  constructor() {}
}
