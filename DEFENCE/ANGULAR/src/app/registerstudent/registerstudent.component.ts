import { Component } from '@angular/core';
import {RegisterStudentService} from './registerstudentservice';

@Component({
  selector: 'app-registerstudent',
  templateUrl: './registerstudent.component.html',
  styleUrl: './registerstudent.component.scss'
})
export class RegisterstudentComponent {
  collegeId: string='';
  fullName: string = '';
  email: string = '';
  password: string = '';
  phoneNumber: string = '';
  gender: string = '';
  dateOfBirth: string = new Date().toISOString();
  constructor(private registerstudentservice: RegisterStudentService) { }

  registerStudent(): void {
    this.registerstudentservice.registerStudent(parseInt(this.collegeId), this.fullName,
     this.email, this.password, this.phoneNumber, this.gender, this.dateOfBirth).subscribe(
      (response) => {
        alert('Student registered successfully:');
        this.collegeId='';
        this.fullName='';
        this.email='';
        this.password='';
        this.phoneNumber='';
        this.  gender=''
      
      },
      (error) => {
        alert('Failed to register student:');
      }
    );
  }
}
