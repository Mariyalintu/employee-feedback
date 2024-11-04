import { Component, OnInit } from '@angular/core';
import { AssignReviewService } from '../../services/assign-review.service';
import { EmployeeService } from '../../services/employee.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assign-reviews',
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
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './assign-reviews.component.html',
  styleUrls: ['./assign-reviews.component.css'],
})
export class AssignReviewsComponent implements OnInit {
  employees: any[] = [];
  selectedReviewerId: number | null = null;
  selectedRevieweeId: number | null = null;
  feedback: string = ''; // New property for feedback

  constructor(private assignReviewService: AssignReviewService, private employeeService: EmployeeService , private router: Router) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(): void {
    this.employeeService.getEmployees().subscribe(data => {
      this.employees = data;
      console.log('Employees fetched: ', this.employees);
    });
  }

  assignReview(): void {
    if (this.selectedReviewerId && this.selectedRevieweeId && this.feedback) { // Check for feedback
      this.assignReviewService.assignReview(this.selectedReviewerId, this.selectedRevieweeId, this.feedback).subscribe({
        next: () => {
          console.log(`Review assigned from Employee ${this.selectedReviewerId} to Employee ${this.selectedRevieweeId} with feedback: "${this.feedback}"`);
          alert(`Review assigned successfully from Employee ${this.selectedReviewerId} to Employee ${this.selectedRevieweeId}!`); // Alert on success
          this.resetForm();
        },
        error: (err) => {
          console.error('Error assigning review:', err);
          alert('Error assigning review. Please try again.'); // Alert on error
        },
      });
    } else {
      alert('Both Reviewer and Reviewee must be selected, and feedback is required.'); // Alert for validation failure
      console.log('Both Reviewer and Reviewee must be selected, and feedback is required.');
    }
  }

  resetForm(): void {
    this.selectedReviewerId = null;
    this.selectedRevieweeId = null;
    this.feedback = ''; // Reset feedback
  }
  
  goToDashboard() {
    this.router.navigate(['/admin-dashboard']); // Adjust the path as needed
  }


}
