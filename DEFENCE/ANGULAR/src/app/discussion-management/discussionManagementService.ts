import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
  })
  export class discussionManagementService {
    
  
    constructor(private http: HttpClient) { }


    getDiscussions(fetchcollegeId: string, fetchtopicId: string, pageId: string): Observable<any> {
      const url = `https://rrohan.ktm.yetiappcloud.com/api/DiscussionManagement/GetDiscussion`;
      const params = new HttpParams()
        .set('collegeId', fetchcollegeId)
        .set('topicId', fetchtopicId)
        .set('page', pageId);
    
      return this.http.get(url, { params });
    }
    


  }