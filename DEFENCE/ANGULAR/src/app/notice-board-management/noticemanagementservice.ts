import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  export class NoticeBoardManagementService {
  
    constructor(private http: HttpClient) { }
  
    setNoticeBoard(title: string, notice: string, collegeId: number, fileNameByDeveloper: string, file: File): Observable<any> {
      const formData = new FormData();
      formData.append('Title', title);
      formData.append('Notice', notice);
      formData.append('CollegeId', collegeId.toFixed());
      formData.append('FileNameByDeveloper', fileNameByDeveloper);
      formData.append('File', file, file.name);
  
      return this.http.post('https://rrohan.ktm.yetiappcloud.com/api/NoticeBoardManagement/SetNoticeBoard', formData);
    }
  }