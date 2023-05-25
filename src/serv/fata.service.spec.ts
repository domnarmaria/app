import { TestBed } from '@angular/core/testing';

import { FataService } from './fata.service';

describe('FataService', () => {
  let service: FataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
