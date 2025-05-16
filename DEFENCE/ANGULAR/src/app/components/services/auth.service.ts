import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/auth';
import { Observable } from 'rxjs';
import{baseUrl} from './../../environments'


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl: any;

//   private baseUrl = 'https://rrohan.ktm.yetiappcloud.com/api/admin/UserManagement/RegisterStudent';

  constructor(private http: HttpClient) { }

  login(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}users`, data);
  }


 
}
