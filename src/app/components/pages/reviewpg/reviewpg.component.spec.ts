import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewpgComponent } from './reviewpg.component';

describe('ReviewpgComponent', () => {
  let component: ReviewpgComponent;
  let fixture: ComponentFixture<ReviewpgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewpgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewpgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
