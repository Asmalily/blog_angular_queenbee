import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodpgComponent } from './foodpg.component';

describe('FoodpgComponent', () => {
  let component: FoodpgComponent;
  let fixture: ComponentFixture<FoodpgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodpgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodpgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
