import { Component, OnInit } from '@angular/core';
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
import { MatTableModule } from '@angular/material/table';
import { Employee } from '../../models/employee.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-employees',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatCardModule,
    MatSelectModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './manage-employees.component.html',
  styleUrls: ['./manage-employees.component.css'],
})
export class ManageEmployeesComponent implements OnInit {
  employees: Employee[] = [];
  newEmployee: Employee = { id: undefined, name: '', role: '', username: '', password: '' }; // Use undefined for id

  constructor(private employeeService: EmployeeService  , private router: Router) {}

  ngOnInit(): void {
    this.fetchEmployees();
  }

  fetchEmployees(): void {
    this.employeeService.getEmployees().subscribe({
      next: (data) => {
        this.employees = data;
        console.log('Fetched employees:', this.employees);
      },
      error: (err) => {
        console.error('Error fetching employees:', err);
        alert('Error fetching employees. Please try again.'); // Alert on error
      },
    });
  }

  addEmployee(): void {
    // Set id to undefined to let JSON Server generate it
    this.newEmployee.id = undefined; // You can actually omit this line since it defaults to undefined

    this.employeeService.addEmployee(this.newEmployee).subscribe({
      next: (employee) => {
        this.employees.push(employee);
        // Reset form
        this.newEmployee = { id: undefined, name: '', role: '', username: '', password: '' };
        console.log('Employee added:', employee);
        alert('Employee added successfully!'); // Alert on success
      },
      error: (err) => {
        console.error('Error adding employee:', err);
        alert('Error adding employee. Please try again.'); // Alert on error
      },
    });
  }

  deleteEmployee(id: number): void {
    this.employeeService.deleteEmployee(id).subscribe({
      next: () => {
        this.employees = this.employees.filter(emp => emp.id !== id);
        console.log('Employee deleted:', id);
        alert('Employee deleted successfully!'); // Alert on success
      },
      error: (err) => {
        console.error('Error deleting employee:', err);
        alert('Error deleting employee. Please try again.'); // Alert on error
      },
    });
  }
  goToDashboard() {
    this.router.navigate(['/admin-dashboard']); // Adjust the path as needed
  }


}
