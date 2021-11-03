import { TestBed } from '@angular/core/testing';

import { ManageFilesServiceService } from './manage-files-service.service';

describe('ManageFilesServiceService', () => {
  let service: ManageFilesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageFilesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
