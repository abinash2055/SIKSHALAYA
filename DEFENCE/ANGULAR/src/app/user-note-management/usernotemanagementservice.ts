import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserNoteManagementService {

  constructor(private http: HttpClient) { }

  setUserNote(title: string, description: string, topicId: number, studentId: string): Observable<any> {
    const body = {
      title: title,
      description: description,
      topicId: topicId,
      studentId: studentId
    };

    return this.http.post('https://rrohan.ktm.yetiappcloud.com/api/UserNoteManagement/SetUserNote', body);
  }


  editUserNote(id: number, edittitle: string, editdescription: string, 
    edittopicId: number, editstudentId: string): Observable<any> {
    const body = {
      id: id,
      title: edittitle,
      description: editdescription,
      topicId: edittopicId,
      studentId: editstudentId
    };

    return this.http.post('https://rrohan.ktm.yetiappcloud.com/api/UserNoteManagement/EditUserNote', body);
  }
}
