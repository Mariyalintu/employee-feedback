import { Component } from '@angular/core';
import { Router } from '@angular/router';
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

@Component({
  selector: 'app-login',
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
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string | undefined;
  password: string | undefined;
  role: string | undefined;

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    this.http.get<any[]>('http://localhost:3000/api/employees').subscribe(
      (employees) => {
        console.log('Fetched employees:', employees);
        console.log(
          'Input credentials:',
          this.username,
          this.password,
          this.role
        );

        const user = employees.find(
          (emp) =>
            emp.username === this.username &&
            emp.password === this.password &&
            emp.role === this.role
        );

        if (user) {
          console.log('User found:', user); // Log the matched user
          if (user.role === 'Admin') {
            this.router.navigate(['/admin-dashboard']);
          } else {
            this.router.navigate(['/employee-dashboard']);
          }
        } else {
          alert('Invalid credentials');
        }
      },
      (error) => {
        console.error('Error fetching employees:', error);
      }
    );
  }

  onRegister() {
    this.router.navigate(['/register']); // Navigate to the registration page
  }
}
