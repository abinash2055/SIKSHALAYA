import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryManagementService {
  DeleteSubject: any;

  constructor(private http: HttpClient) { }

  // Here is the Category managament or course code

  setCourse(courseName: string) {
    const url = 'https://rrohan.ktm.yetiappcloud.com/api/CategoryManagement/SetCourse';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': '*/*'
    });

    const body = { 
      name: courseName
    };

    return this.http.post(url, body, { headers });
  }

  toogleCourse(toogleCourseId: number) {
    const url = 'https://rrohan.ktm.yetiappcloud.com/api/CategoryManagement/ToggleCourseStatus';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': '*/*'
    });

    const body = {
      name: toogleCourseId
    };

    return this.http.post(url, body, { headers });
  }

  editCourse(editCourseName:string ,editcourseId: number) {
    const url = 'https://rrohan.ktm.yetiappcloud.com/api/CategoryManagement/EditCourseName';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': '*/*'
    });

    const body = {
      name: editCourseName,
      courseId: editcourseId
    };

    return this.http.post(url, body, { headers });
  }

  deleteCourse(deletecourseId: number) {
    const url = 'https://rrohan.ktm.yetiappcloud.com/api/CategoryManagement/DeleteCourse';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': '*/*'
    });

    const body = {
      courseId: deletecourseId
    };

    return this.http.post(url, body, { headers });
  }


  setSubCourse(subCourseName: string, courseId: number) {
    const url = 'https://rrohan.ktm.yetiappcloud.com/api/CategoryManagement/SetSubCourse';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': '*/*'
    });

    const body = {
      name: subCourseName,
      courseId: courseId
    };

    return this.http.post(url, body, { headers });

  }

  
  toogleSubCourse(toogleSubCourseId: number) {
    const url = 'https://rrohan.ktm.yetiappcloud.com/api/CategoryManagement/ToggleSubCourseStatus';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': '*/*'
    });

    const body = {
      name: toogleSubCourseId
    };

    return this.http.post(url, body, { headers });
  }

  editSubCourseName(editsubCourseName: string, editsubCourseId: number) {
    const url = 'https://rrohan.ktm.yetiappcloud.com/api/CategoryManagement/EditSubCourseName';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': '*/*'
    });

    const body = {
      name: editsubCourseName,
      courseId: editsubCourseId
    };

    return this.http.post(url, body, { headers });

  }



  deletesubcourse(deletesubcourseId: number) {
    const url = 'https://rrohan.ktm.yetiappcloud.com/api/CategoryManagement/DeleteSubCourse';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': '*/*'
    });

    const body = {
      courseId: deletesubcourseId
    };

    return this.http.post(url, body, { headers });
  }

  addSubject(addsubjectId: number, addsubCourseid:number) {
    const url = 'https://rrohan.ktm.yetiappcloud.com/api/CategoryManagement/AddSubject';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': '*/*'
    });

    const body = {
      courseId: addsubjectId,
      addsubcourseId: addsubCourseid
    };

    return this.http.post(url, body, { headers });
  }

  // end Here


  // Chapter test code start from here
  postChapterTest(data: any) {
    const url = 'https://rrohan.ktm.yetiappcloud.com/userapi/ChapterTest/PostChapterTest';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': '*/*'
    });

    return this.http.post(url, data, { headers });
  }

  // end here


  // Subject management code start from here

  setSubject(subjectName: string, imageUrl: string) {
    const url = 'https://rrohan.ktm.yetiappcloud.com/api/SubjectManagement/SetSubject';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': '*/*'
    });

    const body = {
      name: subjectName,
      imageUrl: imageUrl
    };

    return this.http.post(url, body, { headers });
  }

  updateSubject(newsubjectName: string, subjectId: string) {
    const url = 'https://rrohan.ktm.yetiappcloud.com/api/SubjectManagement/EditSubjectName';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': '*/*'
    });

    const body = {
      name: newsubjectName,
      subjectId: subjectId
    };

    return this.http.post(url, body, { headers });
  }
  
  deleteSubject(deletesubjectid: string) {
    const url = 'https://rrohan.ktm.yetiappcloud.com/api/SubjectManagement/DeleteSubject';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': '*/*'
    });

    const body = {
      subjectId: deletesubjectid
    };

    return this.http.post(url, body, { headers });
  }

  toggleSubject(togglesubjectId: string) {
    const url = 'https://rrohan.ktm.yetiappcloud.com/api/SubjectManagement/ToggleSubjectStatus';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': '*/*'
    });

    const body = {
      subjectId:togglesubjectId 
    };

    return this.http.post(url, body, { headers });
  }

// Notification  code here

SendMessage(title: string, body1: string, topic: string) {
    const url = 'https://rrohan.ktm.yetiappcloud.com/api/FCMNotification/SendMessage';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': '*/*'
    });

    const bodyhy= {
        title: title ,
        body: body1,
        topic: topic
    };

    return this.http.post(url, bodyhy, { headers });
  }
 

}



