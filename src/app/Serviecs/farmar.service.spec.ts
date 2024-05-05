import { TestBed } from '@angular/core/testing';

import { FarmarService } from './farmar.service';

describe('FarmarService', () => {
  let service: FarmarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FarmarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
