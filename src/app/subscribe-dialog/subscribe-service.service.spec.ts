import { TestBed } from '@angular/core/testing';

import { SubscribeService } from './subscribe-service.service';

describe('SubscribeServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubscribeService = TestBed.get(SubscribeService);
    expect(service).toBeTruthy();
  });
});
