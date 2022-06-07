import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedMoreComponent } from './red-more.component';

describe('RedMoreComponent', () => {
  let component: RedMoreComponent;
  let fixture: ComponentFixture<RedMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedMoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
