import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CafeService } from './cafe.service';
import { Cafe } from './cafe';
import { environment } from '../../environments/environment';

describe('CafeService', () => {
  let service: CafeService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CafeService]
    });
    service = TestBed.inject(CafeService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('debería crearse el servicio', () => {
    expect(service).toBeTruthy();
  });

  it('debería retornar un Observable de Cafe[] desde getCafes()', () => {
    const dummyCafes: Cafe[] = [
      { id: 1, nombre: 'Café Especial para ti', tipo: 'Blend', region: 'Angelópolis, Antioquia' },
      { id: 2, nombre: 'Café Especial Navegante', tipo: 'Café de Origen', region: 'Guatapé, Antioquia' }
    ];

    service.getCafes().subscribe(cafes => {
      expect(cafes.length).toBe(2);
      expect(cafes).toEqual(dummyCafes);
    });

    const req = httpMock.expectOne(`${environment.baseUrl}`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyCafes);
  });
});
