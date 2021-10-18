import { Component, OnInit } from '@angular/core';
import { Campeon2 } from 'src/app/entities/campeon2';
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
  champions: Campeon2[];

  constructor(private readonly maestrodetalleService: MaestrodetalleService) { }

  ngOnInit(): void {
    this.maestrodetalleService.getSports().subscribe(items => this.deportes = items);
  }

  selectSport(deporte: Deporte2): void {
    this.currentSport = deporte;
    this.maestrodetalleService.getChampions(this.currentSport._id).subscribe(items => this.champions = items);
  }

}
