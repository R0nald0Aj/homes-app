import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseLocationComponent } from './house-location.component';

describe('HouseLocationComponent', () => {
  let component: HouseLocationComponent;
  let fixture: ComponentFixture<HouseLocationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HouseLocationComponent]
    });
    fixture = TestBed.createComponent(HouseLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
