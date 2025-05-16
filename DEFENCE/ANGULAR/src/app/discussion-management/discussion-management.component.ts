import { Component } from '@angular/core';
import{discussionManagementService} from './discussionManagementService';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-discussion-management',
  templateUrl: './discussion-management.component.html',
  styleUrl: './discussion-management.component.scss'
})
export class DiscussionManagementComponent {

  studentId:string=''
  
  pageId: string='';
  fetchtopicId: string='';
  fetchcollegeId: string='';
 

  constructor(private discussionManagementService: discussionManagementService, private http: HttpClient) { }

  discussions :any[]=[]
  
  fetchDiscussions(fetchtopicId:string, fetchcollegeId: string, pageId: string) {
    this.discussionManagementService.getDiscussions(fetchtopicId, fetchcollegeId, pageId).subscribe(
      (response: any) => {
        this.discussions = response.data;
        // this.fetchcollegeId=response.data;
        // this.fetchtopicId=response.data;
        // this.studentId=response.data.id;
        console.log('Discussions fetched successfully:', this.discussions);
      },
      (error) => {
        console.error('Failed to fetch discussions:', error);
      }
    );
  }



}
