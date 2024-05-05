import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmarComponent } from './farmar.component';

describe('FarmarComponent', () => {
  let component: FarmarComponent;
  let fixture: ComponentFixture<FarmarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FarmarComponent]
    });
    fixture = TestBed.createComponent(FarmarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
