import { Component } from '@angular/core';
import { CategoryManagementService } from '../category-management.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-category-management',
  templateUrl: './category-management.component.html',
  styleUrl: './category-management.component.scss'
})
export class CategoryManagementComponent {
  courseName:string='';
  subCourseName: string='';
  courseId: string='';
  toogleCourseId: string='';
  editCourseName: string='';
  editcourseId: string='';
  toogleSubCourseId:string='';
  editsubCourseName: string='';
  editsubCourseId: string='';
  deletecourseId:string='';
  deletesubcourseId: string='';
  addsubCourseid: string='';
  addsubjectId:string='';


  constructor(private categoryManagementService: CategoryManagementService ,private http: HttpClient) { }

  setCourse() {
    this.categoryManagementService.setCourse(this.courseName).subscribe(
      (response) => {
        console.log('Course set successfully:', response);
        this.getCoursesManual();
        this.courseName='';
      },
      (error) => {
        console.error('Failed to set course:', error);
      }
    );
  }

  
  toogleCourse() {
    
    this.categoryManagementService.toogleCourse(parseInt(this.toogleCourseId)).subscribe(
      (response) => {
        alert('Status set successfully:');
        this.toogleCourseId='';
      },
      (error) => {
        console.error('Failed to set Status:', error);
      }
    );
  }

  editCourse() {
    
    this.categoryManagementService.editCourse( this.editCourseName,parseInt(this.editcourseId)).subscribe(
      (response) => {
        alert('Edited successfully:');
        this.editCourseName='';
        this.editcourseId='';
      },
      (error) => {
        console.error('Failed to Edit', error);
      }
    );
  }

  deleteCourse() {
    
    this.categoryManagementService.deleteCourse(parseInt(this.deletecourseId)).subscribe(
      (response) => {
        alert('Deleted successfully:');
        this.deletecourseId='';
      },
      (error) => {
        console.error('Failed to Delete', error);
      }
    );
  }


  setSubCourse() {
    
    this.categoryManagementService.setSubCourse(this.subCourseName, parseInt(this.courseId)).subscribe(
      (response) => {
        alert('SubCourse set successfully:');
        this.subCourseName='';
        this.courseId='';
      },
      (error) => {
        console.error('Failed to set Subcourse:', error);
      }
    );
  }

   
  toogleSubCourse() {
    
    this.categoryManagementService.toogleSubCourse(parseInt(this.toogleSubCourseId)).subscribe(
      (response) => {
        alert('Status set successfully:');
        this.toogleSubCourseId='';
      },
      (error) => {
        console.error('Failed to set Status:', error);
      }
    );
  }
  

  editSubCourseName() {
    
    this.categoryManagementService.editSubCourseName(this.editsubCourseName, parseInt(this.editsubCourseId)).subscribe(
      (response) => {
        alert('SubCourse edited successfully:');
        this.editsubCourseName='';
        this.editsubCourseId='';
      },
      (error) => {
        console.error('Failed to edit Subcourse:', error);
      }
    );
  }

  deleteSubCourse() {
    
    this.categoryManagementService.deletesubcourse(parseInt(this.deletesubcourseId)).subscribe(
      (response) => {
        alert('Deleted successfully:');
        this.deletesubcourseId='';
      },
      (error) => {
        console.error('Failed to Delete', error);
      }
    );
  }

  addSubject() {
    
    this.categoryManagementService.addSubject( parseInt(this.addsubCourseid),parseInt(this.addsubjectId)).subscribe(
      (response) => {
        alert('Added successfully:');
        this.addsubCourseid='';
        this.addsubjectId='';
      },
      (error) => {
        console.error('Failed to Add', error);
      }
    );
  }

  Subcourses: any[] = [];
  getSubCoursesManual()
{
  this.http.get<any>('https://rrohan.ktm.yetiappcloud.com/api/CategoryManagement/GetSubCourses')
      .subscribe(response => {
        this.Subcourses = response.data;
      });
}





  


  courses: any[] = [];
  ngOnInit() {
   this.getCoursesManual();
   this.getSubCoursesManual();
  }
  getCoursesManual()
{
  this.http.get<any>('https://rrohan.ktm.yetiappcloud.com/api/CategoryManagement/GetCourses')
      .subscribe(response => {
        this.courses = response.data;
      });
}
}
