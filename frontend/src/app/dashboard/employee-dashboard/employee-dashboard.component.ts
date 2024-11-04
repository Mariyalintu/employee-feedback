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
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterOutlet } from '@angular/router';
import { ReviewListComponent } from '../../employee/Give-Reviews/review-list.component';
import { ViewReviewsComponent } from '../../employee/View-Reviews/performance-reviews.component';

@Component({
  selector: 'app-employee-dashboard',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    CommonModule,
    ReviewListComponent,
    ViewReviewsComponent,
    FormsModule,
    RouterOutlet,
    ReactiveFormsModule,
  ],
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css'],
})
export class EmployeeDashboardComponent {
  isAdmin: boolean = false; // Set this based on the user's role

  // Inject Router service
  constructor(private router: Router) {}

  // Method to navigate to the "view-reviews" page
  navigateToReviews() {
    this.router.navigate(['/view-reviews']);
  }

  // Method to navigate to the "performance-reviews" page
  navigateToPerformanceReviews() {
    this.router.navigate(['/performance-reviews']);
  }
  logout() {
    // Implement your logout logic here (e.g., clearing tokens, user data)
    // Then navigate to the login page
    this.router.navigate(['/login']); // 
}}
