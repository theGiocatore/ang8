import { TestBed } from '@angular/core/testing';

import { AutentifikacijaService } from './autentifikacija.service';

describe('AutentifikacijaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AutentifikacijaService = TestBed.get(AutentifikacijaService);
    expect(service).toBeTruthy();
  });
});
