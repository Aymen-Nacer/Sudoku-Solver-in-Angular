import { TestBed } from '@angular/core/testing';

import { DrawBoardService } from './draw-board.service';

describe('DrawBoardService', () => {
  let service: DrawBoardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrawBoardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
