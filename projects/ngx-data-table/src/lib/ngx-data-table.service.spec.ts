import { TestBed } from '@angular/core/testing';

import { NgxDataTableService } from './ngx-data-table.service';

describe('NgxDataTableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxDataTableService = TestBed.get(NgxDataTableService);
    expect(service).toBeTruthy();
  });
});
