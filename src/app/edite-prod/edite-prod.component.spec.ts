import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeProdComponent } from './edite-prod.component';

describe('EditeProdComponent', () => {
  let component: EditeProdComponent;
  let fixture: ComponentFixture<EditeProdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditeProdComponent]
    });
    fixture = TestBed.createComponent(EditeProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
