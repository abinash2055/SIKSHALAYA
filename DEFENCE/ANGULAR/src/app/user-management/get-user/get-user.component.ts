import { Component, EventEmitter, Output } from '@angular/core';
import{ GetUserManagementService} from './getusermanagementservice';
import { HttpClient } from '@angular/common/http';
import{Route, Router} from '@angular/router';

@Component({
  selector: 'app-get-user',
  templateUrl: './get-user.component.html',
  styleUrl: './get-user.component.scss'
})
export class GetUserComponent {

  @Output() dataEvent = new EventEmitter<any>();


  constructor(private getusermanagementservice: GetUserManagementService,  private http: HttpClient, private router:Router) { }
  students:any[]=[];
  ngOnInit() {
    // this.http.get<any>('https://rrohan.ktm.yetiappcloud.com/api/admin/UserManagement/GetStudents')
    //   .subscribe(response => {
    //     this.students = response.data;
    //     this.students.reverse()
    //   });
    this.fetchStudent();
  }
  searchStudent:string='';
  fetchStudent(){
    this.http.get<any>('https://rrohan.ktm.yetiappcloud.com/api/admin/UserManagement/GetStudents?searchTerm=' + this.searchStudent)
    .subscribe(response => {
      this.students = response.data;
      this.students.reverse()
    });

    

}

sendData() {
  const idToSend = '123'; // Assuming '123' is the id you want to send
  this.router.navigate(['/getuser/studentDetails'], { queryParams: { id: idToSend } });
}

goTo(studentDetails:string):void{
  this.router.navigate([`${studentDetails}`]);
}



studentData = {
  "id": "",
  "status": true,
  "fullName": "Rajnish Baral",
  "phoneNumber": "9845758489",
  "phoneNumberConfirmed": false,
  "gender": "Male",
  "email": "rajnish@gmail.com",
  "dateOfBirth": "2024-03-03T00:00:00",
  "emailConfirmed": false,
  "address": null,
  "college": {
    "id": 1,
    "name": "Sikshyalaya"
  },
  "subCourse": {
    "id": 4,
    "name": "Class 9",
    "course": {
      "id": 8,
      "name": "School Level"
    }
  }
};
}
