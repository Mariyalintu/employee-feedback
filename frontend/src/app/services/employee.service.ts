import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Employee } from '../models/employee.model';
import { Review } from '../models/review.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private apiUrl = 'http://localhost:3000/api/employees'; // Base URL for employees
  private reviewsApiUrl = 'http://localhost:3000/api/reviews'; // Base URL for reviews

  constructor(private http: HttpClient) {}

  // Employee Operations
  getEmployees(): Observable<Employee[]> {
    console.log('Fetching employees...');
    return this.http
      .get<Employee[]>(this.apiUrl) // Use the correct URL for employees
      .pipe(catchError(this.handleError));
  }

  addEmployee(employee: Employee): Observable<Employee> {
    console.log('Adding employee:', employee);
    return this.http
      .post<Employee>(this.apiUrl, employee) // Use the correct URL for adding employees
      .pipe(catchError(this.handleError));
  }

  deleteEmployee(id: number): Observable<void> {
    console.log('Deleting employee with id:', id);
    return this.http
      .delete<void>(`${this.apiUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  // Review Operations
  getReviews(): Observable<Review[]> {
    console.log('Fetching reviews...');
    return this.http
      .get<Review[]>(this.reviewsApiUrl)
      .pipe(catchError(this.handleError));
  }

  addReview(review: Review): Observable<Review> {
    console.log('Adding review:', review);
    return this.http
      .post<Review>(this.reviewsApiUrl, review)
      .pipe(catchError(this.handleError));
  }

  updateReview(id: number, review: Review): Observable<Review> {
    console.log('Updating review with id:', review.id);
    return this.http
      .put<Review>(`${this.reviewsApiUrl}/${id}`, review)
      .pipe(catchError(this.handleError));
  }

  deleteReview(id: number): Observable<void> {
    console.log('Deleting review with id:', id);
    return this.http
      .delete<void>(`${this.reviewsApiUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'Something went wrong; please try again later.';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error('An error occurred:', errorMessage);
    return throwError(errorMessage);
  }
}
