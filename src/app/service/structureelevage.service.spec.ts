import { TestBed, inject } from '@angular/core/testing';

import { StructureelevageService } from './structureelevage.service';

describe('StructureelevageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StructureelevageService]
    });
  });

  it('should be created', inject([StructureelevageService], (service: StructureelevageService) => {
    expect(service).toBeTruthy();
  }));
});
