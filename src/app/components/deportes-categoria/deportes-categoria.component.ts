import { Component, OnInit } from '@angular/core';
import { Deporte } from 'src/app/entities/deporte';
import { CategoriasDeportesService } from 'src/app/services/categorias-deportes.service';

@Component({
  selector: 'app-deportes-categoria',
  templateUrl: './deportes-categoria.component.html',
  styleUrls: ['./deportes-categoria.component.css']
})
export class DeportesCategoriaComponent implements OnInit {
  deportes: Deporte[];
  currentSport: Deporte;
  constructor(private readonly deportesService: CategoriasDeportesService) {
    this.deportes = [
      {
        nombre: 'Futbol',
        campeon: 'Lionel Messi'
      },
      {
        nombre: 'Natacion',
        campeon: 'desconocido'
      },
      {
        nombre: 'Tenis',
        campeon: 'Rafael Nadal'
      }
    ]
  }

  ngOnInit(): void {
    this.deportesService.mostrarDeportes();
  }

  seleccionarDeporte(deporte: Deporte) {
    this.currentSport = deporte;
  }
}
