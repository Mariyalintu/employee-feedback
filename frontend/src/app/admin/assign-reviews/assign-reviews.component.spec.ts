import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignReviewsComponent } from './assign-reviews.component';

describe('AssignReviewsComponent', () => {
  let component: AssignReviewsComponent;
  let fixture: ComponentFixture<AssignReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignReviewsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
