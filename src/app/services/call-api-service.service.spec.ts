import { TestBed } from '@angular/core/testing';

import { CallApiServiceService } from './call-api-service.service';

describe('CallApiServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CallApiServiceService = TestBed.get(CallApiServiceService);
    expect(service).toBeTruthy();
  });
});
