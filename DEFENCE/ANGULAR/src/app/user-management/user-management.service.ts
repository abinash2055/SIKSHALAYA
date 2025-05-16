import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {

  constructor(private http: HttpClient) { }

  editStudent(studentId: string, fullName: string, email: string, phoneNumber: string, gender: string, dateOfBirth: Date): Observable<any> {
    const body = {
      studentId: studentId,
      fullName: fullName,
      email: email,
      phoneNumber: phoneNumber,
      gender: gender,
      dateOfBirth: dateOfBirth.toISOString() // Convert Date object to string in ISO format
    };

    return this.http.post('https://rrohan.ktm.yetiappcloud.com/api/admin/UserManagement/EditStudent', body);
  }
}
