import { Component } from '@angular/core';
import {VideoManagementService} from './videomanagementservice';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-video-upload-by-admin',
  templateUrl: './video-upload-by-admin.component.html',
  styleUrl: './video-upload-by-admin.component.scss'
})
export class VideoUploadByAdminComponent {

  title: string = '';
  vdoCipherId: string = '';
  description: string = '';
  totalVideoDuration: string='';
  topicId: string='';

  constructor(private videomanagementservice: VideoManagementService,  private http: HttpClient) { }

  setVideo(): void {
    this.videomanagementservice.setVideo(this.title, this.vdoCipherId, 
      this.description, parseInt(this.totalVideoDuration),parseInt(this.topicId)).subscribe(
      (response) => {
        alert('Video set successfully:');
        this.title='',
        this.vdoCipherId='',
        this.description='',
        this.totalVideoDuration='',
        this.topicId=''
      },
      (error) => {
        alert('Failed to set video:');
      }
    );
  }
  videos:any[]=[];
  ngOnInit() {
    this.http.get<any>('https://rrohan.ktm.yetiappcloud.com/api/VdoCipher/GetVideos')
      .subscribe(response => {
        this.videos = response.data;
        this.videos.reverse()
      });
  }
  fetchVideoTopicId:number=0;
  fetchVideos(){
    this.http.get<any>('https://rrohan.ktm.yetiappcloud.com/api/VdoCipher/GetVideos?topicId='+this.fetchVideoTopicId)
    .subscribe(response => {
      this.videos = response.data;
      this.videos.reverse()
    });

  }

}
