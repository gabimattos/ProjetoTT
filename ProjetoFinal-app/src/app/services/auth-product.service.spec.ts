import { TestBed } from '@angular/core/testing';

import { AuthProductService } from './auth-product.service';

describe('AuthProductService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthProductService = TestBed.get(AuthProductService);
    expect(service).toBeTruthy();
  });
});
