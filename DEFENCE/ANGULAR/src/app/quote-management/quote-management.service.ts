import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuoteManagementService {

  constructor(private http: HttpClient) { }

  setQuote(title: string, description: string, startDate: Date, endDate: Date): Observable<any> {
    const body = {
      title: title,
      description: description,
      startDate: startDate,
      endDate: endDate                           
    };

    return this.http.post('https://rrohan.ktm.yetiappcloud.com/api/QuoteManagement/SetQuote', body);
  }
}
