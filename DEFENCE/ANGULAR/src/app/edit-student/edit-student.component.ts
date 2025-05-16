import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

import{EditStudentManagementService} from './editstudentmanagementservice';
@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrl: './edit-student.component.scss'
})
export class EditStudentComponent {


  studentId: string = '';
  fullName: string = '';
  email: string = '';
  phoneNumber: string = '';
  gender: string = '';
  dateOfBirth: Date = new Date();
   
  constructor(private editstudentmanagementservice: EditStudentManagementService, private router:Router) { }

  goTo(updatestudentsubcourse:string):void{
    this.router.navigate([`${updatestudentsubcourse}`]);
  }


  editStudent(): void {
    this.editstudentmanagementservice.editStudent(this.studentId, this.fullName, this.email,
       this.phoneNumber, this.gender, this.dateOfBirth).subscribe(
      (response) => {
        alert('Student information edited successfully:');
        this.studentId='',
        this.fullName='',
        this.email='',
        this.phoneNumber='',
        this.gender=''
       
      },
      (error) => {
        alert('Failed to edit student information:');
        this.studentId='',
        this.fullName='',
        this.email='',
        this.phoneNumber='',
        this.gender=''
      }
    );
  }

}
