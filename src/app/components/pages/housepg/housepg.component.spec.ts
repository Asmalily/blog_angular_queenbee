import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousepgComponent } from './housepg.component';

describe('HousepgComponent', () => {
  let component: HousepgComponent;
  let fixture: ComponentFixture<HousepgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HousepgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HousepgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
