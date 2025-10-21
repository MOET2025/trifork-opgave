import { TestBed } from '@angular/core/testing';

import { FavouriteDogsService } from './favourite-dogs-service';

describe('FavouriteDogsService', () => {
  let service: FavouriteDogsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavouriteDogsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
