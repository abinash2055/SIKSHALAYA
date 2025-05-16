import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardManagementService {

  constructor(private http: HttpClient) { }

  getRecentActivity(): Observable<any> {
    return this.http.get('YOUR_API_URL/recent-activity');
  }

  getTotalCourses(): Observable<any> {
    return this.http.get('https://rrohan.ktm.yetiappcloud.com/api/CategoryManagement/GetCourses');
  }

  getTotalUsers(): Observable<any> {
    return this.http.get('https://rrohan.ktm.yetiappcloud.com/api/admin/UserManagement/GetStudents');
  }
}
