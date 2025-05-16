import { Component , OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    MatIconModule,
    MatDividerModule,
    MatListModule,

  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent implements OnInit {

  constructor() { }
  
 

  ngOnInit(): void {
  }

  // sideBarOpen = true;

  // sideBarToggler() {
  //   this.sideBarOpen = !this.sideBarOpen;
  // }


  
}
