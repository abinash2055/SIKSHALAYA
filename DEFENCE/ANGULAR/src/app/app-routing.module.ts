import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoryManagementComponent } from './category-management/category-management.component';
import { SubjectManagementComponent } from './subject-management/subject-management.component';
import { UserManagementComponent } from './user-management/user-management.component';
import {RegisterstudentComponent} from './registerstudent/registerstudent.component';
import {EditStudentComponent} from './edit-student/edit-student.component';
import {UpdatestudentsubcourseComponent} from './edit-student/updatestudentsubcourse/updatestudentsubcourse.component';
import {ChapterTestComponent} from './chapter-test/chapter-test.component';
import {CollegeManagementComponent} from './college-management/college-management.component';
import {DiscussionManagementComponent} from './discussion-management/discussion-management.component';
import {NoteManagementComponent} from './note-management/note-management.component';
import {NoticeBoardManagementComponent} from './notice-board-management/notice-board-management.component';
import {QuoteManagementComponent} from './quote-management/quote-management.component';
import {TestManagementComponent} from './test-management/test-management.component';
import {TopicManagementComponent} from './topic-management/topic-management.component';
import {FCMNotificationComponent} from './fcmnotification/fcmnotification.component';
import{VideoUploadByAdminComponent}from './video-upload-by-admin/video-upload-by-admin.component';
import{GetUserComponent} from './user-management/get-user/get-user.component';
import{StudentDetailsComponent} from './user-management/student-details/student-details.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { authGuard } from './components/guarda/auth.guard';




const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'dashboard', component: DashboardComponent},
  {path: 'category', component: CategoryManagementComponent},  
  {path: 'subject', component: SubjectManagementComponent},  
  {path: 'user', component: UserManagementComponent},  
  {path:'subcourse', component:UpdatestudentsubcourseComponent},
  {path: 'registerstudent', component:RegisterstudentComponent},
  {path: 'editstudent', component:EditStudentComponent},
  {path: 'college', component: CollegeManagementComponent},
  {path: 'discussion', component:DiscussionManagementComponent},
  {path: 'note', component: NoteManagementComponent},
  {path: 'noticeBoard', component: NoticeBoardManagementComponent},
  {path: 'quote', component:QuoteManagementComponent},
  {path: 'test', component:TestManagementComponent},
  {path: 'topic', component:TopicManagementComponent},
  {path: 'vdoadmin', component:VideoUploadByAdminComponent},
  {path: 'notification', component:FCMNotificationComponent},
  {path: 'getuser', component:GetUserComponent},
  {path: 'getuser/studentDetails/:id', component:StudentDetailsComponent},
  { path: 'login', component:LoginComponent},
  { path: 'register', component:RegisterComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
