import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { ViewReviewsComponent } from '../employee/View-Reviews/performance-reviews.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatSidenavModule,
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    CommonModule,
    RouterOutlet,
    RouterLink,
    AdminDashboardComponent,
    EmployeeDashboardComponent,
    FormsModule,
    ReactiveFormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  isAdmin: boolean = false; // Change this based on your authentication logic

  constructor() {
    // Example logic to set isAdmin, you can replace this with actual auth logic
    const userRole = localStorage.getItem('userRole'); // Assuming you're storing user role in localStorage
    this.isAdmin = userRole === 'admin';
  }

}
