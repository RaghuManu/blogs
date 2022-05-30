import { TestBed } from '@angular/core/testing';

import { SharedService } from './shared-services.service';

describe('SharedServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SharedService = TestBed.get(SharedService);
    expect(service).toBeTruthy();
  });
});
