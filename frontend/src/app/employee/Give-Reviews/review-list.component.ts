import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { AdminDashboardComponent } from '../../dashboard/admin-dashboard/admin-dashboard.component';
import { EmployeeDashboardComponent } from '../../dashboard/employee-dashboard/employee-dashboard.component';
import { MatIconModule } from '@angular/material/icon';
import { AssignReviewService } from '../../services/assign-review.service';
import { EmployeeService } from '../../services/employee.service';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-review-list',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatSidenavModule,
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule,
    MatListModule,
    MatIconModule,
    MatInputModule,
    CommonModule,
    RouterOutlet,
    RouterLink,
    AdminDashboardComponent,
    EmployeeDashboardComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css'],
})
export class ReviewListComponent implements OnInit {
  employees: any[] = [];
  selectedReviewerId: number | null = null;
  selectedRevieweeId: number | null = null;
  feedback: string = '';
  loggedInUserId: number = 1; // Assume this is the logged-in user's ID
  loggedInUserName: string = '';

  constructor(
    private assignReviewService: AssignReviewService,
    private employeeService: EmployeeService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(): void {
    this.employeeService.getEmployees().subscribe((data) => {
      this.employees = data;
      console.log('Employees fetched: ', this.employees);

      // Now that employees are fetched, set the loggedInUserName
      this.loggedInUserName = this.getEmployeeNameById(this.loggedInUserId);
      this.selectedReviewerId = this.loggedInUserId; // Set the selected reviewer to the logged-in user
    });
  }

  getEmployeeNameById(id: number): string {
    const employee = this.employees.find((emp) => emp.id === id);
    return employee ? employee.name : 'Unknown';
  }

  assignReview(): void {
    console.log('Reviewer ID:', this.selectedReviewerId);
    console.log('Reviewee ID:', this.selectedRevieweeId);
    console.log('Feedback:', this.feedback);

    if (this.selectedReviewerId && this.selectedRevieweeId && this.feedback) {
      this.assignReviewService
        .assignReview(
          this.selectedReviewerId,
          this.selectedRevieweeId,
          this.feedback
        )
        .subscribe(() => {
          console.log(
            `Review assigned from Employee ${this.selectedReviewerId} to Employee ${this.selectedRevieweeId} with feedback: "${this.feedback}"`
          );
          this.resetForm();
        });
    } else {
      console.log('Reviewee must be selected, and feedback is required.');
    }
  }

  resetForm(): void {
    this.selectedRevieweeId = null;
    this.feedback = '';
  }

  goToDashboard() {
    this.router.navigate(['/employee-dashboard']); // Adjust the path as needed
  }
}
