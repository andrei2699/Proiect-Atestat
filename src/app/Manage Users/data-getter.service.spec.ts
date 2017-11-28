import { TestBed, inject } from '@angular/core/testing';

import { DataGetterService } from './data-getter.service';

describe('DataGetterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataGetterService]
    });
  });

  it('should be created', inject([DataGetterService], (service: DataGetterService) => {
    expect(service).toBeTruthy();
  }));
});
