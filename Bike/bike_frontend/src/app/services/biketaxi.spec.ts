import { TestBed } from '@angular/core/testing';

import { Biketaxi } from './biketaxi';

describe('Biketaxi', () => {
  let service: Biketaxi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Biketaxi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
