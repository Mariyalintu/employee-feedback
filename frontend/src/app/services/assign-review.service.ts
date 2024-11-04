import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssignReviewService {

  private apiUrl = 'http://localhost:3000/reviews';

  constructor(private http: HttpClient) {}

  // Update the method to accept feedback
  assignReview(reviewerId: number, revieweeId: number, feedback: string): Observable<any> {
    const review = { reviewerId, revieweeId, feedback }; // Include feedback in the review object
    console.log('Assigning review:', review);
    return this.http.post<any>(this.apiUrl, review);
  }
}
