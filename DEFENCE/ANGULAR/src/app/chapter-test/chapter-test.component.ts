import { Component } from '@angular/core';
import { ChapterTestService } from './chapter-test.service';



@Component({
  selector: 'app-chapter-test',
  templateUrl: './chapter-test.component.html',
  styleUrl: './chapter-test.component.scss'
})
export class ChapterTestComponent {
  studentId: string='';
  correct: string='';
  incorrect: string='';
  unanswered: string='';
  marksObtained: string='';
  totalMark: string='';
  totalQuestion: string='';
  

  constructor(private chapterTestService: ChapterTestService) { }

  postChapterTest() {
    const data = {
      chapterTestId: 0,
      studentId: this.studentId,
      correct: this.correct,
      incorrect: this.incorrect,
      unanswered: this.unanswered,
      marksObtained: this.marksObtained,
      totalMark: this.totalMark,
      totalQuestion: this.totalQuestion,
      chapterTestDetailedData: [
        {
          chapterTestQuestionId: 0,
          userAnswerId: 0
        }
      ]
    };

    this.chapterTestService.postChapterTest(data).subscribe(
      (response) => {
        console.log('Chapter test posted successfully:', response);
      },
      (error) => {
        console.error('Failed to post chapter test:', error);
      }
    );
  }
}