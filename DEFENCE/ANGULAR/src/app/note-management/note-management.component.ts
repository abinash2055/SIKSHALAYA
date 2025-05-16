import { Component } from '@angular/core';
import{NoteManagementService} from './notemanagementservice';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-note-management',
  templateUrl: './note-management.component.html',
  styleUrl: './note-management.component.scss'
})
export class NoteManagementComponent {


  name: string='';
  description: string='';
  topicId: string='';
  file!: File;
  fileNameByDeveloper: string='';

  noteId: string='';

  TogglenoteId:string='';  
  

  gettopicId: string='';
  noteName: string='';
  page: string='';
  notes: any[] = [];

  fetchtopicId: string='';
  fetchNoteName: string='';
  fetchpage: string='';


  constructor(private notemanagementservice: NoteManagementService, private http: HttpClient) { }
  setNote(): void {
    this.notemanagementservice.setNote(this.name, this.description, this.topicId, this.file, this.fileNameByDeveloper).subscribe(
      (response) => {
        this.name='';
        this.description='';
        this.topicId='';
        this.fileNameByDeveloper='';
        alert('Note set successfully:');
      },
      (error) => {
        alert('Failed to set note:');
      }
    );
  }

  onFileChange(event: any) {
    this.file = event.target.files[0];
  }



  deleteNote(): void {
    this.notemanagementservice.deleteNote(parseInt(this.noteId)).subscribe(
      (response) => {
        this.noteId='';
        console.log('Note deleted successfully');
      },
      (error) => {
        console.error('Failed to delete note:', error);
      }
    );
  }

  toggleNote(): void {
    this.notemanagementservice.toggleNote(parseInt(this.TogglenoteId)).subscribe(
      (response) => {
        this.noteId='';
        console.log('Note toggled successfully');
      },
      (error) => {
        console.error('Failed to toggled note:', error);
      }
    );
  }


  Notes: any[] = []
  
  ngOnInit() {
   this.fetchNotes();
  }

  fetchNotes()
{
  this.http.get<any>('https://rrohan.ktm.yetiappcloud.com/api/NoteManagement/GetNotes?page=' + this.fetchpage)
      .subscribe(response => {
        this.Notes = response.data;
      });
}
   

 
  }
  





