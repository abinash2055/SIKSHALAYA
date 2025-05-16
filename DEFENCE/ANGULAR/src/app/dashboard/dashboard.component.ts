import { Component, OnInit } from '@angular/core';
import{DashboardManagementService} from './dashboardmanagementservice';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent  implements OnInit{
  

  recentActivity: any[] = [];
  totalCourses: number = 0;
  totalUsers: number = 0;

  constructor(private dashboardmanagementservice: DashboardManagementService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.dashboardmanagementservice.getRecentActivity().subscribe(
      (response) => {
        this.recentActivity = response;
      },
      (error) => {
        console.error('Failed to fetch recent activity:', error);
      }
    );

    this.dashboardmanagementservice.getTotalCourses().subscribe(
      (response) => {
        this.totalCourses = response.totalCourses;
      },
      (error) => {
        console.error('Failed to fetch total courses:', error);
      }
    );

    this.dashboardmanagementservice.getTotalUsers().subscribe(
      (response) => {
        this.totalUsers = response.totalUsers;
      },
      (error) => {
        console.error('Failed to fetch total users:', error);
      }
    );
  }

}
