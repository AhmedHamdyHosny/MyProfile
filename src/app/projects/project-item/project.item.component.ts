import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-item',
  moduleId: module.id,
  templateUrl: 'project.item.component.html',
  styleUrls: ['project.item.component.css']
})
export class ProjectItemComponent {
  @Input() project: any;

  constructor() {
  }
}
