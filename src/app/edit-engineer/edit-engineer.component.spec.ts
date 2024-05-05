import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEngineerComponent } from './edit-engineer.component';

describe('EditEngineerComponent', () => {
  let component: EditEngineerComponent;
  let fixture: ComponentFixture<EditEngineerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditEngineerComponent]
    });
    fixture = TestBed.createComponent(EditEngineerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
