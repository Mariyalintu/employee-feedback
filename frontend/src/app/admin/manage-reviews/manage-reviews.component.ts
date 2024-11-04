import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../../services/review.service';
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
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-reviews',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
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
  templateUrl: './manage-reviews.component.html',
  styleUrls: ['./manage-reviews.component.css'],
})
export class ManageReviewsComponent implements OnInit {
  reviews: any[] = [];

  constructor(private reviewService: ReviewService  , private router: Router) {}

  ngOnInit(): void {
    this.getReviews();
  }

  getReviews(): void {
    this.reviewService.getReviews().subscribe({
      next: (data) => {
        this.reviews = data;
        console.log('Reviews fetched: ', this.reviews);
      },
      error: (err) => {
        console.error('Error fetching reviews:', err);
        alert('Error fetching reviews. Please try again.'); // Alert on error
      },
    });
  }

  deleteReview(id: number): void {
    this.reviewService.deleteReview(id).subscribe({
      next: () => {
        this.reviews = this.reviews.filter(review => review.id !== id);
        console.log('Review deleted with id: ', id);
        alert(`Review with ID ${id} deleted successfully!`); // Alert on successful deletion
      },
      error: (err) => {
        console.error('Error deleting review:', err);
        alert('Error deleting review. Please try again.'); // Alert on error
      },
    });
  }
  goToDashboard() {
    this.router.navigate(['/admin-dashboard']); // Adjust the path as needed
  }


}
