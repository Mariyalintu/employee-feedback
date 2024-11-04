import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Review } from '../models/review.model';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  private apiUrl = 'http://localhost:3000/api/reviews';

  constructor(private http: HttpClient) {}

  getReviewsByEmployeeId(employeeId: number): Observable<any[]> {
    return this.http
      .get<Review[]>(this.apiUrl)
      .pipe(
        map((reviews: any[]) =>
          reviews.filter(
            (review: { revieweeId: number }) => review.revieweeId === employeeId
          )
        )
      );
  }
  getReviews(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  deleteReview(id: number): Observable<void> {
    console.log('Deleting review with id:', id);
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
