import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFarmarComponent } from './add-farmar.component';

describe('AddFarmarComponent', () => {
  let component: AddFarmarComponent;
  let fixture: ComponentFixture<AddFarmarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddFarmarComponent]
    });
    fixture = TestBed.createComponent(AddFarmarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
