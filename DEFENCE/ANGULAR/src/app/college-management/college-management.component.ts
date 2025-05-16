import { Component } from '@angular/core';
import { collegeComponentservice} from '../college-management/collegeComponentservice';
import { HttpClient } from '@angular/common/http';


import { CategoryManagementService } from '../category-management.service';

@Component({
  selector: 'app-college-management',
  templateUrl: './college-management.component.html',
  styleUrl: './college-management.component.scss'
})
export class CollegeManagementComponent {

  collegeName: string = '';
  collegeMobile: string = '';
  collegeEmail: string = '';
  collegetelephone: string = '';
  collegeaddress: string = '';
  collegelocationUrl: string = '';
  collegewebsiteUrl: string = '';
  collegeiconUrl: string = '';
  collegethumbnailUrl: string = '';
  collegedescription: string = '';
  colleges:any[]=[];

  collegeId: string='';
  name: string='';
  mobile: string='';
  email: string='';
  telephone: string='';
  address: string='';
  locationUrl: string='';
  websiteUrl: string='';
  iconUrl: string='';
  thumbnailUrl: string='';
  description: string='';


  constructor(private collegeComponentservice: collegeComponentservice, private http: HttpClient) { }

  // constructor(private collegComponentservice: collegeComponentservice, private http: HttpClient) { }


  setCollege() {
    this.collegeComponentservice.setCollege(this.collegeName, parseInt(this.collegeMobile),this.collegeEmail ,parseInt(this.collegetelephone),
      this.collegeaddress, this.collegelocationUrl, this.collegewebsiteUrl,
    this.collegeiconUrl, this.collegethumbnailUrl, this.collegedescription,).subscribe(

      (response) => {
        console.log('College set successfully:', response);
        this.collegeName = '';
        this.collegeMobile = '';
        this.collegeEmail = '';
        this.collegetelephone = '';
        this.collegelocationUrl = '';
        this.collegewebsiteUrl = '';
        this.collegeiconUrl = '';
        this.collegethumbnailUrl = '';
        this.collegedescription = '';
      },
      (error) => {
        console.error('Failed to set college:', error);
      }
    );
  }


  editCollege() {
    const data = {
      collegeId: this.collegeId,
      name: this.name,
      mobile: this.mobile,
      email: this.email,
      telephone: this.telephone,
      address: this.address,
      locationUrl: this.locationUrl,
      websiteUrl: this.websiteUrl,
      iconUrl: this.iconUrl,
      thumbnailUrl: this.thumbnailUrl,
      description: this.description
    };

    this.collegeComponentservice.editCollege(data).subscribe(
      (response: any) => {
        console.log('College updated successfully:', response);
      },
      (error: any) => {
        console.error('Failed to update college:', error);
      }
    );
  }


  toogleCollege() {
    
    this.collegeComponentservice.toogleCollege(parseInt(this.collegeId)).subscribe(
      (response) => {
        alert('Toogled successfully:');
        this.collegeId='';
      },
      (error) => {
        console.error('Failed to Toogled:', error);
      }
    );
  }

  ngOnInit() {
    this.http.get<any>('https://rrohan.ktm.yetiappcloud.com/api/CollgeManagement/GetCollege')
      .subscribe(response => {
        this.colleges = response.data;
        this.colleges.reverse()
      });
  }
}

