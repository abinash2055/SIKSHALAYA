import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
  })
  export class collegeComponentservice {
    updateCollege: any;
  
    constructor(private http: HttpClient) { }

    
  

    setCollege(collegeName: string, collegeMobile: number, collegeEmail: string, collegetelephone: number,
      collegeaddress: string, collegelocationUrl: string,collegewebsiteUrl: string,collegeiconUrl: string,
      collegethumbnailUrl: string,  collegedescription: string ) {
      const url = 'https://rrohan.ktm.yetiappcloud.com/api/CollgeManagement/SetCollege';
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': '*/*'
      });
  
      const body = {
          name: collegeName ,
          mobile: collegeMobile.toString(),
          email: collegeEmail,
          telephone: collegetelephone.toString(),
          address: collegeaddress,
          locationUrl: collegelocationUrl,
          websiteUrl: collegewebsiteUrl,
          iconUrl: collegeiconUrl,
          thumbnailUrl: collegethumbnailUrl,
          description: collegedescription
      };
  
      return this.http.post(url, body, { headers });
    }
  
  
    editCollege(data: any) {
      const url = 'https://rrohan.ktm.yetiappcloud.com/api/CollgeManagement/EditCollege';
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': '*/*'
      });
  
      return this.http.post(url, data, { headers });
    }
  

    toogleCollege(collegeId: number) {
      const url = 'https://rrohan.ktm.yetiappcloud.com/api/CollgeManagement/ToggleCollegeStatus';
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': '*/*'
      });
  
      const body = {
        name: collegeId
      };
  
      return this.http.post(url, body, { headers });
    }
  

    
}


  






















