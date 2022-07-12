import { TestBed, inject } from '@angular/core/testing';

import { RaclageService } from './raclage.service';

describe('RaclageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RaclageService]
    });
  });

  it('should be created', inject([RaclageService], (service: RaclageService) => {
    expect(service).toBeTruthy();
  }));
});
