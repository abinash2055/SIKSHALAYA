import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TopicManagementService {

  constructor(private http: HttpClient) { }

  setTopic(subjectId: number, name: string): Observable<any> {
    const body = {
      subjectId: subjectId,
      name: name
    };

    return this.http.post('https://rrohan.ktm.yetiappcloud.com/api/TopicManagement/SetTopic', body);

  }

  editopicName(editsubjectId: number,editTopicid: number ,editname: string): Observable<any> {
    const body = {
      subjectId: editsubjectId,
      topicId: editTopicid,
      name: editname
    };

    return this.http.post('https://rrohan.ktm.yetiappcloud.com/api/TopicManagement/EditTopicName', body);
  }

  deletetopic(deleteTopicid: number ): Observable<any> {
    const body = {
      
      topicId: deleteTopicid,
      
    };

    return this.http.post('https://rrohan.ktm.yetiappcloud.com/api/TopicManagement/EditTopicName', body);
  }
}
