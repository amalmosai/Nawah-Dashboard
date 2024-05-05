import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFarmerToEngineerComponent } from './add-farmer-to-engineer.component';

describe('AddFarmerToEngineerComponent', () => {
  let component: AddFarmerToEngineerComponent;
  let fixture: ComponentFixture<AddFarmerToEngineerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddFarmerToEngineerComponent]
    });
    fixture = TestBed.createComponent(AddFarmerToEngineerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
