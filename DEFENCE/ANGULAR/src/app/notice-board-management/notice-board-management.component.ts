import { Component } from '@angular/core';
import{NoticeBoardManagementService} from './noticemanagementservice';

@Component({
  selector: 'app-notice-board-management',
  templateUrl: './notice-board-management.component.html',
  styleUrl: './notice-board-management.component.scss'
})
export class NoticeBoardManagementComponent {

  title: string='';
  notice: string='';
  collegeId: string='';
  fileNameByDeveloper: string='';
  file!: File;

  constructor(private noticemanagementservice: NoticeBoardManagementService) { }

  setNoticeBoard(): void {
    this.noticemanagementservice.setNoticeBoard(this.title, this.notice, parseInt(this.collegeId), this.fileNameByDeveloper, this.file).subscribe(
      (response) => {
        alert('Notice set successfully:');
        this.title='';
        this.collegeId='';
        this.notice='';
        this.fileNameByDeveloper='';
        // Reset form fields if needed
      },
      (error) => {
        alert('Failed to set notice :');
      }
    );
  }

  onFileChange(event: any) {
    this.file = event.target.files[0];
  }
}


