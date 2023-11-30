import { TestBed } from '@angular/core/testing';

import { LoadBoardsService } from './load-boards.service';

describe('LoadBoardsService', () => {
  let service: LoadBoardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadBoardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
