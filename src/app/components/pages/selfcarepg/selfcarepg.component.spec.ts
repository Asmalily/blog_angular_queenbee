import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfcarepgComponent } from './selfcarepg.component';

describe('SelfcarepgComponent', () => {
  let component: SelfcarepgComponent;
  let fixture: ComponentFixture<SelfcarepgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelfcarepgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelfcarepgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
