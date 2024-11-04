import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// Angular Material Modules
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import {  MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';

// Services
import { EmployeeService } from './services/employee.service';
import { ReviewService } from './services/review.service';
import { AssignReviewService } from './services/assign-review.service';

// Components
import { AssignReviewsComponent } from './admin/assign-reviews/assign-reviews.component';
import { ManageEmployeesComponent } from './admin/manage-employees/manage-employees.component';
import { ManageReviewsComponent } from './admin/manage-reviews/manage-reviews.component';
import { AdminDashboardComponent } from './dashboard/admin-dashboard/admin-dashboard.component';
import { EmployeeDashboardComponent } from './dashboard/employee-dashboard/employee-dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routes';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthService } from './auth.service';
import { ViewReviewsComponent } from './employee/View-Reviews/performance-reviews.component';
import { ReviewListComponent } from './employee/Give-Reviews/review-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ManageEmployeesComponent,
    AdminDashboardComponent,
    ViewReviewsComponent,
    DashboardComponent,
    EmployeeDashboardComponent,
    RegistrationComponent,
    LoginComponent,
    ReviewListComponent,
    ManageReviewsComponent,
    AssignReviewsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatButtonModule,
    MatSidenavModule,
    NgModule,
    MatToolbarModule,
    MatSelectModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [EmployeeService, ReviewService, AssignReviewService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
