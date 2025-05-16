import { Component } from '@angular/core';
import {UserNoteManagementService} from './usernotemanagementservice';

@Component({
  selector: 'app-user-note-management',
  templateUrl: './user-note-management.component.html',
  styleUrl: './user-note-management.component.scss'
})
export class UserNoteManagementComponent {

  title: string = '';
  description: string = '';
  topicId: string='';
  studentId: string = '';

  id:string='';
  edittitle: string = '';
  editdescription: string = '';
  edittopicId: string='';
  editstudentId: string = '';

  constructor(private usernotemanagementservice: UserNoteManagementService) { }
 
  setUserNote(): void {
    this.usernotemanagementservice.setUserNote(this.title, this.description,
      parseInt( this.topicId), this.studentId).subscribe(
      (response) => {
        alert('User note set successfully:');
        this.title='',
        this.description='',
        this.topicId='',
        this.studentId=''
      },
      (error) => {
        alert('Failed to set user note:');
      }
    );
  }

  editUserNote(): void {
    this.usernotemanagementservice.editUserNote(parseInt(this.id), this.edittitle, this.editdescription, 
    parseInt(this.edittopicId), this.editstudentId).subscribe(
      (response) => {
        alert('User note edited successfully:');
        this.id='',
        this.edittitle='',
        this.editdescription='',
        this.edittopicId='',
        this.editstudentId=''
      },
      (error) => {
        alert('Failed to edit user note:');
      }
    );
  }

}
