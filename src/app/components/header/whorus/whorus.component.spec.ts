import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhorusComponent } from './whorus.component';

describe('WhorusComponent', () => {
  let component: WhorusComponent;
  let fixture: ComponentFixture<WhorusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhorusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhorusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
