import { TestBed } from '@angular/core/testing';

import { DogImage } from './dog-image';

describe('DogImage', () => {
  let service: DogImage;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DogImage);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
