import { Component, OnInit } from '@angular/core';
import { Equipos } from 'src/app/entities/equipos';
import { InformacionEquiposService } from 'src/app/services/informacion-equipos.service';

@Component({
  selector: 'app-tabla-equipos',
  templateUrl: './tabla-equipos.component.html',
  styleUrls: ['./tabla-equipos.component.css']
})
export class TablaEquiposComponent implements OnInit {

  listaEquipos: Equipos[] | undefined;

  constructor(private equiposService : InformacionEquiposService) { }

  ngOnInit(): void {
    this.equiposService.mostrarEquipos().subscribe(
      (res : Equipos[]) => {
        this.listaEquipos = res;
      }
    );
  }

}
