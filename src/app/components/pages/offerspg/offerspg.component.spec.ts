import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferspgComponent } from './offerspg.component';

describe('OfferspgComponent', () => {
  let component: OfferspgComponent;
  let fixture: ComponentFixture<OfferspgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferspgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfferspgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
