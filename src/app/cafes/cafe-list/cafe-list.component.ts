import { Component, OnInit } from '@angular/core';
import { Cafe } from '../cafe';
import { CafeService } from '../cafe.service';

@Component({
  selector: 'app-cafe-list',
  templateUrl: './cafe-list.component.html',
  styleUrls: ['./cafe-list.component.css']
})
export class CafeListComponent implements OnInit {
  cafes: Cafe[] = [];
  totalCafeDeOrigen: number = 0;
  totalCafeBlend: number = 0;

  constructor(private cafeService: CafeService) {}

  ngOnInit() {
    this.cargarCafes();
  }

  cargarCafes(): void {
    this.cafeService.getCafes().subscribe(
      (cafesDesdeApi) => {
        this.cafes = cafesDesdeApi;
        this.totalCafeDeOrigen = cafesDesdeApi.filter(cafe => cafe.tipo === 'Café de Origen').length;
        this.totalCafeBlend = cafesDesdeApi.filter(cafe => cafe.tipo === 'Blend').length;
      },
      (error) => {
        console.error('Error al obtener los cafés', error);
      }
    );
  }
}
