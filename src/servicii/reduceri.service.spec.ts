import { TestBed } from '@angular/core/testing';

import { ReduceriService } from './reduceri.service';

describe('ReduceriService', () => {
  let service: ReduceriService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReduceriService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
