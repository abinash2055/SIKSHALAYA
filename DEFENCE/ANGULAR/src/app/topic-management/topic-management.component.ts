import { Component } from '@angular/core';
import{TopicManagementService} from './topicManagementService';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-topic-management',
  templateUrl: './topic-management.component.html',
  styleUrl: './topic-management.component.scss'
})
export class TopicManagementComponent {

  subjectId:string='';
  name: string = '';
  editsubjectId:string='';
  editTopicid:string='';
  editname:string='';
  deleteTopicid:string='';
  fetchcourseId: string='';
  fetchsubcourseId:string='';
  fetchsubjectId:string='';
  fetchtopicName:string='';
  fetchchaptersubjectId: string='';

  constructor(private topicManagementService: TopicManagementService, private http: HttpClient) { }

  setTopic(): void {
    this.topicManagementService.setTopic(parseInt(this.subjectId), this.name).subscribe(
      (response) => {
        alert('Topic set successfully:');
        this.subjectId='';
        this.name='';
      },
      (error) => {
        alert('Failed to set topic:');
        this.subjectId='';
        this.name='';
      }
    );
  }


  editopicName(): void {
    this.topicManagementService.editopicName(parseInt(this.editsubjectId),parseInt(this.editTopicid), this.editname).subscribe(
      (response) => {
        alert('Topic edit successfully:');
        this.editsubjectId='';
        this.editTopicid='';
        this.editname='';
      },
      (error) => {
        alert('Failed to edit topic:');
        this.editsubjectId='';
        this.editTopicid='';
        this.editname='';
        
      }
    );
  }

  deletetopic(): void {
    this.topicManagementService.deletetopic(parseInt(this.deleteTopicid)).subscribe(
      (response) => {
        alert('Topic Delete successfully:');
        this.deleteTopicid='';
        
      },
      (error) => {
        alert('Failed to Delete topic:');
        this.deleteTopicid='';
      }
    );
  }



  Topics: any[] = []
  
  ngOnInit() {
   this.getTopicManual();
   this.getChapterManual();
  }
 


  getTopicManual()
{
  var url = 'https://rrohan.ktm.yetiappcloud.com/api/TopicManagement/GetTopics?courseId='
  + this.fetchcourseId+'&subcourseId='+this.fetchsubcourseId+'&subjectId='+this.fetchsubjectId+'&topicName='+this.fetchtopicName;
  console.log(url);
  this.http.get<any>(url)
      .subscribe(response => {
        this.Topics = response.data;
      });
}




  Chapters: any[] = []
getChapterManual()
{
  var url = 'https://rrohan.ktm.yetiappcloud.com/api/TopicManagement/GetTopics?subjectId=' + this.fetchchaptersubjectId;
  console.log(url);
  this.http.get<any>(url)
      .subscribe(response => {
        this.Chapters = response.data;
      });
}

}
