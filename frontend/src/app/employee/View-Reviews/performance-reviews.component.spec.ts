import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewReviewsComponent} from './performance-reviews.component';

describe('PerformanceReviewsComponent', () => {
  let component: ViewReviewsComponent;
  let fixture: ComponentFixture<ViewReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewReviewsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
