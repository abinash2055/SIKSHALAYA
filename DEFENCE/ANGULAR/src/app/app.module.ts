import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
// import { MatSidenavModule } from '@angular/material/sidenav';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatMenuModule } from '@angular/material/menu';
// import { MatIconModule } from '@angular/material/icon';
// import { MatDividerModule } from '@angular/material/divider';
// import { MatListModule } from '@angular/material/list';
import { CategoryManagementComponent } from './category-management/category-management.component';
import { SubjectManagementComponent } from './subject-management/subject-management.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { RegisterstudentComponent } from './registerstudent/registerstudent.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { UpdatestudentsubcourseComponent } from './edit-student/updatestudentsubcourse/updatestudentsubcourse.component';
import { CollegeManagementComponent } from './college-management/college-management.component';
import { DiscussionManagementComponent } from './discussion-management/discussion-management.component';
import { NoteManagementComponent } from './note-management/note-management.component';
import { NoticeBoardManagementComponent } from './notice-board-management/notice-board-management.component';
import { QuoteManagementComponent } from './quote-management/quote-management.component';
import { TestManagementComponent } from './test-management/test-management.component';
import { TopicManagementComponent } from './topic-management/topic-management.component';
import { UserNoteManagementComponent } from './user-note-management/user-note-management.component';
import { ChapterTestComponent } from './chapter-test/chapter-test.component';
import { FCMNotificationComponent } from './fcmnotification/fcmnotification.component';
import { VideoUploadByAdminComponent } from './video-upload-by-admin/video-upload-by-admin.component';
import { GetUserComponent } from './user-management/get-user/get-user.component';
import { StudentDetailsComponent } from './user-management/student-details/student-details.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import{CardModule} from 'primeng/card';
import{ButtonModule} from 'primeng/button';
import{ToastModule} from 'primeng/toast';
import{MessageService} from 'primeng/api';
// import { EnvironmentsComponent } from './environments/environments.component';










@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    HomeComponent,
    CategoryManagementComponent,
    SubjectManagementComponent,
    UserManagementComponent,
    RegisterstudentComponent,
    EditStudentComponent,
    UpdatestudentsubcourseComponent,
    CollegeManagementComponent,
    DiscussionManagementComponent,
    NoteManagementComponent,
    NoticeBoardManagementComponent,
    QuoteManagementComponent,
    TestManagementComponent,
    TopicManagementComponent,
    UserNoteManagementComponent,
    ChapterTestComponent,
    FCMNotificationComponent,
    VideoUploadByAdminComponent,
    GetUserComponent,
    StudentDetailsComponent,
    LoginComponent,
   RegisterComponent,
   

    
  
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    // MatSidenavModule,
    // MatToolbarModule,
    // MatMenuModule,
    // MatIconModule,
    // MatDividerModule,
    // MatListModule,
    SidenavComponent,
    CardModule,
    ButtonModule,
    ToastModule,
    SidenavComponent
    
  
   
   
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
