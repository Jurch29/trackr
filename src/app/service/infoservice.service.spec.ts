import { TestBed, inject } from '@angular/core/testing';

import { InfoserviceService } from './infoservice.service';

describe('InfoserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InfoserviceService]
    });
  });

  it('should be created', inject([InfoserviceService], (service: InfoserviceService) => {
    expect(service).toBeTruthy();
  }));
});
