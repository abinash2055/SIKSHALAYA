import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ChapterTestService {

  constructor(private http: HttpClient) { }

  postChapterTest(data: any) {
    const url = 'https://rpaudel.ktm.yetiappcloud.com/userapi/ChapterTest/PostChapterTest';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': '*/*'
    });

    return this.http.post(url, data, { headers });
  }
}

  