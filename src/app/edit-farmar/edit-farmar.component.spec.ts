import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFarmarComponent } from './edit-farmar.component';

describe('EditFarmarComponent', () => {
  let component: EditFarmarComponent;
  let fixture: ComponentFixture<EditFarmarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditFarmarComponent]
    });
    fixture = TestBed.createComponent(EditFarmarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
