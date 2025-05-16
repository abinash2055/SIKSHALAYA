import { Component, Input } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Leaner';
  
 sideBarOpen= true;
 ngOnInit(){}

 sideBarToggler(){
  this.sideBarOpen= !this.sideBarOpen;
 }
  
}