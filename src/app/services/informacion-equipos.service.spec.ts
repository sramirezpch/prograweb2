import { TestBed } from '@angular/core/testing';

import { InformacionEquiposService } from './informacion-equipos.service';

describe('InformacionEquiposService', () => {
  let service: InformacionEquiposService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InformacionEquiposService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
