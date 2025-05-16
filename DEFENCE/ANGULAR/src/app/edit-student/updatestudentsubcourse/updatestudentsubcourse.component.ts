import { Component, importProvidersFrom } from '@angular/core';
import {UpdateStudentManagementService} from './updatestudentmanagementservice';

@Component({
  selector: 'app-updatestudentsubcourse',
  templateUrl: './updatestudentsubcourse.component.html',
  styleUrl: './updatestudentsubcourse.component.scss'
})
export class UpdatestudentsubcourseComponent {
  studentId: string = '';
  subCourseId: string='';

  constructor(private updatestudentmanagementservice: UpdateStudentManagementService) { }

  updateStudentCourseSubCourse(): void {
    this.updatestudentmanagementservice.updateStudentCourseSubCourse(this.studentId, 
      parseInt(this.subCourseId)).subscribe(
      (response) => {
        alert('Student course and subcourse updated successfully:');
        this.studentId='',
        this.subCourseId=''
      },
      (error) => {
        alert('Failed to update student course and subcourse:');
      }
    );
  }


}
