import { TestBed } from '@angular/core/testing';

import { HomeProtectionGuard } from './home-protection.guard';

describe('HomeProtectionGuard', () => {
  let guard: HomeProtectionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(HomeProtectionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
