import { TestBed } from '@angular/core/testing';

import { CategoriasDeportesService } from './categorias-deportes.service';

describe('CategoriasDeportesService', () => {
  let service: CategoriasDeportesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriasDeportesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
