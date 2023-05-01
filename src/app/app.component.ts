import { AfterContentChecked, AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  menuBarActive = false;
  infoBarActive = false;
  title = 'Personal Profile';
  constructor(public router: Router){}

  ngOnInit(): void {
  }

  routeTo(route:string){
    this.router.navigate([route]);
    if(this.menuBarActive){
      this.menuBarActive = false;
    }
  }

  onContentClick(){
    if(this.infoBarActive){
      this.infoBarActive = false;
    }
    if(this.menuBarActive){
      this.menuBarActive = false;
    }
  }
}
