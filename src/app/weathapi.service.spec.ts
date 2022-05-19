import { TestBed } from '@angular/core/testing';

import { WeathapiService } from './weathapi.service';

describe('WeathapiService', () => {
  let service: WeathapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeathapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
