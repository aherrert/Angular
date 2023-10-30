import { TestBed } from '@angular/core/testing';

import { TrueTechService } from './true-tech.service';

describe('TrueTechService', () => {
  let service: TrueTechService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrueTechService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
