import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

import { CafeListComponent } from './cafe-list.component';
import { CafeService } from '../cafe.service';
import { Cafe } from '../cafe';

describe('CafeListComponent', () => {
  let component: CafeListComponent;
  let fixture: ComponentFixture<CafeListComponent>;
  let service: CafeService;

  const dummyCafes: Cafe[] = [
    { id: 1, nombre: 'Café Especial para ti', tipo: 'Blend', region: 'Cajamarca, Tolima' },
    { id: 2, nombre: 'Café Especial Navegante', tipo: 'Café de Origen', region: 'Calarca, Quindio' },
    { id: 3, nombre: 'Café Especial El Prístino', tipo: 'Blend', region: 'Abejorral, Antioquia' }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CafeListComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [ CafeService ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CafeListComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(CafeService);
    spyOn(service, 'getCafes').and.returnValue(of(dummyCafes));
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería crear una tabla con tres filas más el encabezado', () => {
    const tableRows = fixture.debugElement.queryAll(By.css('.table tbody tr'));
    expect(tableRows.length).toBe(3);
  });

  it('debería crear una tabla con un encabezado y tres filas de datos', () => {
    const headerRow = fixture.debugElement.queryAll(By.css('.table thead tr'));
    expect(headerRow.length).toBe(1);
    const dataRows = fixture.debugElement.queryAll(By.css('.table tbody tr'));
    expect(dataRows.length).toBe(3);
  });
});
