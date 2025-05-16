import { Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';

import{Route, Router} from '@angular/router';

@Component({
  selector: 'app-user-management',
  templateUrl:'./user-management.component.html',
  styleUrl: './user-management.component.scss'
})
export class UserManagementComponent {
  constructor(private router:Router){}

  goTo(registerstudent:string):void{
    this.router.navigate([`${registerstudent}`]);
  }

  goTopage(editstudent:string):void{
    this.router.navigate([`${editstudent}`]);
  }
  goTopage1(getuser:string):void{
    this.router.navigate([`${getuser}`]);
  }

 
  }




