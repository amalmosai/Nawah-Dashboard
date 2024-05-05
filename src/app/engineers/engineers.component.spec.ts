import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineersComponent } from './engineers.component';

describe('EngineersComponent', () => {
  let component: EngineersComponent;
  let fixture: ComponentFixture<EngineersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EngineersComponent]
    });
    fixture = TestBed.createComponent(EngineersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
