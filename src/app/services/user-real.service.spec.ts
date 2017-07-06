import { TestBed, inject } from '@angular/core/testing';

import { UserRealService } from './user-real.service';

describe('UserRealService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserRealService]
    });
  });

  it('should be created', inject([UserRealService], (service: UserRealService) => {
    expect(service).toBeTruthy();
  }));
});
