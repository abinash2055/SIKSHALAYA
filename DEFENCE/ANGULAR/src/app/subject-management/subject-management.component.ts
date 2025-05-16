import { Component } from '@angular/core';
import { CategoryManagementService } from '../category-management.service';
import { HttpClient } from '@angular/common/http';
import { SelectionChange } from '@angular/cdk/collections';

@Component({
  selector: 'app-subject-management',
  templateUrl: './subject-management.component.html',
  styleUrl: './subject-management.component.scss'
})
export class SubjectManagementComponent {
  subjectName:string='';
  imageUrl: string=''

  subjectId:string='';
  newsubjectName:string='';
  deletesubjectId: string='';
  togglesubjectId:string='';

  fetchCourseId: string='';
  fetchsubCourseId: string='';
  fetchSubjectName: string='';


  constructor(private categoryManagementService: CategoryManagementService ,private http: HttpClient) { }

  setSubject() {
    this.categoryManagementService.setSubject(this.subjectName, this.imageUrl).subscribe(
      (response) => {
        console.log('Subject set successfully:', response);
        this.subjectName='';
        this.imageUrl=''
      },
      (error) => {
        console.error('Failed to set course:', error);
      }
    );
  }

  updateSubject() {
    this.categoryManagementService.updateSubject(this.newsubjectName, this.subjectId).subscribe(
      (response) => {
        console.log('Subject Edit successfully:', response);
        this.newsubjectName='';
        this.subjectId=''
      },
      (error) => {
        console.error('Failed to set course:', error);
      }
    );
  }
  deleteSubject() {
    this.categoryManagementService.deleteSubject(this.deletesubjectId).subscribe(
      (response) => {
        console.log('Deleted successfully:', response);
        this.deletesubjectId=''
      },
      (error) => {
        console.error('Failed to set course:', error);
      }
    );
  }

  toggleSubject() {
    this.categoryManagementService.toggleSubject(this.togglesubjectId).subscribe(
      (response) => {
        console.log('Status successfully:', response);
        this.togglesubjectId=''
      },
      (error) => {
        console.error('Failed to set course:', error);
      }
    );
  }


  Subjects: any[] = []
  
  ngOnInit() {
   this.fetchSubject();
  }

  fetchSubject()
{
  this.http.get<any>('https://rrohan.ktm.yetiappcloud.com/api/SubjectManagement/GetSubjectsForAdmin?'+ this.fetchSubject)
      .subscribe(response => {
        this.Subjects = response.data;
      });
}

}
