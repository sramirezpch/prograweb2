import { Component, OnInit } from '@angular/core';
import { Campeon2 } from 'src/app/entities/campeon2';
import { CAMPEONES } from 'src/app/entities/campeones';
import { Deporte2 } from 'src/app/entities/deporte2';
import { MaestrodetalleService } from 'src/app/services/maestrodetalle.service';
@Component({
  selector: 'app-maestro-detalle',
  templateUrl: './maestro-detalle.component.html',
  styleUrls: ['./maestro-detalle.component.css']
})
export class MaestroDetalleComponent implements OnInit {
  deportes: Deporte2[];
  currentSport: Deporte2;
  champions: any[];
  championsStatic = [];

  constructor(private readonly maestrodetalleService: MaestrodetalleService) { }

  ngOnInit(): void {
    this.deportes = [
      {
        nombre: 'Tiro al Arco',
        descripcion: 'El tiro al vuelo puede realizarse donde exista espacio suficiente, tal como un aeródromo u otra gran instalación, preferentemente vallada',
      },
      {
        nombre: 'Atletismo',
        descripcion: 'El atletismo es considerado el deporte organizado más antiguo del mundo',
      },
      {
        nombre: 'Ciclismo',
        descripcion: 'El ciclismo de competición es un deporte en el que se utilizan distintos tipos de bicicletas',
      },
    ];
    this.champions = CAMPEONES;
    this.championsStatic = this.champions;
  }

  selectSport(deporte: Deporte2): void {
    this.currentSport = deporte;
    console.log(deporte.nombre);
    this.champions = this.championsStatic.filter(champion => champion.deporte === deporte.nombre)
    // this.maestrodetalleService.getChampions(this.currentSport._id).subscribe(items => this.champions = items);
  }

}
