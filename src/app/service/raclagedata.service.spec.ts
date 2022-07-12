import { TestBed, inject } from '@angular/core/testing';

import { RaclagedataService } from './raclagedata.service';

describe('RaclagedataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RaclagedataService]
    });
  });

  it('should be created', inject([RaclagedataService], (service: RaclagedataService) => {
    expect(service).toBeTruthy();
  }));
});
