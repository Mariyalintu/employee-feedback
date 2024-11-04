import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { Employee } from '../models/employee.model';
import { EmployeeService } from '../services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
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
    ReactiveFormsModule
  ],
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  newEmployee: Employee = { id: 0, name: '', role: '', username: '', password: '' };

  constructor(private employeeService: EmployeeService   ,  private router: Router) {}

  registerEmployee() {
    // Set id to undefined so JSON Server can generate it
    this.newEmployee.id = undefined;

    this.employeeService.addEmployee(this.newEmployee).subscribe(
      (response) => {
        console.log('Employee added:', response);
        alert('Registration successful!'); // Optional: Show success message
        this.router.navigate(['/login']); // Navigate to the login page after successful registration

      },
      (error) => {
        console.error('Error adding employee:', error);
        alert('Error adding employee. Please try again.'); // Optional: Show error message
      }
    );
  }
}
