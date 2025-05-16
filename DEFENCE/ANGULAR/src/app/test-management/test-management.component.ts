import { Component } from '@angular/core';
import{TestManagementService} from './testManagementService';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-test-management',
  templateUrl: './test-management.component.html',
  styleUrl: './test-management.component.scss'
})
export class TestManagementComponent {
  name: string='';
  description: string='';
  instruction: string='';
  topicId: string='';

  testType: string='';
  testName: string='';


  // SetChapterTestQuestion
  question: string='';
  questionImage: string='';
  solution: string='';
  solutionImage: string='';
  negativeMark: string='';
  positiveMark: string='';
  chapterTestId: string='';
  options: { option: string, isCorrect: boolean, optionImage: string }[]=[] 
  

  constructor(private testManagementService: TestManagementService, private http: HttpClient)
   { this.options.push({ option: '', isCorrect: false, optionImage: '' });
    this.options.push({ option: '', isCorrect: false, optionImage: '' });
    this.options.push({ option: '', isCorrect: false, optionImage: '' });
    this.options.push({ option: '', isCorrect: false, optionImage: '' });}

  setChapterTest(): void {
    this.testManagementService.setChapterTest(this.name, this.description, this.instruction, 
      parseInt(this.topicId)).subscribe(
      (response) => {
        alert('Chapter test set successfully:');
        // Reset form fields if needed
        this.name='';
        this.description='';
        this.instruction='';
        this.topicId='';
      },
      (error) => {
       alert('Failed to set chapter test:');
      }
    );
  }

  setChapterTestQuestion(): void {
    this.testManagementService.setChapterTestQuestion(this.question, this.questionImage, this.solution, this.solutionImage, 
      parseInt(this.negativeMark), parseInt(this.positiveMark), parseInt(this.chapterTestId), this.options).subscribe(
      (response) => {
        alert('Chapter test question set successfully:');
        // Reset form fields if needed
        this.question='';
        this.questionImage='';
        this.solution='';
        this.solutionImage='';
        this.negativeMark='';
        this.positiveMark='';
        this.chapterTestId='';
      },
      (error) => {
        alert('Failed to set chapter test question:');
      }
    );
  }

  tests: any[] = []
  
  ngOnInit() {
   this.fetchTest();
  }

  fetchTest()
{
  this.http.get<any>('https://rrohan.ktm.yetiappcloud.com/api/TestManagement/GetTest?'+ this.fetchTest)
      .subscribe(response => {
        this.tests = response.data;
      });
}



}
