import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterStudentService {

  constructor(private http: HttpClient) { }

  registerStudent(collegeId: number, fullName: string, email: string, password: string, phoneNumber: string, 
    gender: string, dateOfBirth: string): Observable<any> {
    const body = {
      collegeId: collegeId,
      fullName: fullName,
      email: email,
      password: password,
      phoneNumber: phoneNumber,
      gender: gender,
      dateOfBirth: dateOfBirth // Convert Date object to string in ISO format
    };

    return this.http.post('https://rrohan.ktm.yetiappcloud.com/api/admin/UserManagement/RegisterStudent', body);
  }
}
