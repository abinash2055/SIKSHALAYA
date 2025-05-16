import { Component,Input,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.scss'
})
export class StudentDetailsComponent  implements OnInit{

  studentData: any;
  studentId:any;


  constructor(private http: HttpClient, private route: ActivatedRoute,  private router: Router) { }

  ngOnInit(): void {
    
   
        this.getStudentDetails();

    }

    getStudentDetails() {
      // this.studentId = this.router.url;
      this.studentId = this.route.snapshot.paramMap.get('id');
      this.http.get<any>('https://rrohan.ktm.yetiappcloud.com/api/admin/UserManagement/GetStudentByStudentId?studentId='+this.studentId.toString())
      .subscribe(response => {
        this.studentData = response.data;
      });
     
    }
}


