import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-infobar',
  moduleId: module.id,
  templateUrl: 'infobar.component.html',
  styleUrls: ['infobar.component.css']
})
export class InfobarComponent {
  @Input() infoBarActive = false;
  @Input() menuBarActive = false;

  @Output() infoBarActiveChange: EventEmitter<boolean> = new EventEmitter(false);
  constructor() {
  }

  onInfoBarActiveChange(){
    this.infoBarActive = !this.infoBarActive;
    this.infoBarActiveChange.next(this.infoBarActive);
  }
}
