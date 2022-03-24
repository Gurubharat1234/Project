import { TestBed } from '@angular/core/testing';

import { VentoServiceService } from './vento-service.service';

describe('VentoServiceService', () => {
  let service: VentoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VentoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
