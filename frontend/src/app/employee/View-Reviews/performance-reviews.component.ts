import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field'; // For mat-form-field
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Review } from '../../models/review.model';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../../models/employee.model';
import { Router } from '@angular/router';
import { ReviewService } from '../../services/review.service';

@Component({
  selector: 'app-performance-reviews',
  standalone: true,
  imports: [MatFormFieldModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './performance-reviews.component.html',
  styleUrls: ['./performance-reviews.component.css'],
})
export class ViewReviewsComponent implements OnInit {
  reviews: Review[] = [];
  employees: Employee[] = [];
  filteredReviews: any[] = []; // Modified to hold reviews with names
  errorMessage: string = '';
  loggedInUserId: number = 2; // Assume this is the logged-in user's ID

  constructor(
    private http: HttpClient,
    private router: Router,
    private reviewService: ReviewService
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    // Fetch employees from the correct API endpoint
    this.http.get<Employee[]>('http://localhost:3000/api/employees').subscribe({
      next: (employees: Employee[]) => {
        this.employees = employees;

        // Fetch reviews for the logged-in user using the ReviewService
        this.reviewService
          .getReviewsByEmployeeId(this.loggedInUserId)
          .subscribe({
            next: (reviews) => {
              this.filteredReviews = reviews;
              this.mapReviewerAndRevieweeNames(); // Map reviewer and reviewee names after fetching reviews
            },
            error: (error) => {
              this.errorMessage = 'Failed to load reviews';
              console.error('Error fetching reviews:', error);
            },
          });
      },
      error: (error) => {
        this.errorMessage = 'Failed to load employees';
        console.error('Error fetching employees:', error);
      },
    });
  }

  // Method to map reviewer and reviewee names after fetching reviews
  mapReviewerAndRevieweeNames() {
    this.filteredReviews = this.filteredReviews.map((review) => {
      // Convert reviewerId and revieweeId to string for comparison
      const reviewerId = review.reviewerId.toString();
      const revieweeId = review.revieweeId.toString();

      const reviewer = this.employees.find((emp) => emp.id === reviewerId);
      const reviewee = this.employees.find((emp) => emp.id === revieweeId);

      return {
        ...review,
        reviewerName: reviewer ? reviewer.name : 'Unknown',
        revieweeName: reviewee ? reviewee.name : 'Unknown',
      };
    });
  }

  goToDashboard() {
    this.router.navigate(['/employee-dashboard']); // Adjust the path as needed
  }
}
