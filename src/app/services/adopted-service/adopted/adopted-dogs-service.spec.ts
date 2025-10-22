import { TestBed } from '@angular/core/testing';
import { AdoptedDogsService } from './adopted-dogs-service';

describe('AdoptedDogsService', () => {
  let service: AdoptedDogsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdoptedDogsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
