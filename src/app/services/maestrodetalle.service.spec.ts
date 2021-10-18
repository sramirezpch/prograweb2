import { TestBed } from '@angular/core/testing';

import { MaestrodetalleService } from './maestrodetalle.service';

describe('MaestrodetalleService', () => {
  let service: MaestrodetalleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaestrodetalleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
