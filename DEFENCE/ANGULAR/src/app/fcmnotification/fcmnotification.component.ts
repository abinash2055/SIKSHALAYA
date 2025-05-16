import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoryManagementService } from '../category-management.service';

@Component({
  selector: 'app-fcmnotification',
  templateUrl: './fcmnotification.component.html',
  styleUrl: './fcmnotification.component.scss'
})
export class FCMNotificationComponent {

  title: string='';
  body1: string='';
  topic: string='';

  constructor(private categoryManagementService:CategoryManagementService, private http: HttpClient) { }

  SendMessage(){
    this.categoryManagementService.SendMessage( this.title, this.body1,
    this.topic,).subscribe(
        (response) => {
          alert('Set successfully:');
          this.title='';
          this.body1='';
          this.topic='';
        },
        (error) => {
          console.error('Failed to Set:', error);
        }
      );
  }
}
