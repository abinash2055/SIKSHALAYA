import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteManagementService {

  constructor(private http: HttpClient) { }

  setNote(name: string, description: string, topicId: string, file: File, fileNameByDeveloper: string) {
    const formData = new FormData();
    formData.append('Name', name);
    formData.append('Description', description);
    formData.append('TopicId', topicId);
    formData.append('File', file, file.name);
    formData.append('fileNameByDeveloper', fileNameByDeveloper);

    return this.http.post('https://rrohan.ktm.yetiappcloud.com/api/NoteManagement/SetNote', formData);
  }



  deleteNote(noteId: number) {
    const options = {
      body:{
        noteId : noteId
      }
    };
    return this.http.delete('https://rrohan.ktm.yetiappcloud.com/api/NoteManagement/DeleteNote',  options );

  }
  toggleNote(noteId: number) {
    const body = {
      noteId: noteId
    }
    return this.http.post('https://rrohan.ktm.yetiappcloud.com/api/NoteManagement/ToggleNoteStatus', body );
  }



}
