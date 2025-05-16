import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateStudentManagementService {

  constructor(private http: HttpClient) { }

  updateStudentCourseSubCourse(studentId: string, subCourseId: number): Observable<any> {
    const body = {
      studentId: studentId,
      subCourseId: subCourseId
    };

    return this.http.post('https://rrohan.ktm.yetiappcloud.com/api/admin/UserManagement/UpdateStudentCourseSubCourse', body);
  }
}
