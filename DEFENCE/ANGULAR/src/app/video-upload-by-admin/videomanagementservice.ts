import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoManagementService {

  constructor(private http: HttpClient) { }

  setVideo(title: string, vdoCipherId: string, description: string, 
    totalVideoDuration: number, topicId: number): Observable<any> {
    const body = {
      title: title,
      vdoCipherId: vdoCipherId,
      description: description,
      totalVideoDuration: totalVideoDuration,
      topicId: topicId
    };

    return this.http.post('https://rrohan.ktm.yetiappcloud.com/api/VideoCipherAdmin/SetVideo', body);
  }

  
}
