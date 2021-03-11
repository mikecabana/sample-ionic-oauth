import { TestBed } from '@angular/core/testing';

import { NgHttpService } from './ng-http.service';

describe('NgHttpService', () => {
  let service: NgHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
