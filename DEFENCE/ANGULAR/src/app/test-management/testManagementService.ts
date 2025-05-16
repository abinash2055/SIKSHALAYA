import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestManagementService {

  constructor(private http: HttpClient) { }

  setChapterTest(name: string, description: string, instruction: string, topicId: number): Observable<any> {
    const body = {
      name: name,
      description: description,
      instruction: instruction,
      topicId: topicId
    };

    return this.http.post('https://rrohan.ktm.yetiappcloud.com/api/TestManagement/SetChapterTest', body);
  }

  setChapterTestQuestion(question: string, questionImage: string, solution: string, solutionImage: string,
     negativeMark: number, positiveMark: number, chapterTestId: number, 
    options: { option: string, isCorrect: boolean, optionImage: string }[]): Observable<any> {
    const body = {
      question: question,
      questionImage: questionImage,
      solution: solution,
      solutionImage: solutionImage,
      negativeMark: negativeMark,
      positiveMark: positiveMark,
      chapterTestId: chapterTestId,
      options: options
    };

    return this.http.post('https://rrohan.ktm.yetiappcloud.com/api/TestManagement/SetChapterTestQuestion', body);
  }
}

